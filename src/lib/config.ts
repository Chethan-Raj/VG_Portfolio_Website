// ============================================================
// SITE CONFIGURATION
// Edit this file to update site content without touching code.
// Images/videos: place files in /public/assets/images/ or
// /public/assets/videos/ and reference by filename here.
// ============================================================

export const siteConfig = {
  name: 'Vasavi Gems',
  tagline: 'Exquisite Gemstones. Timeless Value.',
  subTagline: 'Sourcing rare beauty. Building lasting legacies.',
  email: 'vasavigems2005@gmail.com',
  phone: '+91 9590959068',
  address: '#1043, Chandra Complex, KR Hospital road,\n Mysore 570001',
  hours: 'Mon – Sat: 11:00 AM – 9:00 PM',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.62750659527998!2d76.65520756116553!3d12.313086108957698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7013271a7a25%3A0x36a7b9ca85e0ee8b!2sVasavi%20Gems!5e0!3m2!1sen!2sin!4v1768634442404!5m2!1sen!2sin',
  social: {
    whatsapp: 'https://wa.me/+919590959068?text=Hello,',
    // twitter:   'https://twitter.com',
    instagram: 'https://instagram.com',
  },
}

// ── Hero ──────────────────────────────────────────────────────
// Set `type` to "image" or "video".
// Place the file in /public/assets/images/ or /public/assets/videos/
// and update `src` to just the filename (e.g. "hero.jpg").
export const heroConfig = {
  type: 'image' as 'image' | 'video',
  // src: '/assets/images/logo.jpg',          // ← swap filename here
  src: '',
  videoSrc: '/assets/videos/hero.mp4',     // ← used when type === "video"
  poster: '/assets/images/hero.jpg',       // ← video poster frame
}

// ── Business Portfolio ────────────────────────────────────────
// Each item gets its own page at /portfolio/[slug]
// Place card images in /public/assets/images/portfolio/
export const portfolioItems = [
  {
    slug: 'diamonds',
    title: 'Diamonds',
    shortDesc: 'Eternal brilliance that celebrates your journey.',
    image: '/assets/images/portfolio/diamonds.jpg',
    heroImage: '/assets/images/portfolio/diamonds.jpg',
    color: '#1A3A6B', // sapphire accent
    category: 'Brilliance',
    overview:
      'From the depths of the Earth, forged in molten fire, destined to glow when I find you — The Diamond.',
    highlights: [
      'GIA & IGI certified Natutral Diamonds',
      'Certified Diamond Jewellry',
      'IGI Certified Lab Grown Diamonds',
      'Fancy-Vivid Coloured Diamonds',
    ],
    gallery: [
      '/assets/images/portfolio/PortugueseCutPink.jpg',
    ],
  },
  {
    slug: 'gemstones',
    title: 'Gemstones',
    shortDesc: 'Handpicked, natural wonders from around the world.',
    image: '/assets/images/portfolio/rare-gemstones.jpg',
    heroImage: '/assets/images/portfolio/rare-gemstones.jpg',
    color: '#1B6B4A', // emerald accent
    category: 'Collection',
    overview:
      'Our gemstone collection spans continents and decades of passionate sourcing. Each stone is certified, graded, and personally selected by our master gemmologists.',
    highlights: [
      'Certified Gemstones',
      'Direct manufacturing partnerships',
      'Investment-grade specimens',
      'Provenance documentation',
    ],
    gallery: [
      '/assets/images/portfolio/rare-gemstones.jpg',
    ],
  },
  {
    slug: 'custom-jewelry',
    title: 'Custom Jewelry',
    shortDesc: 'Bespoke creations crafted to reflect your unique vision.',
    image: '/assets/images/portfolio/c2.jpeg',
    heroImage: '/assets/images/portfolio/Bangles.jpg',
    color: '#9A7535', // gold accent
    category: 'Craftsmanship',
    overview:
      'Every custom piece begins with a conversation. Our master artisans translate your vision into wearable heritage — combining centuries-old craft with contemporary design trends.',
    highlights: [
      'Online/Offline design consultation',
      'Wide range of cutsom designs',
      'Traditional Hand-Craft and advanced 3D designs',
      'CAD preview confirmation',
    ],
    gallery: [
      '/assets/images/portfolio/CustomJewellery.jpeg',
      '/assets/images/portfolio/set.jpg',
      '/assets/images/portfolio/Bangles2.jpg',
      '/assets/images/portfolio/pendant.jpg',
    ],
  },
  {
    slug: 'gemstone-sourcing',
    title: 'Gemstone Sourcing',
    shortDesc: 'Sourcing with a global network of trusted suppliers.',
    image: '/assets/images/portfolio/gemstone-sourcing.jpg',
    heroImage: '/assets/images/portfolio/gemstone-sourcing.jpg',
    color: '#8B1A2A', // ruby accent
    category: 'Trade',
    overview:
      'We maintain direct relationships with operations across the world — ensuring mine to market.',
    highlights: [
      'Bulk & wholesale programs',
      'Custom parameter gemstones',
      'Recutting gemstones ',
      'Custom procurement briefs',
    ],
    gallery: [
      '/assets/images/portfolio/gemstone-sourcing.jpg',
    ],
  },
  {
    slug: 'beads',
    title: 'Beads',
    shortDesc: 'Wide range of beads, including natural,semi-precious, and synthetic varieties.',
    image: '/assets/images/portfolio/investment-consultancy.jpg',
    heroImage: '/assets/images/portfolio/investment-consultancy.jpg',
    color: '#2773F5', // gold
    category: 'Beads',
    overview:
      'We supply a comprehensive range of beads, including natural, synthetic, and semi-precious varieties, suitable for diverse applications. Our products are available in multiple sizes, colors, and quality grades, ensuring consistent supply and flexibility to meet different design, production, and market requirements.',
    highlights: [
      'Precious Beads',
      'Semi-Precious Beads',
      'Synthetic Beads.',
      'Bracelets and Healing stones',
    ],
    gallery: [
      '/assets/images/portfolio/Pearls.jpg',
      '/assets/images/portfolio/Culturedpearls.jpg',
    ],
  },
  {
    slug: 'goleyBuchel-distribution',
    title: 'Goley Buchel Distribution',
    shortDesc: 'Engraved Elegance in Precision-Cut CZ',
    image: '/assets/images/portfolio/GB White.jpg',
    heroImage: '/assets/images/portfolio/GB Colors.jpg',
    color: '#C9A84C', // gold
    category: 'Signature zirconia',
    overview:
      'Crafted with care and engineered for radiance, our CZ stones combine artistry and science. Every stone is master-cut and polished to perfection, reflecting light beautifully and providing timeless elegance.',
    highlights: [
      'Manufacturing Supply',
      'White and Fancy colors',
      'Round, cushion, pear — and a world of extraordinary shapes.',
      'Laser Marked with "GB Brillance"',
    ],
    gallery: [
      '/assets/images/portfolio/GB Colors.jpg',
      '/assets/images/portfolio/GB fancy Colors.jpg',
      '/assets/images/portfolio/GB White.jpg',
      
    ],
  },
]

// ── About ─────────────────────────────────────────────────────
export const aboutConfig = {
  image: '/assets/images/AbtUs.png',  // ← swap filename here
  pillars: [
    { icon: 'diamond', label: 'Decades of\nExpertise' },
    { icon: 'globe', label: 'Global Trusted\nNetwork' },
    { icon: 'moon', label: 'Governed by integrity &\n transparency' },
    { icon: 'star', label: 'Commitment to\nExcellence' },
  ],
}