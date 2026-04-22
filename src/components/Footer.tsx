import Link from 'next/link'
import { MessageCircle , Twitter, Instagram } from 'lucide-react'
import { siteConfig } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {([
            { href: siteConfig.social.whatsapp,  Icon: MessageCircle},
            // { href: siteConfig.social.twitter,   Icon: Twitter },
            { href: siteConfig.social.instagram, Icon: Instagram },
          ] as const).map(({ href, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-gold transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
