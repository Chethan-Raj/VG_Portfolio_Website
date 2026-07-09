'use client'

import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver that adds the `visible` class (see
 * `.reveal` / `.reveal.visible` in globals.css) once the element scrolls
 * into view, then disconnects.
 *
 * Previously this exact function was copy-pasted in AboutSection.tsx,
 * BusinessPortfolio.tsx and LocationSection.tsx. Consolidated here so
 * future changes (e.g. re-triggering on scroll-out) happen in one place.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
