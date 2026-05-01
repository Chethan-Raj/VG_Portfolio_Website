'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react'
import { siteConfig } from '@/lib/config'

const COUNTRIES = [
  { code: 'IN', dial: '+91',  flag: '🇮🇳', digits: 10 },
  { code: 'US', dial: '+1',   flag: '🇺🇸', digits: 10 },
  { code: 'GB', dial: '+44',  flag: '🇬🇧', digits: 10 },
  { code: 'AE', dial: '+971', flag: '🇦🇪', digits: 9  },
  { code: 'SG', dial: '+65',  flag: '🇸🇬', digits: 8  },
  { code: 'AU', dial: '+61',  flag: '🇦🇺', digits: 9  },
  { code: 'CA', dial: '+1',   flag: '🇨🇦', digits: 10 },
  { code: 'ZA', dial: '+27',  flag: '🇿🇦', digits: 9  },
  { code: 'HK', dial: '+852', flag: '🇭🇰', digits: 8  },
  { code: 'TH', dial: '+66',  flag: '🇹🇭', digits: 9  },
]

export default function ContactPage() {
  const [country, setCountry]     = useState(COUNTRIES[0])
  const [phone, setPhone]         = useState('')
  const [showDrop, setShowDrop]   = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const inputCls =
    'w-full px-4 py-3 bg-white border border-sand/60 rounded-sm font-body text-sm text-espresso placeholder-muted/50 focus:outline-none focus:border-gold transition-colors duration-200'

  return (
    <div className="min-h-screen bg-ivory">

      {/* Hidden iframe — receives form POST response so page doesn't navigate */}
      <iframe name="hidden-submit" style={{ display: 'none' }} title="form-target" />

      {/* ── Page hero ─────────────────────────── */}
      <div className="relative bg-espresso pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" fill="none">
            <path d="M0,400 L0,80 Q70,40 70,0 L150,0 L150,400" fill="rgba(201,168,76,0.05)" stroke="rgba(201,168,76,0.15)" strokeWidth="1"/>
            <path d="M1440,400 L1440,80 Q1370,40 1370,0 L1290,0 L1290,400" fill="rgba(201,168,76,0.05)" stroke="rgba(201,168,76,0.15)" strokeWidth="1"/>
          </svg>
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <svg width="120" height="18" viewBox="0 0 120 18" fill="none">
              <line x1="0" y1="9" x2="42" y2="9" stroke="#C9A84C" strokeOpacity="0.4"/>
              <path d="M48,9 L54,3 L60,9 L54,15 Z" fill="#C9A84C" fillOpacity="0.5"/>
              <path d="M54,5 L58,9 L54,13 L50,9 Z" fill="#C9A84C"/>
              <line x1="66" y1="9" x2="120" y2="9" stroke="#C9A84C" strokeOpacity="0.4"/>
            </svg>
          </div>
          <h1
            className="font-display font-semibold text-ivory mb-4"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            Let&apos;s Work <em className="italic" style={{ color: '#E2C97E' }}>Together</em>
          </h1>
          <p className="font-body text-sand text-lg leading-relaxed">
            Partner with us to discover exceptional opportunities in the world of gemstones.
          </p>
        </div>
      </div>

      {/* ── Content ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* ── Contact form ──────────────────── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-10 bg-gold" />
              <span className="font-accent text-xs tracking-widest text-gold uppercase">Send a Message</span>
            </div>
            <h2 className="font-display font-semibold text-3xl text-espresso mb-8">
              Get in Touch
            </h2>

            {submitted ? (
              <div className="p-8 border border-gold/40 bg-gold/5 rounded-sm text-center space-y-2">
                <div className="flex items-center justify-center mb-4">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="23" stroke="#C9A84C" strokeOpacity="0.4"/>
                    <path d="M14 24l7 7 13-14" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-display text-2xl text-espresso">Message Sent ✦</p>
                <p className="font-body text-sm text-muted">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                <button
                  onClick={() => { setSubmitted(false); setPhone('') }}
                  className="mt-4 font-accent text-xs tracking-widest text-gold uppercase hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                action="https://submit-form.com/u7DNw1PUx"
                method="POST"
                target="hidden-submit"
                onSubmit={() => setTimeout(() => setSubmitted(true), 800)}
                className="space-y-5"
              >
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-accent text-[11px] tracking-widest text-muted uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block font-accent text-[11px] tracking-widest text-muted uppercase mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Phone with country picker */}
                <div>
                  <label className="block font-accent text-[11px] tracking-widest text-muted uppercase mb-2">
                    Phone *
                  </label>
                  {/* Hidden field carries the full number for form submission */}
                  <input type="hidden" name="phone" value={`${country.dial} ${phone}`} />
                  <div className="flex gap-2">

                    {/* Country dropdown */}
                    <div className="relative flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => setShowDrop(d => !d)}
                        className="flex items-center gap-1.5 px-3 py-3 h-full bg-white border border-sand/60 rounded-sm text-sm font-body text-espresso focus:outline-none focus:border-gold transition-colors whitespace-nowrap"
                      >
                        <span>{country.flag}</span>
                        <span className="text-muted">{country.dial}</span>
                        <ChevronDown size={12} className="text-muted" />
                      </button>
                      {showDrop && (
                        <div className="absolute z-50 top-full left-0 mt-1 w-44 bg-white border border-sand/60 rounded-sm shadow-card max-h-56 overflow-y-auto">
                          {COUNTRIES.map(c => (
                            <button
                              key={c.code}
                              type="button"
                              onClick={() => { setCountry(c); setPhone(''); setShowDrop(false) }}
                              className="w-full flex items-center gap-2 px-3 py-2 text-sm font-body text-espresso hover:bg-gold/10 transition-colors text-left"
                            >
                              <span>{c.flag}</span>
                              <span>{c.dial}</span>
                              <span className="text-muted text-xs">{c.code}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Number input — digits only, capped at country max */}
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={e => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, country.digits)
                        setPhone(val)
                      }}
                      placeholder={'X'.repeat(country.digits)}
                      pattern={`[0-9]{${country.digits}}`}
                      title={`Enter ${country.digits}-digit phone number`}
                      className={`${inputCls} flex-1`}
                    />
                  </div>
                  <p className="mt-1 font-accent text-[10px] text-muted">
                    {phone.length}/{country.digits} digits
                  </p>
                </div>

                {/* Area of Interest */}
                <div>
                  <label className="block font-accent text-[11px] tracking-widest text-muted uppercase mb-2">
                    Area of Interest *
                  </label>
                  <select
                    name="interest"
                    required
                    defaultValue=""
                    className={inputCls}
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="gem-auctions">Diamonds</option>
                    <option value="rare-gemstones">Gemstones</option>
                    <option value="custom-jewelry">Custom Jewelry</option>
                    <option value="gemstone-sourcing">Gemstone Sourcing</option>
                    <option value="investment-consultancy">GB-CZ Bulk Program</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-accent text-[11px] tracking-widest text-muted uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full justify-center !py-4 text-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* ── Contact info + map ────────────── */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-0.5 w-10 bg-gold" />
                <span className="font-accent text-[11px] tracking-widest text-gold uppercase">Contact Details</span>
              </div>
              <h2 className="font-display font-semibold text-3xl text-espresso mb-8">
                Visit Us
              </h2>
              <div className="space-y-5">
                {[
                  { Icon: MapPin, label: 'Address', value: `${siteConfig.name}, ${siteConfig.address}` },
                  { Icon: Phone, label: 'Phone',   value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                  { Icon: Mail,  label: 'Email',   value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                  { Icon: Clock, label: 'Hours',   value: siteConfig.hours },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 flex-shrink-0">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-accent text-[10px] tracking-widest text-muted uppercase mb-0.5">{label}</p>
                      {href
                        ? <a href={href} className="font-body text-sm text-espresso hover:text-gold transition-colors">{value}</a>
                        : <p className="font-body text-sm text-espresso">{value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini map */}
            <div className="relative rounded-sm overflow-hidden shadow-card">
              <div className="absolute inset-0 border border-gold/30 z-10 pointer-events-none rounded-sm" />
              <iframe
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="300"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Contact map"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}