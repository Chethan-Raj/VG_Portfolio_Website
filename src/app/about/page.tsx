import type { Metadata } from 'next'
import Link from 'next/link'
import { Diamond, Globe, Scale, Star, ArrowRight } from 'lucide-react'
import { aboutConfig, siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'With generations of expertise, Gemstone Traders connects the world to nature\'s most extraordinary treasures.',
}

const ICON_MAP: Record<string, React.ElementType> = {
  diamond: Diamond,
  globe:   Globe,
  scale:   Scale,
  star:    Star,
}

const timeline = [
  { year: '1934', title: 'Founded in Mysore', desc: 'Started as a small family jewellery & gemstone business in Karnataka\'s heritage district.' },
  { year: '1992', title: 'Domestic Expansion', desc: 'Opened trade partnerships across India: Surat,Mumbai,Jaipur..' },
  { year: '1998', title: 'Manufacturing', desc: 'Launched our jewellery designing and manufacturing.' },
  { year: '2006', title: 'International Expansion', desc: 'Opened trade partnerships across major gem manufacturers around world.' },
  { year: '2024', title: 'Digital Transformation', desc: 'Expanded online presence to serve global clientele.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory">

      {/* ── Page hero ─────────────────────────── */}
      <div className="relative bg-espresso pt-36 pb-20 overflow-hidden">
        {/* Arch overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" fill="none">
            <path d="M0,400 L0,80 Q70,40 70,0 L150,0 L150,400" fill="rgba(201,168,76,0.05)" stroke="rgba(201,168,76,0.15)" strokeWidth="1"/>
            <path d="M1440,400 L1440,80 Q1370,40 1370,0 L1290,0 L1290,400" fill="rgba(201,168,76,0.05)" stroke="rgba(201,168,76,0.15)" strokeWidth="1"/>
            <line x1="150" y1="2" x2="1290" y2="2" stroke="rgba(201,168,76,0.2)" strokeWidth="1"/>
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
            About <em className="italic" style={{ color: '#E2C97E' }}>Us</em>
          </h1>
          <p className="font-body text-sand text-lg leading-relaxed">
            With generations of expertise and a passion for precious stones, we connect the world to nature&apos;s most extraordinary treasures.
          </p>
        </div>
      </div>

      {/* ── Story section ─────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-10 bg-gold" />
              <span className="font-accent text-xs tracking-widest text-gold uppercase">Our Heritage</span>
            </div>
            <h2 className="font-display font-semibold text-4xl text-espresso mb-6 leading-tight">
              A Legacy Built on<br />Trust &amp; Mastery
            </h2>
            <p className="font-body text-muted leading-relaxed mb-4">
              Founded in the Mysore, India, {siteConfig.name} has spent four decades forging relationships with the world&apos;s finest mines, artisans, and collectors. Our philosophy is simple: every gemstone tells a story, and every client deserves to know it.
            </p>
            <p className="font-body text-muted leading-relaxed mb-4">
              From the emerald mines of Colombia to the sapphire fields of Sri Lanka,— bringing the rarest of nature&apos;s treasures directly to your hands with full provenance and certification.
            </p>
            <p className="font-body text-muted leading-relaxed">
              Our commitment to authenticity, quality, and integrity has earned the trust of collectors, investors, and jewellers.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-sm border border-gold/25 pointer-events-none" />
            <svg className="absolute top-2 left-2 z-10" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M0,24 L0,0 L24,0" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeOpacity="0.6"/>
            </svg>
            <svg className="absolute bottom-2 right-2 z-10" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M24,0 L24,24 L0,24" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeOpacity="0.6"/>
            </svg>
            <div className="relative rounded-sm overflow-hidden shadow-card-hover aspect-[4/3] bg-gradient-to-br from-espresso-light to-espresso">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={aboutConfig.image}
                alt="Our workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ── Four pillars ──────────────────────── */}
        <div className="bg-parchment rounded-sm p-12 mb-20">
          <div className="text-center mb-10">
            <h2 className="font-display font-semibold text-4xl text-espresso mb-3">Our Pillars</h2>
            <div className="ornament-line mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutConfig.pillars.map((p) => {
              const Icon = ICON_MAP[p.icon] || Diamond
              return (
                <div key={p.icon} className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center bg-gold/8">
                    <Icon size={26} className="text-gold" />
                  </div>
                  <p className="font-body text-sm text-muted leading-snug whitespace-pre-line font-medium">
                    {p.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Timeline ─────────────────────────── */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-display font-semibold text-4xl text-espresso mb-3">Our Journey</h2>
            <div className="ornament-line mx-auto" />
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.year} className={`flex flex-col md:flex-row gap-6 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-white rounded-sm p-6 shadow-card inline-block ${i % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <h3 className="font-display font-semibold text-xl text-espresso mb-1">{item.title}</h3>
                      <p className="font-body text-sm text-muted">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-gold-glow z-10">
                    <span className="font-accent text-xs text-ivory font-bold">{item.year.slice(2)}</span>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ──────────────────────────────── */}
        <div className="text-center bg-espresso rounded-sm p-12">
          <h2 className="font-display font-semibold text-4xl text-ivory mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="font-body text-sand mb-8 max-w-lg mx-auto">
            Connect with our team of experts and discover the perfect gemstone for your collection.
          </p>
          <Link href="/contact" className="btn-gold">
            Work with Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
