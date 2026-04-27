'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { heroConfig, siteConfig } from '@/lib/config'
import Image from 'next/image'

// Decorative Indian arch / jaali SVG overlay
function ArchOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left pillar arch */}
      <path
        d="M0,900 L0,200 Q80,150 80,80 Q80,0 160,0 L160,900 Z"
        fill="rgba(201,168,76,0.06)"
        stroke="rgba(201,168,76,0.18)"
        strokeWidth="1"
      />
      {/* Left inner arch detail */}
      <path
        d="M20,900 L20,220 Q90,175 90,100 Q90,20 155,20 L155,900"
        fill="none"
        stroke="rgba(201,168,76,0.10)"
        strokeWidth="0.8"
      />
      {/* Right pillar arch */}
      <path
        d="M1440,900 L1440,200 Q1360,150 1360,80 Q1360,0 1280,0 L1280,900 Z"
        fill="rgba(201,168,76,0.06)"
        stroke="rgba(201,168,76,0.18)"
        strokeWidth="1"
      />
      {/* Right inner arch detail */}
      <path
        d="M1420,900 L1420,220 Q1350,175 1350,100 Q1350,20 1285,20 L1285,900"
        fill="none"
        stroke="rgba(201,168,76,0.10)"
        strokeWidth="0.8"
      />
      {/* Top ornament band */}
      <rect x="160" y="0" width="1120" height="3" fill="url(#goldLine)" />
      {/* Central keystone motif */}
      <path
        d="M680,12 L720,0 L760,12 L750,30 L710,22 L670,30 Z"
        fill="rgba(201,168,76,0.25)"
        stroke="rgba(201,168,76,0.45)"
        strokeWidth="0.8"
      />
      <circle cx="720" cy="15" r="4" fill="rgba(201,168,76,0.5)" />
      {/* Jaali dots — left pillar */}
      {[200, 260, 320, 380, 440, 500, 560, 620, 680, 740, 800].map((y, i) => (
        <circle key={i} cx="120" cy={y} r="2.5" fill="rgba(201,168,76,0.20)" />
      ))}
      {/* Jaali dots — right pillar */}
      {[200, 260, 320, 380, 440, 500, 560, 620, 680, 740, 800].map((y, i) => (
        <circle key={i} cx="1320" cy={y} r="2.5" fill="rgba(201,168,76,0.20)" />
      ))}
      <defs>
        <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="30%" stopColor="#C9A84C" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#C9A84C" stopOpacity="0.5" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(false)
  const isVideo = heroConfig.type === 'video'

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Media background ─────────────────────── */}
      {isVideo ? (
        <video
          ref={videoRef}
          src={heroConfig.videoSrc}
          poster={heroConfig.poster}
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        // <img
        // // uncomment the below 2 lines to have any image in the homepage main section background/hero section
        //   // src={heroConfig.src}
        //   // alt="Gemstone Traders hero"
        //   className="absolute inset-0 w-full h-full object-cover"
        // />
         heroConfig.src ? (
        <Image
          src={heroConfig.src}
          alt="Vasavi Gems hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"/>) : null
      )}

      {/* ── Gradient overlays ──────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/35 to-espresso/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/30 via-transparent to-espresso/30" />

      {/* ── Indian arch decorative overlay ─────── */}
      <ArchOverlay />

      {/* ── Hero content ───────────────────────── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Pre-title */}
        <div
          className={`flex items-center justify-center gap-3 mb-6 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          <div className="h-px w-12 bg-gold opacity-60" />
          <span className="font-accent text-xs tracking-[0.3em] text-gold uppercase">
            Est. in Mysore, India
          </span>
          <div className="h-px w-12 bg-gold opacity-60" />
        </div>

        {/* Main headline */}
        <h1
          className={`font-display font-light text-ivory leading-tight mb-6 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
        >
          {siteConfig.tagline.split('. ').map((line, i) => (
            <span key={i} className="block">
              {i === 0 ? (
                <>
                  {line.split(' ')[0]}{' '}
                  <em className="italic" style={{ color: '#E2C97E' }}>
                    {line.split(' ').slice(1).join(' ')}.
                  </em>
                </>
              ) : (
                line + (i < siteConfig.tagline.split('. ').length - 1 ? '.' : '')
              )}
            </span>
          ))}
        </h1>

        {/* Sub-tagline */}
        <p
          className={`font-body text-ivory/75 text-lg mb-10 tracking-wide transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          {siteConfig.subTagline}
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          <Link href="/portfolio" className="btn-gold">
            Explore Portfolio
            <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="btn-outline-gold !text-ivory !border-ivory/60 hover:!bg-ivory/10">
            Work with Us
          </Link>
        </div>
      </div>

      {/* ── Bottom scroll indicator ─────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent animate-pulse" />
        <span className="font-body text-xs text-ivory tracking-[0.2em] uppercase">Scroll</span>
      </div>
    </section>
  )
}
