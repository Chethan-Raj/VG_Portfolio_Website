'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/lib/config'

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about',     label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)
  // BUG FIX: active link had no visual indicator — user couldn't tell current page.
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // BUG FIX: mobile menu stayed open on route change (clicking a link navigated
  // but drawer remained visible). Close on pathname change.
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-glass shadow-card py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* BUG FIX: raw <img> used instead of next/image — causes LCP warning + no optimization */}
          <Image
            src="/assets/images/portfolio/icon.jpg"
            width={28}
            height={28}
            alt={`${siteConfig.name} logo`}
            className="rounded-sm transition-transform duration-300 group-hover:rotate-12"
          />
          <span
            className="font-accent text-base tracking-widest uppercase text-espresso"
            style={{ letterSpacing: '0.18em' }}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm tracking-wide px-4 py-2 transition-colors duration-200 ${
                isActive(link.href)
                  ? 'text-gold font-medium'
                  : 'text-espresso hover:text-gold'
              }`}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-gold ml-4 !py-2.5 !px-6"
          >
            Work with Us
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-espresso"
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="nav-glass flex flex-col gap-1 px-6 py-4" aria-label="Mobile navigation">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`py-3 border-b border-sand/30 font-body text-sm tracking-wide transition-colors ${
                isActive(link.href) ? 'text-gold' : 'text-espresso hover:text-gold'
              }`}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-gold mt-3 justify-center"
          >
            Work with Us
          </Link>
        </nav>
      </div>
    </header>
  )
}