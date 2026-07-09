import type { MetadataRoute } from 'next'
import { portfolioItems } from '@/lib/config'

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vasavigems.com'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vgmys-portfolio.netlify.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/portfolio`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/about`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'yearly', priority: 0.6 },
  ]

  const portfolioRoutes: MetadataRoute.Sitemap = portfolioItems.map(item => ({
    url: `${SITE_URL}/portfolio/${item.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...portfolioRoutes]
}
