import Link from 'next/link'
import { MessageCircle, Instagram } from 'lucide-react'
import { siteConfig } from '@/lib/config'

export default function Footer() {
  // BUG FIX: Social links used bare URLs ('https://instagram.com' no handle,
  // 'https://wa.me/+?text=Hello,' no phone). Those are fixed in config.ts.
  // Here we guard against rendering broken links if values are still placeholders.
  const socialLinks = [
    {
      href: siteConfig.social.whatsapp,
      Icon: MessageCircle,
      label: 'WhatsApp',
    },
    {
      href: siteConfig.social.instagram,
      Icon: Instagram,
      label: 'Instagram',
    },
  ].filter(({ href }) =>
    // Filter out placeholder / obviously-incomplete URLs at render time
    href && !href.includes('XXXXXXXXXX') && href !== 'https://instagram.com'
  )

  return (
    <footer className="bg-charcoal border-t border-gold/10">
      {/* grid-cols-3: copyright | social (centered) | nav links — each column equal width */}
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        <p className="font-body text-sm text-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>

        <nav aria-label="Social links" className="flex items-center gap-5 md:justify-self-center">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              // SECURITY FIX: rel="noopener noreferrer" prevents the new tab from
              // accessing window.opener (tabnapping attack vector).
              rel="noopener noreferrer"
              aria-label={`Visit our ${label}`}
              className="text-muted hover:text-gold transition-colors duration-200"
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </nav>

        {/* Quick nav */}
        <nav aria-label="Footer navigation" className="flex items-center gap-4 md:justify-self-end">
          {[
            { href: '/portfolio', label: 'Portfolio' },
            { href: '/contact',   label: 'Work with Us' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-body text-xs text-muted hover:text-gold transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}