/** @type {import('next').NextConfig} */

const securityHeaders = [
  // ── HSTS ──────────────────────────────────────────────────────────────────
  // Forces HTTPS for 2 years. Browsers will refuse plain HTTP after first visit.
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },

  // ── Content-Security-Policy ────────────────────────────────────────────────
  // Whitelist of allowed content origins. Blocks XSS, data injection, clickjacking.
  // Adjust `img-src` if you add external image CDNs.
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",   // unsafe-inline needed for Next.js inline scripts; tighten after adding nonce support
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",                  // https: allows any HTTPS image host
      "connect-src 'self'",
      "frame-src https://www.google.com",                                   // no iframes allowed
      "object-src 'none'",                                  // blocks Flash/plugins
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",                          // auto-upgrades HTTP sub-resources to HTTPS
    ].join('; '),
  },

  // ── X-Frame-Options ───────────────────────────────────────────────────────
  // Prevents your site from being embedded in iframes (clickjacking defence).
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },

  // ── X-Content-Type-Options ────────────────────────────────────────────────
  // Stops browsers from MIME-sniffing responses. Prevents content-type confusion attacks.
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },

  // ── Referrer-Policy ───────────────────────────────────────────────────────
  // Controls how much referrer info is sent. `strict-origin-when-cross-origin`
  // sends full path for same-origin, only origin for cross-origin HTTPS.
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },

  // ── Permissions-Policy ────────────────────────────────────────────────────
  // Disables browser APIs you don't use. Prevents rogue scripts from
  // accessing camera, mic, geolocation, etc.
  {
    key: 'Permissions-Policy',
    value: [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'interest-cohort=()',   // opt out of Google FLoC tracking
      'payment=()',
      'usb=()',
    ].join(', '),
  },

  // ── X-DNS-Prefetch-Control ────────────────────────────────────────────────
  // Controls DNS prefetching. 'on' allows browsers to prefetch DNS for links
  // which speeds up navigation while keeping control explicit.
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },

  // ── X-XSS-Protection ─────────────────────────────────────────────────────
  // Legacy header for older browsers. Modern browsers use CSP instead.
  // `1; mode=block` tells old IE/Chrome to block pages with detected XSS.
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
]

const nextConfig = {
  // Apply security headers to ALL routes
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },

  // ── Image optimisation ────────────────────────────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],   // serve AVIF first, WebP fallback
    minimumCacheTTL: 60 * 60 * 24 * 30,     // cache optimised images 30 days
  },

  // ── Compression ───────────────────────────────────────────────────────────
  compress: true,   // gzip responses (already default; explicit for clarity)

  // ── Power by header ───────────────────────────────────────────────────────
  // Removes `X-Powered-By: Next.js` header — hides tech stack from attackers.
  poweredByHeader: false,
}

module.exports = nextConfig