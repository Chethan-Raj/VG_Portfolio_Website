'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ImageOff } from 'lucide-react'

type Status = 'loading' | 'loaded' | 'error'

// These <img> tags are the only image path in the app that don't already
// go through next/image (the "fill" grid needs opacity/spinner control
// tied to a raw <img>'s load/error events, and "natural" needs the
// browser's own intrinsic-size scaling, which next/image can't do without
// known width/height). Without this, the browser downloaded the original
// upload straight from /public — often 3000-4600px, 2-8MB per photo.
//
// Fix: route through Next's own image-optimization endpoint (the same
// sharp-based pipeline + avif/webp negotiation next/image uses under the
// hood, already configured in next.config.js) with explicit widths, via
// srcSet, instead of the raw file. onLoad/onError/complete/naturalWidth
// all keep working — it's still a plain <img>, just a smaller `src`.
const DPR_WIDTHS: Record<'fill' | 'natural', number[]> = {
  fill: [640, 828, 1200], // grid thumbnails — never render wider than ~600px
  natural: [750, 1080, 1920], // lightbox — can reach ~92vw on large screens
}

function optimizedSrc(src: string, width: number, quality = 75) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`
}

function buildSrcSet(src: string, layout: 'fill' | 'natural') {
  return DPR_WIDTHS[layout].map(w => `${optimizedSrc(src, w)} ${w}w`).join(', ')
}

interface ImageCardProps {
  /** Image path — sourced from lib/config.ts */
  src: string
  /** Alt text — sourced from lib/config.ts */
  alt: string
  /** First visible images should load eagerly; everything else lazily */
  priority?: boolean
  /** Extra classes applied to the <img> itself (e.g. hover scale) */
  className?: string
  /** Only used by layout="fill" — 'cover' crops to fill the box, 'contain' letterboxes it. */
  objectFit?: 'cover' | 'contain'
  /**
   * 'fill' (default) — absolutely fills a sized parent (e.g. an aspect-ratio
   *    grid cell). Used for gallery thumbnails.
   * 'natural' — sizes itself to the image's own aspect ratio, capped by
   *    max-width/max-height. Used for the lightbox's main image.
   */
  layout?: 'fill' | 'natural'
}

const Spinner = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-parchment" aria-hidden="true">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/assets/icons/spinner.svg"
      alt=""
      width={28}
      height={28}
      className="w-7 h-7 animate-spin opacity-70"
    />
  </div>
)

const ErrorFallback = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-parchment text-muted">
    <ImageOff size={20} aria-hidden="true" />
    <span className="font-body text-[11px]">Image unavailable</span>
  </div>
)

export default function ImageCard({
  src,
  alt,
  priority = false,
  className = '',
  objectFit = 'cover',
  layout = 'fill',
}: ImageCardProps) {
  const [status, setStatus] = useState<Status>('loading')

  // A cached-or-already-decoded <img> can finish loading before React
  // hydrates and attaches onLoad — the browser fires `load` once, on its
  // own timeline, and hydration can lose that race. That's the bug: on a
  // refresh, the browser serves the image straight from cache, completes
  // it near-instantly, and our onLoad handler simply isn't listening yet.
  //
  // Fix: whenever we get a handle on the DOM node (mount, or a fresh <img>
  // after `src` changes), synchronously check img.complete ourselves
  // instead of waiting for an event that may have already happened.
  // `naturalWidth === 0` on a "complete" image means it failed to decode
  // (some browsers mark broken images complete=true), so that's treated
  // as an error, not a success.
  const syncFromElement = useCallback((el: HTMLImageElement | null) => {
    if (!el) return
    if (el.complete) {
      setStatus(el.naturalWidth > 0 ? 'loaded' : 'error')
    }
  }, [])

  // Callback ref: fires during commit, as early as the node exists — this
  // catches the case where the image was already complete by the time
  // React attached to it (the exact refresh/cache scenario above).
  const imgRef = useRef<HTMLImageElement | null>(null)
  const setRef = useCallback(
    (el: HTMLImageElement | null) => {
      imgRef.current = el
      syncFromElement(el)
    },
    [syncFromElement]
  )

  // If this same component instance is ever reused for a different `src`
  // (e.g. the lightbox swapping images without remounting), reset to
  // 'loading' and re-check the new element — keeps each image's state
  // independent instead of showing the previous image's stale status.
  useEffect(() => {
    setStatus('loading')
    syncFromElement(imgRef.current)
  }, [src, syncFromElement])

  const img = status !== 'error' && (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={setRef}
      src={optimizedSrc(src, DPR_WIDTHS[layout][DPR_WIDTHS[layout].length - 1])}
      srcSet={buildSrcSet(src, layout)}
      sizes={layout === 'fill' ? '(max-width: 768px) 50vw, 420px' : '92vw'}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      onLoad={e => {
        const el = e.currentTarget
        setStatus(el.naturalWidth > 0 ? 'loaded' : 'error')
      }}
      onError={() => setStatus('error')}
      className={
        layout === 'fill'
          ? `absolute inset-0 w-full h-full ${
              objectFit === 'cover' ? 'object-cover' : 'object-contain'
            } transition-opacity duration-500 ${
              status === 'loaded' ? 'opacity-100' : 'opacity-0'
            } ${className}`
          : // natural: no forced box — the browser scales the image down to
            // fit these bounds while keeping its own intrinsic aspect ratio,
            // so portrait stays tall/narrow and landscape stays wide/short.
            `max-w-[92vw] max-h-[70vh] sm:max-h-[75vh] w-auto h-auto object-contain rounded-sm transition-opacity duration-500 ${
              status === 'loaded' ? 'opacity-100' : 'opacity-0'
            } ${className}`
      }
    />
  )

  if (layout === 'fill') {
    return (
      <>
        {status === 'loading' && <Spinner />}
        {status === 'error' ? <ErrorFallback /> : img}
      </>
    )
  }

  // natural layout: wrap so the box can shrink/grow to the image's real
  // size once known, but still holds a stable footprint while loading
  // (so the spinner has somewhere to sit and the modal doesn't pop to 0px).
  return (
    <div
      className={`relative flex items-center justify-center rounded-sm ${
        status === 'loaded' ? '' : 'min-w-[70vw] min-h-[38vh] sm:min-w-[26rem] sm:min-h-[20rem]'
      }`}
    >
      {status === 'loading' && <Spinner />}
      {status === 'error' ? <ErrorFallback /> : img}
    </div>
  )
}