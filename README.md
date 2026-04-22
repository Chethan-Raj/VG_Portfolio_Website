# Gemstone Traders — Next.js Website

A premium Next.js 14 website for Gemstone Traders, built with Tailwind CSS and ready for Vercel deployment.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
gemstone-traders/
├── public/
│   └── assets/
│       ├── images/
│       │   ├── hero.jpg           ← Hero background image
│       │   ├── about.jpg          ← About section image
│       │   └── portfolio/
│       │       ├── rare-gemstones.jpg
│       │       ├── custom-jewelry.jpg
│       │       ├── gem-auctions.jpg
│       │       ├── gemstone-sourcing.jpg
│       │       └── investment-consultancy.jpg
│       └── videos/
│           └── hero.mp4           ← Hero background video (optional)
├── src/
│   ├── app/                       ← Next.js App Router pages
│   │   ├── page.tsx               ← Home page
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── portfolio/
│   │       ├── page.tsx           ← Portfolio index
│   │       └── [slug]/page.tsx    ← Individual portfolio pages
│   ├── components/                ← React components
│   ├── lib/
│   │   └── config.ts              ← ⭐ MAIN CONTENT CONFIGURATION
│   └── styles/
│       └── globals.css
```

---

## 🎨 Adding Your Images

Simply drop image files into the correct folder — no code changes needed:

| Image | Path |
|-------|------|
| Hero background | `public/assets/images/hero.jpg` |
| About section | `public/assets/images/about.jpg` |
| Rare Gemstones card | `public/assets/images/portfolio/rare-gemstones.jpg` |
| Custom Jewelry card | `public/assets/images/portfolio/custom-jewelry.jpg` |
| Gem Auctions card | `public/assets/images/portfolio/gem-auctions.jpg` |
| Gemstone Sourcing card | `public/assets/images/portfolio/gemstone-sourcing.jpg` |
| Investment Consultancy card | `public/assets/images/portfolio/investment-consultancy.jpg` |

### Using a Video Hero
1. Place your video at `public/assets/videos/hero.mp4`
2. In `src/lib/config.ts`, change:
   ```ts
   type: 'video',
   ```

---

## ⚙️ Content Configuration

All site content is centralized in **`src/lib/config.ts`**:

- **`siteConfig`** — name, tagline, contact details, social links
- **`heroConfig`** — image/video toggle and file paths
- **`portfolioItems`** — all 5 portfolio items with content, images, highlights
- **`aboutConfig`** — about image and pillar icons/labels

Edit this file to update content without touching any component code.

---

## 🌐 Deploy to Vercel

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Vercel auto-detects Next.js — click **Deploy**

No additional configuration required.

---

## 📝 Contact Form Setup

The contact form at `/contact` is pre-wired for **Formspree**:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and copy the form ID
3. In `src/app/contact/page.tsx`, replace:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```

---

## 🎨 Color Palette

All colors are defined as hex codes in `tailwind.config.js`:

| Name | Hex |
|------|-----|
| Ivory | `#F5F0E8` |
| Parchment | `#EDE3D0` |
| Sand | `#D4B896` |
| Gold | `#C9A84C` |
| Gold Light | `#E2C97E` |
| Gold Dark | `#9A7535` |
| Espresso | `#2C1A0E` |
| Charcoal | `#1C1C1C` |
| Muted | `#7A6A58` |

---

## 🛠 Tech Stack

- **Next.js 14** — App Router, SSG, TypeScript
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations (available, used optionally)
- **Lucide React** — Icons
- **Vercel** — Hosting

---

## 📄 License

© 2024 Gemstone Traders. All rights reserved.
