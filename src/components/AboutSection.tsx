'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Diamond, Globe, Scale, Star } from 'lucide-react'
import { aboutConfig } from '@/lib/config'

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

const ICON_MAP: Record<string, React.ElementType> = {
  diamond: Diamond,
  globe:   Globe,
  scale:   Scale,
  star:    Star,
}

function Pillar({ icon, label, delay }: { icon: string; label: string; delay: number }) {
  const ref = useReveal()
  const Icon = ICON_MAP[icon] || Diamond
  return (
    <div ref={ref} className="reveal flex flex-col items-center text-center gap-3"
      style={{ transitionDelay: `${delay}ms` }}>
      <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center bg-gold/5">
        <Icon size={22} className="text-gold" />
      </div>
      <p className="font-body text-sm text-muted leading-snug whitespace-pre-line">
        {label}
      </p>
    </div>
  )
}

export default function AboutSection() {
  const textRef  = useReveal()
  const imageRef = useReveal(0.1)

  return (
    <section id="about" className="section-pad bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Text side ──────────────────────── */}
          <div ref={textRef} className="reveal">
            {/* Decorative top bar */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-10 bg-gold" />
              <span className="font-accent text-xs tracking-widest text-gold uppercase">Our Story</span>
            </div>

            <h2 className="font-display font-semibold text-5xl text-espresso mb-5 leading-tight">
              About <em className="italic text-gold-dark">Us</em>
            </h2>

            <p className="font-body text-muted leading-relaxed mb-4">
              With generations of expertise and a passion for precious stones, we connect the world to
              nature's most extraordinary treasures. Our commitment to authenticity, quality, and
              integrity has earned the trust of comman man and jewellers.
            </p>
            <p className="font-body text-muted leading-relaxed mb-8">
              Rooted in the cultural capital of Karnataka — Mysore — we blend centuries of rich
              tradition craftmanship with global market insight, delivering unparalleled value to
              every client we serve.
            </p>

            {/* Pillars grid */}
            <div className="grid grid-cols-4 gap-4 mb-10">
              {aboutConfig.pillars.map((p, i) => (
                <Pillar key={p.icon} icon={p.icon} label={p.label} delay={i * 100} />
              ))}
            </div>

            <Link href="/about" className="btn-gold">
              Learn More
            </Link>
          </div>

          {/* ── Image side ─────────────────────── */}
          <div ref={imageRef} className="reveal relative">
            {/* Decorative frame */}
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-sm border border-gold/25 pointer-events-none"
              style={{ zIndex: 0 }}
            />
            {/* Corner ornaments */}
            <svg className="absolute top-2 left-2 z-10" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M0,24 L0,0 L24,0" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeOpacity="0.6"/>
            </svg>
            <svg className="absolute bottom-2 right-2 z-10" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M24,0 L24,24 L0,24" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeOpacity="0.6"/>
            </svg>

            {/* Image */}
            <div className="relative rounded-sm overflow-hidden shadow-card-hover aspect-[4/5]">
              {/* Gradient fallback */}
              <div className="absolute inset-0 bg-gradient-to-br from-espresso-light to-espresso" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={aboutConfig.image}
                alt="Gemstone expert at work"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }}
              />
              {/* Subtle gold vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
