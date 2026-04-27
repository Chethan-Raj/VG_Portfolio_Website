import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'

// Below-fold components — lazy loaded
const BusinessPortfolio   = dynamic(() => import('@/components/BusinessPortfolio'),   { ssr: false })
const AboutSection        = dynamic(() => import('@/components/AboutSection'),        { ssr: false })
const LocationSection     = dynamic(() => import('@/components/LocationSection'),     { ssr: false })
const WorkTogetherSection = dynamic(() => import('@/components/WorkTogetherSection'), { ssr: false })

export default function HomePage() {
  return (
    <>
      <HeroSection />          {/* above fold — stays static */}
      <BusinessPortfolio />
      <AboutSection />
      <LocationSection />
      <WorkTogetherSection />
    </>
  )
}
