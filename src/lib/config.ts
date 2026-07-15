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
  phone: '+91 77483803434',
  address: '#1043, Chandra Complex, KR Hospital road,\n Mysore 570001',
  hours: 'Mon – Sat: 11:00 PM – 8:00 PM',
  instagram: '@vasavigems',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.62750659527998!2d76.65520756116553!3d12.313086108957698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7013271a7a25%3A0x36a7b9ca85e0ee8b!2sVasavi%20Gems!5e0!3m2!1sen!2sin!4v1768634442404!5m2!1sen!2sin',
  social: {
    whatsapp: 'https://wa.me/7483803434?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20gemstones.',
    instagram: 'https://www.instagram.com/vasavigems',
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

// ── Portfolio card fallback gradients ──────────────────────────
// Shown behind/under the portfolio images (loading state + fallback
// if an image 404s). Index-matched to portfolioItems below.
// Was duplicated as PLACEHOLDER_GRADIENTS in BusinessPortfolio.tsx
// and GRADIENTS in app/portfolio/page.tsx — single source now.
export const portfolioGradients = [
  'linear-gradient(135deg, #1B6B4A 0%, #2C4A3A 100%)',
  'linear-gradient(135deg, #9A7535 0%, #C9A84C 100%)',
  'linear-gradient(135deg, #1A3A6B 0%, #2C3A6B 100%)',
  'linear-gradient(135deg, #8B1A2A 0%, #6B1020 100%)',
  'linear-gradient(135deg, #8B1A87 0%, #561A8B 100%)',
  'linear-gradient(135deg, #C9A84C 0%, #9A7535 100%)',
]

// ── Gallery image type ──────────────────────────────────────────
// Single source of truth for every gallery image used across the
// site (ImageCard, Gallery, GalleryLightbox all consume this shape).
export interface GalleryImage {
  /** Path under /public, e.g. '/assets/images/portfolio/gia.jpg' */
  src: string
  /** Descriptive alt text for screen readers / SEO */
  alt: string
  /** Short caption shown in the lightbox */
  caption: string
}

// ── Business Portfolio ────────────────────────────────────────
// Each item gets its own page at /portfolio/[slug]
// Place card images in /public/assets/images/portfolio/
export const portfolioItems: {
  slug: string
  title: string
  shortDesc: string
  image: string
  heroImage: string
  color: string
  category: string
  overview: string
  highlights: string[]
  gallery: GalleryImage[]
}[] = [
  {
    slug: 'diamonds',
    title: 'Diamonds',
    shortDesc: 'Eternal brilliance that celebrates your journey.',
    image: '/assets/images/portfolio/gia.jpg',
    heroImage: '/assets/images/portfolio/brc.jpg',
    color: '#1A3A6B', // sapphire accent
    category: 'Brilliance',
    overview:
      'From the depths of the Earth, forged in molten fire, destined to glow when I find you — The Diamond.',
    highlights: [
      'GIA & IGI certified Natural Diamonds',
      'Certified Diamond Jewellery',
      'IGI Certified Lab Grown Diamonds',
      'Fancy-Vivid Coloured Diamonds',
    ],
    gallery: [
      {
        src: '/assets/images/portfolio/gia.jpg',
        alt: 'GIA certificate for a natural diamond',
        caption: 'GIA-certified natural diamond report',
      },
      {
        src: '/assets/images/portfolio/brc.jpg',
        alt: 'Close-up of a brilliant round cut diamond',
        caption: 'Brilliant round cut diamond',
      },
      {
        src: '/assets/images/portfolio/PCut.jpg',
        alt: 'Portuguese cut diamond with multi-faceted brilliance',
        caption: 'Portuguese cut diamond',
      },
      {
        src: '/assets/images/portfolio/PortugueseCutPink.jpg',
        alt: 'Fancy pink diamond in a Portuguese cut',
        caption: 'Portuguese cut fancy pink diamond',
      },
      {
        src: '/assets/images/portfolio/bag.jpg',
        alt: 'Emerald Cut Lab-grown diamond',
        caption: 'Emerald Cut Lab-grown diamond',
      },
      {
        src: '/assets/images/portfolio/lgcerti.jpg',
        alt: 'IGI certification for a lab-grown diamond',
        caption: 'IGI lab-grown diamond certificate',
      },
    ],
  },
  {
    slug: 'gemstones',
    title: 'Gemstones',
    shortDesc: 'Handpicked, natural wonders from around the world.',
    image: '/assets/images/portfolio/ys.jpg',
    heroImage: '/assets/images/portfolio/Emerald.jpg',
    color: '#1B6B4A', // emerald accent
    category: 'Collection',
    overview:
      'Our gemstone collection spans continents and decades of passionate sourcing. Each stone is certified, graded, and personally selected by professional gemologists.',
    highlights: [
      'Certified Gemstones',
      'Direct manufacturing partnerships',
      'Investment-grade Gemstones',
      'Provenance documentation - GRS/Gubelin/SSF',
    ],
    gallery: [
      {
        src: '/assets/images/portfolio/BSapp.jpg',
        alt: 'Natural blue sapphire gemstone',
        caption: 'Non Heated - Non Treated Blue sapphire',
      },
      {
        src: '/assets/images/portfolio/GRS.jpg',
        alt: 'GRS laboratory certification report',
        caption: 'GRS gemstone certification',
      },
      {
        src: '/assets/images/portfolio/YS3.jpg',
        alt: 'Natural yellow sapphire gemstone',
        caption: 'Natural Yellow sapphire',
      },
      {
        src: '/assets/images/portfolio/Emerald.jpg',
        alt: 'Natural emerald gemstone with rich green colour',
        caption: 'GRS Certified - Zambian emerald',
      },
      {
        src: '/assets/images/portfolio/BSSL.jpg',
        alt: 'Sri Lankan blue sapphire gemstone',
        caption: 'Blue sapphire - Sri Lanka origin',
      },
      {
        src: '/assets/images/portfolio/BRuby.jpg',
        alt: 'Natural ruby gemstone',
        caption: 'Heated - Certified Burmese ruby',
      },
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
      'Wide range of custom designs',
      'Traditional Hand-Craft and advanced 3D designs',
      'CAD preview confirmation',
    ],
    gallery: [
      {
        src: '/assets/images/portfolio/CustomJewellery.jpeg',
        alt: 'Handcrafted custom jewellery piece',
        caption: 'Natural Ruby-Emerald-South Sea Pearls Necklace set and bracelet',
      },
      {
        src: '/assets/images/portfolio/Custom1.jpg',
        alt: 'Custom jewellery design',
        caption: 'Close setting Diamond Necklace',
      },
      {
        src: '/assets/images/portfolio/Custom2.jpg',
        alt: 'Finished custom jewellery piece',
        caption: 'Malachite-Amethyst-Citrin-Pearls',
      },
      {
        src: '/assets/images/portfolio/C1.jpg',
        alt: 'Close-up detail of custom jewellery craftsmanship',
        caption: 'Diamond Bangles',
      },
    ],
  },
  {
    slug: 'gemstone-sourcing',
    title: 'Gemstone Sourcing',
    shortDesc: 'Sourcing with a global network of trusted suppliers.',
    image: '/assets/images/portfolio/GSH.jpg',
    heroImage: '/assets/images/portfolio/GSH.jpg',
    color: '#8B1A2A', // ruby accent
    category: 'Trade',
    overview:
      'We maintain direct relationships with operations across the world — ensuring mine to market transparency.',
    highlights: [
      'Mines based gemstone sourcing',
      'Custom parameter gemstones',
      'Recutting gemstones',
      'Custom procurement briefs',
    ],
    gallery: [
      {
        src: '/assets/images/portfolio/GS1.jpg',
        alt: 'Gemstone sourcing at the mine',
        caption: 'Sourcing gemstones at origin - Sapphires',
      },
      {
        src: '/assets/images/portfolio/GS5.jpg',
        alt: 'Diamond Grading and Assortment',
        caption: 'Diamond Grading and Assortment',
      },
      {
        src: '/assets/images/portfolio/GS3.jpg',
        alt: 'Sorting and grading gemstones',
        caption: 'Blue Sapphire bulk procurement',
      },
      {
        src: '/assets/images/portfolio/GS6.jpg',
        alt: 'Mix Semi precious sourcing',
        caption: 'Mix Semi precious sourcing',
      },
      {
        src: '/assets/images/portfolio/GS4.jpg',
        alt: 'Gemstone procurement process',
        caption: 'Natural Ethiopian Opal sourcing',
      },
    ],
  },
  {
    slug: 'beads',
    title: 'Beads',
    shortDesc: 'Diverse range of beads in natural, semi-precious, and synthetic materials.',
    image: '/assets/images/portfolio/FWPearls.jpg',
    heroImage: '/assets/images/portfolio/FWPearls.jpg',
    color: '#2773F5',
    category: 'Beads',
    overview:
      'We supply a comprehensive range of beads, including natural, synthetic, and semi-precious varieties, suitable for diverse applications. Our products are available in multiple sizes, colors, and quality grades, ensuring consistent supply and flexibility to meet different design, production, and market requirements.',
    highlights: [
      'Precious Beads',
      'Semi-Precious Beads',
      'Synthetic Beads',
      'Bracelets and Healing stones beads',
    ],
    gallery: [
      {
        src: '/assets/images/portfolio/nav.jpg',
        alt: 'Navratna nine-gem beads',
        caption: 'Navratna beads bracelet',
      },
      {
        src: '/assets/images/portfolio/ruby.jpg',
        alt: 'Natural ruby beads strand',
        caption: 'Multiple Shades Ruby beads',
      },
      {
        src: '/assets/images/portfolio/B1.jpg',
        alt: 'Assorted semi-precious bead strands',
        caption: 'CZ Multi color beads with custom faceted gemstone',
      },
      {
        src: '/assets/images/portfolio/Culturedpearls.jpg',
        alt: 'Strand of cultured pearls',
        caption: 'Jp.Cultured pearls',
      },
    ],
  },
  {
    slug: 'goleyBuchel-distribution',
    title: 'Goley Buchel Distribution',
    shortDesc: 'Engraved Elegance in Precision-Cut Cubic Zirconia - CZ',
    image: '/assets/images/portfolio/GB White.jpg',
    heroImage: '/assets/images/portfolio/GB Colors.jpg',
    color: '#C9A84C',
    category: 'Signature Zirconia',
    overview:
      'Crafted with care and engineered for radiance, our CZ stones combine artistry and science. Every stone is master-cut and polished to perfection, reflecting light beautifully and providing timeless elegance.',
    highlights: [
      'Manufacturing Supply',
      'White and Fancy colors',
      'Round, cushion, pear — and a world of extraordinary shapes',
      'Laser Marked with "GB Brilliance"',
    ],
    gallery: [
      {
        src: '/assets/images/portfolio/GB fancy Colors.jpg',
        alt: 'Precision-cut fancy coloured CZ stones',
        caption: 'Fancy coloured laser engraved GB-cubic zirconia',
      },
      {
        src: '/assets/images/portfolio/GB White.jpg',
        alt: 'Precision-cut white CZ stones',
        caption: 'White cubic zirconia',
      },
      {
        src: '/assets/images/portfolio/CZ1.jpg',
        alt: 'ICE cut cubic zirconia',
        caption: 'Fancy vivid Yellow Cz Oval',
      },
      {
        src: '/assets/images/portfolio/CZ4.jpg',
        alt: 'Cushion cut cubic zirconia',
        caption: 'Ruby #8 Cushion cut CZ',
      },
      {
        src: '/assets/images/portfolio/CZ5.jpg',
        alt: 'Heart shaped cubic zirconia',
        caption: 'Heart cut CZ',
      },
      {
        src: '/assets/images/portfolio/CZ3.jpg',
        alt: 'Cubic zirconia laser marked with GB Brilliance',
        caption: 'Cz- Columbian-Emerald Green Cushion Cut',
      },
    ],
  },
]

// ── About ─────────────────────────────────────────────────────
export const aboutConfig = {
  image: '/assets/images/AbtUs.png',
  pillars: [
    { icon: 'diamond', label: 'Decades of\nExpertise' },
    { icon: 'globe',   label: 'Global Trusted\nNetwork' },
    { icon: 'scale',   label: 'Governed by integrity &\n transparency' },
    { icon: 'star',    label: 'Commitment to\nExcellence' },
  ],
}