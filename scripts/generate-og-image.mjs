/**
 * scripts/generate-og-image.mjs
 *
 * Generates a placeholder /public/og-image.jpg (1200×630) branded for Vasavi Gems.
 * Run once: `node scripts/generate-og-image.mjs`
 *
 * Requires: npm install -D sharp
 *
 * For a production-quality OG image, replace this with an actual branded
 * 1200×630 JPEG and drop it at /public/og-image.jpg — no script needed.
 */

import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.resolve(__dirname, '../public/og-image.jpg')

const W = 1200
const H = 630

// SVG template — edit text/colors to match brand
const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stop-color="#2C1A0E"/>
      <stop offset="100%" stop-color="#4A2E1A"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#C9A84C"/>
      <stop offset="50%"  stop-color="#E2C97E"/>
      <stop offset="100%" stop-color="#9A7535"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Corner arch motifs -->
  <path d="M0,${H} L0,80 Q60,40 60,0 L120,0 L120,${H}" fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.2)" stroke-width="1"/>
  <path d="M${W},${H} L${W},80 Q${W - 60},40 ${W - 60},0 L${W - 120},0 L${W - 120},${H}" fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.2)" stroke-width="1"/>

  <!-- Gold rule top -->
  <rect x="120" y="48" width="${W - 240}" height="1" fill="url(#gold)" opacity="0.4"/>

  <!-- Diamond ornament -->
  <polygon points="${W / 2},${H / 2 - 160} ${W / 2 + 12},${H / 2 - 148} ${W / 2},${H / 2 - 136} ${W / 2 - 12},${H / 2 - 148}"
    fill="none" stroke="#C9A84C" stroke-width="1.5" opacity="0.7"/>

  <!-- Site name -->
  <text x="${W / 2}" y="${H / 2 - 40}"
    font-family="Georgia, serif" font-size="72" font-weight="600"
    fill="#F5F0E8" text-anchor="middle" letter-spacing="8">
    VASAVI GEMS
  </text>

  <!-- Tagline -->
  <text x="${W / 2}" y="${H / 2 + 20}"
    font-family="Georgia, serif" font-size="24" font-weight="300" font-style="italic"
    fill="#C9A84C" text-anchor="middle" letter-spacing="3">
    Exquisite Gemstones. Timeless Value.
  </text>

  <!-- Gold rule bottom -->
  <rect x="120" y="${H - 48}" width="${W - 240}" height="1" fill="url(#gold)" opacity="0.4"/>
</svg>
`

await sharp(Buffer.from(svg))
  .jpeg({ quality: 92 })
  .toFile(OUT)

console.log(`✓ OG image written to ${OUT}`)
console.log('  Size: 1200×630 — ready for social sharing.')
