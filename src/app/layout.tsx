import type { Metadata } from 'next'
import '@/styles/globals.css'
import { siteConfig } from '@/lib/config'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SkipNav from '@/components/SkipNav'

// BUG FIX: OG image and canonical URL missing — hurts social sharing and SEO.
// Add your actual deployed domain below.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vasavigems.com'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.subTagline,
  keywords: ['gemstones', 'rare gems', 'jewelry', 'investment', 'Mysore', 'India', 'diamonds', 'custom jewellery'],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:       siteConfig.name,
    description: siteConfig.subTagline,
    type:        'website',
    url:         SITE_URL,
    siteName:    siteConfig.name,
    // Add /public/og-image.jpg (1200×630) for rich social previews
    images: [
      {
        url:    '/og-image.jpg',
        width:  1200,
        height: 630,
        alt:    siteConfig.name,
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       siteConfig.name,
    description: siteConfig.subTagline,
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/*
          BUG FIX: preconnect tags were in <head> but Next.js App Router
          manages <head> via metadata. Keep them here for explicit font preconnect.
          The font @import in globals.css handles loading; preconnect just speeds it up.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-ivory font-body text-espresso antialiased">
        <SkipNav />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}