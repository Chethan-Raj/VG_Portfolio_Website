'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

interface GalleryLightboxProps {
  images: string[]
  title: string
  accentColor: string
}

export default function GalleryLightbox({ images, title, accentColor }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const open  = (i: number) => setActiveIndex(i)
  const close = useCallback(() => setActiveIndex(null), [])

  const prev = useCallback(() =>
    setActiveIndex(i => (i === null ? null : (i - 1 + images.length) % images.length)),
  [images.length])

  const next = useCallback(() =>
    setActiveIndex(i => (i === null ? null : (i + 1) % images.length)),
  [images.length])

  // Keyboard navigation
  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeIndex, close, prev, next])

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeIndex])

  return (
    <>
      {/* ── Gallery grid ─────────────────────── */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => open(i)}
            className="group relative rounded-sm overflow-hidden aspect-video shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={`View ${title} image ${i + 1}`}
          >
            {/* Gradient fallback */}
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${accentColor}40, #2C1A0E80)` }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center">
                <ZoomIn size={18} className="text-ivory" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* ── Lightbox overlay ─────────────────── */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(28,14,6,0.95)' }}
          onClick={close}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.35)' }}
            aria-label="Close preview"
          >
            <X size={18} className="text-ivory" />
          </button>

          {/* Prev button */}
          {images.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              className="absolute left-4 md:left-8 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.35)' }}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} className="text-ivory" />
            </button>
          )}

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); next() }}
              className="absolute right-4 md:right-8 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.35)' }}
              aria-label="Next image"
            >
              <ChevronRight size={22} className="text-ivory" />
            </button>
          )}

          {/* Main image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-16 rounded-sm overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Gradient fallback */}
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${accentColor}40, #2C1A0E80)` }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={activeIndex}
              src={images[activeIndex]}
              alt={`${title} ${activeIndex + 1}`}
              className="relative w-full max-h-[85vh] object-contain"
              style={{ animation: 'fadeInScale 0.25s ease' }}
            />
            {/* Gold border frame */}
            <div
              className="absolute inset-0 pointer-events-none rounded-sm"
              style={{ border: '1px solid rgba(201,168,76,0.25)' }}
            />
          </div>

          {/* Counter + dots */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setActiveIndex(i) }}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width:   i === activeIndex ? 24 : 8,
                    height:  8,
                    background: i === activeIndex ? accentColor : 'rgba(201,168,76,0.35)',
                  }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Keyframe for image entrance */}
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  )
}
