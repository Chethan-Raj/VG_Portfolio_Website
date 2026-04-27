import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { portfolioItems } from '@/lib/config'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Business Portfolio',
  description: 'Explore our five pillars of gemstone expertise.',
}

const GRADIENTS = [
  'linear-gradient(135deg, #1B6B4A 0%, #2C4A3A 100%)',
  'linear-gradient(135deg, #9A7535 0%, #C9A84C 100%)',
  'linear-gradient(135deg, #1A3A6B 0%, #2C3A6B 100%)',
  'linear-gradient(135deg, #8B1A2A 0%, #6B1020 100%)',
  'linear-gradient(135deg, #8B1A87 0%, #561A8B 100%)',
  'linear-gradient(135deg, #C9A84C 0%, #9A7535 100%)',
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-ivory pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <svg width="120" height="18" viewBox="0 0 120 18" fill="none">
              <line x1="0" y1="9" x2="42" y2="9" stroke="#C9A84C" strokeOpacity="0.4" />
              <path d="M48,9 L54,3 L60,9 L54,15 Z" fill="#C9A84C" fillOpacity="0.5" />
              <path d="M54,5 L58,9 L54,13 L50,9 Z" fill="#C9A84C" />
              <line x1="66" y1="9" x2="120" y2="9" stroke="#C9A84C" strokeOpacity="0.4" />
            </svg>
          </div>
          <h1 className="font-display font-semibold text-5xl text-espresso mb-3">
            Business Portfolio
          </h1>
          <div className="ornament-line mx-auto mb-4" />
          <p className="font-body text-muted max-w-xl mx-auto">
            Five distinct specialisations — each a facet of our commitment to the extraordinary.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, i) => (
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className="group block rounded-sm overflow-hidden shadow-card card-lift bg-white"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0" style={{ background: GRADIENTS[i] }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {/* <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                /> */
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                }
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/25 transition-all duration-400" />
                <div className="absolute top-3 right-3 bg-espresso/70 backdrop-blur-sm px-2.5 py-1 rounded-sm">
                  <span className="font-accent text-[10px] tracking-widest text-gold uppercase">
                    {item.category}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <div
                  className="h-0.5 w-8 mb-3 rounded-full transition-all duration-400 group-hover:w-16"
                  style={{ background: item.color }}
                />
                <h2 className="font-display font-semibold text-2xl text-espresso mb-2 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h2>
                <p className="font-body text-sm text-muted mb-4 leading-relaxed">
                  {item.shortDesc}
                </p>
                <div className="flex items-center gap-2 text-gold font-body text-sm">
                  <span>Learn more</span>
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
