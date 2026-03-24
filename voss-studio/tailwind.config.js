/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#0A0A0A',
          mid: '#111111',
          soft: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          muted: '#A0A0A0',
          faint: '#3A3A3A',
        },
        red: {
          DEFAULT: '#E63946',
          dark: '#B02A31',
        },
        offwhite: '#F5F5F5',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.2em',
        mono: '0.3em',
        monoLg: '0.4em'
      }
    },
  },
  plugins: [],
}
