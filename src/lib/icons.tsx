import { Diamond, Globe, Scale, Star } from 'lucide-react'

/**
 * Maps the `icon` string stored in aboutConfig.pillars (lib/config.ts) to
 * the actual lucide-react component. Was defined identically in
 * AboutSection.tsx and app/about/page.tsx — consolidated here.
 */
export const PILLAR_ICON_MAP: Record<string, React.ElementType> = {
  diamond: Diamond,
  globe: Globe,
  scale: Scale,
  star: Star,
}
