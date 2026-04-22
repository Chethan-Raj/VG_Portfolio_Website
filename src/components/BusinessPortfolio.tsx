'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { portfolioItems } from '@/lib/config'

function useReveal() {
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
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

// Fallback gradient when no image provided
const PLACEHOLDER_GRADIENTS = [
  'linear-gradient(135deg, #1B6B4A 0%, #2C4A3A 100%)',
  'linear-gradient(135deg, #9A7535 0%, #C9A84C 100%)',
  'linear-gradient(135deg, #1A3A6B 0%, #2C3A6B 100%)',
  'linear-gradient(135deg, #8B1A2A 0%, #6B1020 100%)',
  'linear-gradient(135deg, #8B1A87 0%, #561A8B 100%)',
  'linear-gradient(135deg, #C9A84C 0%, #9A7535 100%)',
]

function PortfolioCard({
  item,
  index,
}: {
  item: (typeof portfolioItems)[number]
  index: number
}) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <Link
        href={`/portfolio/${item.slug}`}
        className="group block rounded-sm overflow-hidden shadow-card card-lift bg-white"
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          {/* Gradient fallback */}
          <div
            className="absolute inset-0"
            style={{ background: PLACEHOLDER_GRADIENTS[index] }}
          />
          {/* Actual image — overlays gradient when it loads */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            onError={(e) => {
              ;(e.target as HTMLImageElement).style.opacity = '0'
            }}
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/30 transition-all duration-400" />
          {/* Category badge */}
          <div className="absolute top-3 right-3 bg-espresso/70 backdrop-blur-sm px-2.5 py-1 rounded-sm">
            <span className="font-accent text-[10px] tracking-widest text-gold uppercase">
              {item.category}
            </span>
          </div>
          {/* Hover arrow */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
              <ArrowRight size={14} className="text-ivory" />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="p-5">
          {/* Gold accent line */}
          <div
            className="h-0.5 w-8 mb-3 rounded-full transition-all duration-400 group-hover:w-16"
            style={{ background: item.color }}
          />
          <h3 className="font-display font-semibold text-xl text-espresso mb-1.5 group-hover:text-gold transition-colors duration-300">
            {item.title}
          </h3>
          <p className="font-body text-sm text-muted leading-relaxed">
            {item.shortDesc}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default function BusinessPortfolio() {
  const titleRef = useReveal()

  return (
    <section id="portfolio" className="section-pad bg-parchment texture-overlay">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div ref={titleRef} className="reveal text-center mb-16">
          {/* Indian motif top ornament */}
          <div className="flex items-center justify-center mb-4">
            <svg width="120" height="18" viewBox="0 0 120 18" fill="none">
              <line x1="0" y1="9" x2="42" y2="9" stroke="#C9A84C" strokeOpacity="0.4" />
              <path d="M48,9 L54,3 L60,9 L54,15 Z" fill="#C9A84C" fillOpacity="0.5" />
              <path d="M54,5 L58,9 L54,13 L50,9 Z" fill="#C9A84C" />
              <line x1="66" y1="9" x2="120" y2="9" stroke="#C9A84C" strokeOpacity="0.4" />
            </svg>
          </div>

          <h2 className="font-display font-semibold text-5xl text-espresso mb-3">
            Business Portfolio
          </h2>
          <div className="ornament-line mx-auto mb-4" />
          <p className="font-body text-muted max-w-xl mx-auto">
            Six pillars of expertise, refined over generations of trust and dedication to the world of Gem and Jewellry.
          </p>
        </div>

        {/* 5-column grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {portfolioItems.map((item, i) => (
            <PortfolioCard key={item.slug} item={item} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <Link href="/portfolio" className="btn-outline-gold">
            View Full Portfolio
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
