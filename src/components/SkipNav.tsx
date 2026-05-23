/**
 * SkipNav — keyboard / screen-reader accessibility.
 * Place this as the FIRST child inside <body> (already wired in layout.tsx).
 * Tab on any page → "Skip to main content" appears → Enter jumps to <main id="main-content">.
 */
export default function SkipNav() {
  return (
    <a
      href="#main-content"
      className={[
        // Hidden until focused — uses transform instead of display:none so
        // it remains in the tab order.
        'sr-only focus:not-sr-only',
        'focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-[9999]',
        'focus:px-6 focus:py-3 focus:rounded-sm',
        'focus:bg-gold focus:text-espresso',
        'font-accent text-xs tracking-widest uppercase',
        'transition-none',          // no fade — must appear instantly on Tab
      ].join(' ')}
    >
      Skip to main content
    </a>
  )
}