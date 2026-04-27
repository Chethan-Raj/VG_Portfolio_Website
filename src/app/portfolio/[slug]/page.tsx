import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { portfolioItems } from '@/lib/config'
import GalleryLightbox from '@/components/GalleryLightbox'
import type { Metadata } from 'next'
import Image from 'next/image'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return portfolioItems.map(item => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = portfolioItems.find(i => i.slug === params.slug)
  if (!item) return {}
  return {
    title: item.title,
    description: item.overview,
  }
}

export default function PortfolioDetailPage({ params }: Props) {
  const item = portfolioItems.find(i => i.slug === params.slug)
  if (!item) notFound()

  const others = portfolioItems.filter(i => i.slug !== item.slug).slice(0, 6)

  return (
    <div className="min-h-screen bg-ivory">

      {/* ── Hero banner ───────────────────────── */}
      <div className="relative h-[55vh] min-h-[360px] flex items-end overflow-hidden">
        {/* Gradient fallback */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${item.color}55 0%, #2C1A0E 100%)`,
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img
          src={item.heroImage}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
        /> */
          <Image
            src={item.heroImage}
            alt={item.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

        }
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/40 to-espresso/20" />

        {/* Arch overlay on detail page */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" fill="none">
            <path d="M0,500 L0,100 Q70,60 70,20 L140,20 L140,500" fill="rgba(201,168,76,0.05)" stroke="rgba(201,168,76,0.15)" strokeWidth="1" />
            <path d="M1440,500 L1440,100 Q1370,60 1370,20 L1300,20 L1300,500" fill="rgba(201,168,76,0.05)" stroke="rgba(201,168,76,0.15)" strokeWidth="1" />
          </svg>
        </div>

        {/* Breadcrumb + title */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-ivory/70 hover:text-ivory font-body text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <span
              className="font-accent text-xs tracking-widest uppercase px-3 py-1 rounded-sm"
              style={{ background: `${item.color}30`, color: item.color, border: `1px solid ${item.color}50` }}
            >
              {item.category}
            </span>
          </div>
          <h1 className="font-display font-semibold text-ivory leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {item.title}
          </h1>
        </div>
      </div>

      {/* ── Content ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="h-0.5 w-12 mb-6 rounded-full" style={{ background: item.color }} />
              <h2 className="font-display font-semibold text-3xl text-espresso mb-4">Overview</h2>
              <p className="font-body text-muted leading-relaxed text-lg">{item.overview}</p>
            </div>

            {/* Gallery with lightbox */}
            <div>
              <h3 className="font-display font-semibold text-2xl text-espresso mb-5">Gallery</h3>
              <GalleryLightbox
                images={item.gallery}
                title={item.title}
                accentColor={item.color}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Highlights */}
            <div className="bg-parchment rounded-sm p-6 border border-sand/40">
              <h3 className="font-display font-semibold text-xl text-espresso mb-5">Highlights</h3>
              <ul className="space-y-3">
                {item.highlights.map(h => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                    <span className="font-body text-sm text-muted">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-espresso rounded-sm p-6 text-center">
              <h3 className="font-display font-semibold text-xl text-ivory mb-3">
                Interested?
              </h3>
              <p className="font-body text-sm text-sand mb-5">
                Connect with our specialists to explore how we can help you.
              </p>
              <Link href="/contact" className="btn-gold w-full justify-center">
                Get in Touch
              </Link>
            </div>

            {/* Other portfolio items */}
            <div>
              <h3 className="font-display font-semibold text-lg text-espresso mb-4">
                Explore More
              </h3>
              <div className="space-y-3">
                {others.map(o => (
                  <Link
                    key={o.slug}
                    href={`/portfolio/${o.slug}`}
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-10 h-10 rounded-sm flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${o.color}60, ${o.color})` }}
                    />
                    <div>
                      <p className="font-body text-sm font-medium text-espresso group-hover:text-gold transition-colors">
                        {o.title}
                      </p>
                      <p className="font-accent text-[10px] tracking-widest text-muted uppercase">
                        {o.category}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}