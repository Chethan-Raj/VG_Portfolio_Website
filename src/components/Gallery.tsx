'use client'

import { useCallback, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { ZoomIn } from 'lucide-react'
import ImageCard from './ImageCard'
import type { GalleryImage } from '@/lib/config'

// Lightbox is only needed once a user actually opens an image, so it's
// kept out of the initial bundle and fetched on demand.
const GalleryLightbox = dynamic(() => import('./GalleryLightbox'), {
  ssr: false,
})

interface GalleryProps {
  images: GalleryImage[]
  title: string
  accentColor: string
}

export default function Gallery({ images, title, accentColor }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  // Remembers which thumbnail opened the lightbox so focus can return
  // there on close, instead of being lost to <body>.
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const openAt = (i: number, e: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = e.currentTarget
    setActiveIndex(i)
  }

  const close = useCallback(() => {
    setActiveIndex(null)
    triggerRef.current?.focus()
  }, [])

  if (images.length === 0) return null

  return (
    <>
      {/* ── Gallery grid ─────────────────────── */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={e => openAt(i, e)}
            className="group relative rounded-sm overflow-hidden aspect-video shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={`View ${title} image ${i + 1} of ${images.length}: ${img.caption}`}
          >
            {/* Reserves the box + gives the loading/error state a backdrop */}
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${accentColor}40, #2C1A0E80)` }}
            />
            <ImageCard
              src={img.src}
              alt={img.alt}
              priority={i < 2}
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center">
                <ZoomIn size={18} className="text-ivory" aria-hidden="true" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <GalleryLightbox
          images={images}
          title={title}
          accentColor={accentColor}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onClose={close}
        />
      )}
    </>
  )
}