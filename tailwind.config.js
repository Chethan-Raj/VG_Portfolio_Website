/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette — warm ivory & deep earth
        ivory:     '#F5F0E8',
        parchment: '#EDE3D0',
        sand:      '#D4B896',
        gold:      '#C9A84C',
        'gold-light': '#E2C97E',
        'gold-dark':  '#9A7535',
        espresso:  '#2C1A0E',
        'espresso-light': '#4A2E1A',
        charcoal:  '#1C1C1C',
        muted:     '#7A6A58',
        // Accent gem tones
        emerald:   '#1B6B4A',
        sapphire:  '#1A3A6B',
        ruby:      '#8B1A2A',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body:    ['var(--font-jost)', 'system-ui', 'sans-serif'],
        accent:  ['var(--font-cinzel)', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E2C97E 50%, #9A7535 100%)',
        'dark-gradient': 'linear-gradient(180deg, #2C1A0E 0%, #1C1C1C 100%)',
        'parchment-gradient': 'linear-gradient(180deg, #F5F0E8 0%, #EDE3D0 100%)',
      },
      animation: {
        'fade-up':      'fadeUp 0.8s ease forwards',
        'fade-in':      'fadeIn 1s ease forwards',
        'gold-shimmer': 'goldShimmer 3s ease-in-out infinite',
        'float':        'float 6s ease-in-out infinite',
        'slide-right':  'slideRight 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        goldShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(201, 168, 76, 0.3)',
        'card':      '0 4px 24px rgba(44, 26, 14, 0.12)',
        'card-hover':'0 12px 48px rgba(44, 26, 14, 0.22)',
        'inner-gold':'inset 0 1px 0 rgba(201, 168, 76, 0.4)',
      },
    },
  },
  plugins: [],
}
