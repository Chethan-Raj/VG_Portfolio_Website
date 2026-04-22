'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function WorkTogetherSection() {
  return (
    <section className="section-pad bg-parchment relative overflow-hidden texture-overlay">
      {/* Background Indian pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="jaali" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="20" fill="none" stroke="#2C1A0E" strokeWidth="0.5"/>
              <circle cx="30" cy="30" r="10" fill="none" stroke="#2C1A0E" strokeWidth="0.5"/>
              <line x1="0" y1="30" x2="60" y2="30" stroke="#2C1A0E" strokeWidth="0.5"/>
              <line x1="30" y1="0" x2="30" y2="60" stroke="#2C1A0E" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#jaali)"/>
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Ornament */}
        <div className="flex items-center justify-center mb-5">
          <svg width="120" height="18" viewBox="0 0 120 18" fill="none">
            <line x1="0" y1="9" x2="42" y2="9" stroke="#C9A84C" strokeOpacity="0.4" />
            <path d="M48,9 L54,3 L60,9 L54,15 Z" fill="#C9A84C" fillOpacity="0.5" />
            <path d="M54,5 L58,9 L54,13 L50,9 Z" fill="#C9A84C" />
            <line x1="66" y1="9" x2="120" y2="9" stroke="#C9A84C" strokeOpacity="0.4" />
          </svg>
        </div>

        <h2 className="font-display font-semibold text-espresso mb-4"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Let&apos;s Work <em className="italic text-gold-dark">Together</em>
        </h2>

        <p className="font-body text-muted text-lg mb-10">
          Partner with us to discover exceptional opportunities in the world of gemstones.
        </p>

        <Link href="/contact" className="btn-gold text-base !px-10 !py-4">
          Work with Us
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
