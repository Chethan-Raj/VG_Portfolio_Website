import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Work with Us',
  description: 'Partner with Gemstone Traders to discover exceptional opportunities.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ivory">

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
          <h1 className="font-display font-semibold text-ivory mb-4"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
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

            {/* 
              NOTE: This is a static HTML form. 
              For form submissions, integrate with:
              - Formspree (https://formspree.io)
              - Using formspark.io
              - Vercel serverless functions
              - EmailJS
              Simply update the action attribute with your endpoint.
            */}
            <form
              action="https://submit-form.com/u7DNw1PUx"
              method="POST"
              className="space-y-5"
            >
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
                    className="w-full px-4 py-3 bg-white border border-sand/60 rounded-sm font-body text-sm text-espresso placeholder-muted/50 focus:outline-none focus:border-gold transition-colors duration-200"
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
                    className="w-full px-4 py-3 bg-white border border-sand/60 rounded-sm font-body text-sm text-espresso placeholder-muted/50 focus:outline-none focus:border-gold transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block font-accent text-[11px] tracking-widest text-muted uppercase mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 bg-white border border-sand/60 rounded-sm font-body text-sm text-espresso placeholder-muted/50 focus:outline-none focus:border-gold transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block font-accent text-[11px] tracking-widest text-muted uppercase mb-2">
                  Area of Interest
                </label>
                <select
                  name="interest"
                  className="w-full px-4 py-3 bg-white border border-sand/60 rounded-sm font-body text-sm text-espresso focus:outline-none focus:border-gold transition-colors duration-200"
                >
                  <option value="">Select a service...</option>
                  <option value="gem-auctions">Diamonds</option>
                  <option value="rare-gemstones">Gemstones</option>
                  <option value="custom-jewelry">Custom Jewelry</option>
                  <option value="gemstone-sourcing">Gemstone Sourcing</option>
                  <option value="investment-consultancy">GB-CZ Bulk Program</option>
                </select>
              </div>

              <div>
                <label className="block font-accent text-[11px] tracking-widest text-muted uppercase mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 bg-white border border-sand/60 rounded-sm font-body text-sm text-espresso placeholder-muted/50 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full justify-center !py-4 text-sm"
              >
                Send Message
              </button>
            </form>
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
                  { Icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                  { Icon: Mail,  label: 'Email',  value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                  { Icon: Clock, label: 'Hours',  value: siteConfig.hours },
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
