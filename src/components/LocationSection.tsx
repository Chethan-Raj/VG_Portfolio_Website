'use client'

import { useEffect, useRef } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { siteConfig } from '@/lib/config'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

const contactItems = [
  {
    icon: MapPin,
    label: siteConfig.name,
    value: siteConfig.address,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: siteConfig.hours,
  },
]

export default function LocationSection() {
  const leftRef  = useReveal()
  const rightRef = useReveal()

  return (
    <section id="location" className="section-pad bg-espresso texture-overlay">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center mb-4">
            <svg width="120" height="18" viewBox="0 0 120 18" fill="none">
              <line x1="0" y1="9" x2="42" y2="9" stroke="#C9A84C" strokeOpacity="0.35" />
              <path d="M48,9 L54,3 L60,9 L54,15 Z" fill="#C9A84C" fillOpacity="0.5" />
              <path d="M54,5 L58,9 L54,13 L50,9 Z" fill="#C9A84C" />
              <line x1="66" y1="9" x2="120" y2="9" stroke="#C9A84C" strokeOpacity="0.35" />
            </svg>
          </div>
          <h2 className="font-display font-semibold text-5xl text-ivory mb-3">
            Our <em className="italic" style={{ color: '#E2C97E' }}>Location</em>
          </h2>
          <div className="ornament-line mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Contact info ─────────────────────── */}
          <div ref={leftRef} className="reveal space-y-6">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center bg-gold/8 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-accent text-[11px] tracking-widest text-gold/70 uppercase mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="font-body text-sand hover:text-gold transition-colors duration-200"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-body text-sand">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Decorative divider */}
            <div className="border-t border-gold/15 pt-6">
              <p className="font-body text-sm text-muted italic">
                "Every stone has a story. Come, let us find yours."
              </p>
            </div>
          </div>

          {/* ── Google Map ───────────────────────── */}
          <div ref={rightRef} className="reveal">
            <div className="relative rounded-sm overflow-hidden shadow-gold-glow">
              {/* Gold border frame */}
              <div className="absolute inset-0 border border-gold/30 rounded-sm z-10 pointer-events-none" />
              <iframe
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gemstone Traders location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
