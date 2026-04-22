'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/lib/config'


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-glass shadow-card py-3' : 'py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Geometric gem icon */}
          {/* <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="transition-transform duration-300 group-hover:rotate-12">
            <polygon points="14,2 26,10 22,26 6,26 2,10" fill="none" stroke="#C9A84C" strokeWidth="1.5"/>
            <polygon points="14,6 22,12 19,22 9,22 6,12" fill="#C9A84C" fillOpacity="0.15"/>
            <polygon points="14,2 26,10 14,14" fill="#C9A84C" fillOpacity="0.25"/>
          </svg> */}
          <img
            src="/assets/images/portfolio/icon.jpg"
            width={28}
            height={28}
            alt="icon"
            className="transition-transform duration-300 group-hover:rotate-12"
          />
          <span
            className="font-accent text-base tracking-widest uppercase text-espresso"
            style={{ letterSpacing: '0.18em' }}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm tracking-wide px-4 py-2 text-espresso hover:text-gold transition-colors duration-200"
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
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="nav-glass flex flex-col gap-1 px-6 py-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 border-b border-sand/30 font-body text-sm tracking-wide text-espresso hover:text-gold transition-colors"
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
