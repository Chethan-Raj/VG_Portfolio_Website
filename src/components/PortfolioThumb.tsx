'use client'

import { useState } from 'react'
import Image from 'next/image'

interface PortfolioThumbProps {
  /** Path under /public, e.g. '/assets/images/portfolio/gia.jpg'. Falsy/empty → gradient. */
  image?: string
  /** Accent color used to build the fallback gradient (matches item.color). */
  color: string
  /** Alt text — pass item.title. */
  alt: string
}

/**
 * Small (w-10 h-10) portfolio thumbnail used in "Explore More".
 * Single source of truth: consumes portfolioItems.image directly — no
 * separate gradient-image mapping to keep in sync.
 * - Valid image → next/image, lazy-loaded, object-cover, fills the square.
 * - Missing image, or image fails to load → falls back to the original
 *   color-gradient square (same look as before this change).
 * - Spinner shown over the square while the image is loading.
 */
export default function PortfolioThumb({ image, color, alt }: PortfolioThumbProps) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  const hasImage = typeof image === 'string' && image.trim() !== '' && !errored
  const gradient = `linear-gradient(135deg, ${color}60, ${color})`

  return (
    <div
      className="relative w-10 h-10 rounded-sm flex-shrink-0 overflow-hidden"
      style={!hasImage ? { background: gradient } : undefined}
    >
      {hasImage && (
        <>
          <Image
            src={image as string}
            alt={alt}
            fill
            loading="lazy"
            sizes="40px"
            className="object-cover"
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
          />
          {!loaded && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: gradient }}
            >
              <div className="w-3 h-3 rounded-full border-2 border-white/70 border-t-transparent animate-spin" />
            </div>
          )}
        </>
      )}
    </div>
  )
}