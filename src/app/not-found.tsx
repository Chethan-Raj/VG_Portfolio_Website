import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-accent text-xs tracking-widest text-gold uppercase mb-4">404 — Page Not Found</p>
        <h1 className="font-display font-semibold text-7xl text-espresso mb-4">
          Lost in the <em className="italic text-gold-dark">Mines?</em>
        </h1>
        <p className="font-body text-muted mb-10 max-w-md mx-auto">
          The page you are looking for may have moved, or perhaps it never existed. Let us guide you back.
        </p>
        <Link href="/" className="btn-gold">
          Return Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
