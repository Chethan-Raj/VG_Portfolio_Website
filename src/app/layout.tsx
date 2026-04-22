import type { Metadata } from 'next'
import '@/styles/globals.css'
import { siteConfig } from '@/lib/config'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.subTagline,
  keywords: ['gemstones', 'rare gems', 'jewelry', 'investment', 'Mysore', 'India'],
  openGraph: {
    title:       siteConfig.name,
    description: siteConfig.subTagline,
    type:        'website',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-ivory font-body text-espresso antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
