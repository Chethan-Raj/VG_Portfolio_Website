'use client'

import { useCallback, useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import ImageCard from './ImageCard'
import type { GalleryImage } from '@/lib/config'

interface GalleryLightboxProps {
  images: GalleryImage[]
  title: string
  accentColor: string
  activeIndex: number
  setActiveIndex: (i: number) => void
  onClose: () => void
}

// Swipe must travel at least this many px (and be more horizontal than
// vertical) to count as a navigation gesture rather than a tap/scroll.
const SWIPE_THRESHOLD = 40

export default function GalleryLightbox({
  images,
  title,
  accentColor,
  activeIndex,
  setActiveIndex,
  onClose,
}: GalleryLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  const prev = useCallback(
    () => setActiveIndex((activeIndex - 1 + images.length) % images.length),
    [activeIndex, images.length, setActiveIndex]
  )
  const next = useCallback(
    () => setActiveIndex((activeIndex + 1) % images.length),
    [activeIndex, images.length, setActiveIndex]
  )

  // Keyboard navigation: Esc / ← / → , plus a simple focus trap on Tab.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()

      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled])'
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  // Lock background scroll while open.
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Move focus into the dialog on mount so keyboard/screen-reader users
  // aren't left behind a thumbnail hidden under the overlay.
  useEffect(() => {
    closeBtnRef.current?.focus()
  }, [])

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touchStart.current.x
    const dy = t.clientY - touchStart.current.y
    touchStart.current = null

    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) prev()
      else next()
    }
  }

  const active = images[activeIndex]

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} image preview`}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(28,14,6,0.95)' }}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        ref={closeBtnRef}
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
        style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.35)' }}
        aria-label="Close preview"
      >
        <X size={18} className="text-ivory" />
      </button>

      {images.length > 1 && (
        <button
          type="button"
          onClick={e => {
            e.stopPropagation()
            prev()
          }}
          className="absolute left-4 md:left-8 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.35)' }}
          aria-label="Previous image"
        >
          <ChevronLeft size={22} className="text-ivory" />
        </button>
      )}

      {images.length > 1 && (
        <button
          type="button"
          onClick={e => {
            e.stopPropagation()
            next()
          }}
          className="absolute right-4 md:right-8 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.35)' }}
          aria-label="Next image"
        >
          <ChevronRight size={22} className="text-ivory" />
        </button>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div
          className="absolute top-5 left-5 z-10 px-3 py-1.5 rounded-full font-body text-xs tracking-wide text-ivory"
          style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.35)' }}
          aria-live="polite"
        >
          {activeIndex + 1} / {images.length}
        </div>
      )}

      <div
        className="relative max-w-[95vw] md:max-w-5xl mx-6 md:mx-16 rounded-sm"
        onClick={e => e.stopPropagation()}
      >
        <div
          key={active.src}
          style={{ animation: 'fadeInScale 0.25s ease' }}
        >
          <ImageCard src={active.src} alt={active.alt} priority layout="natural" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none rounded-sm"
          style={{ border: '1px solid rgba(201,168,76,0.25)' }}
        />
      </div>

      {/* Caption */}
      {active.caption && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 max-w-lg px-4 text-center">
          <p className="font-body text-sm text-ivory/90">{active.caption}</p>
        </div>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={e => {
                e.stopPropagation()
                setActiveIndex(i)
              }}
              className="rounded-full transition-all duration-200"
              style={{
                width: i === activeIndex ? 24 : 8,
                height: 8,
                background: i === activeIndex ? accentColor : 'rgba(201,168,76,0.35)',
              }}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}