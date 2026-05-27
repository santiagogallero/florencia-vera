/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blue:      '#2563eb',   /* vivid French blue      */
        'blue-lt': '#4f8ef7',   /* bright accent          */
        'blue-xl': '#7ab4ff',   /* electric highlight     */
        ink:       '#030a1a',   /* deepest navy           */
        dark:      '#05102a',   /* section alt            */
        card:      '#091830',   /* card bg                */
        'card-2':  '#0e2040',   /* elevated card          */
      },
      fontFamily: {
        bebas:      ['"Bebas Neue"', 'cursive'],
        barlow:     ['Barlow', 'sans-serif'],
        condensed:  ['"Barlow Condensed"', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-cw':  { to: { transform: 'rotate(360deg)' } },
        'spin-ccw': { to: { transform: 'rotate(-360deg)' } },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        'wa-ring': {
          '0%':       { transform: 'scale(1)',   opacity: '0.6' },
          '70%,100%': { transform: 'scale(1.35)', opacity: '0' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.3' },
        },
      },
      animation: {
        'fade-up':        'fadeUp 0.65s ease both',
        'spin-cw':        'spin-cw  35s linear infinite',
        'spin-ccw':       'spin-ccw 22s linear infinite',
        float:            'float 6s ease-in-out infinite',
        'float-d':        'float 6s ease-in-out 3s infinite',
        shimmer:          'shimmer 3s linear infinite',
        'wa-ring':        'wa-ring 2.4s ease-in-out infinite',
      },
      backgroundSize: {
        '200%': '200%',
      },
      boxShadow: {
        'blue-glow':   '0 0 40px rgba(37,99,235,0.45)',
        'blue-glow-lg':'0 0 80px rgba(37,99,235,0.3)',
        'card-hover':  '0 24px 56px rgba(0,0,0,0.6), 0 0 40px rgba(37,99,235,0.2)',
        'btn-primary': '0 4px 28px rgba(37,99,235,0.55)',
        'btn-hover':   '0 8px 40px rgba(79,142,247,0.65)',
      },
    },
  },
  plugins: [],
}
