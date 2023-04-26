/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      xs: ['12px', '16px'],
      sm: ['14px', '18px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['32px', '40px'],
      '3xl': ['48px', '56px'],
      '4xl': ['56px', '64px'],
      '5xl': ['64px', '70px'],
    },
    extend: {
      colors:{
        black: '#111111',
        red: '#D30000',
        white: '#FFFFFF',
        dark: '#00021A',
        darker: '#0B0E32',
        blue: {
          100: '#BFDBFE',
          300: '#93C5FD',
          500: '#3B82F6',
          700: '#1D4ED8',
          900: '#1E3A8A',
        }
      }
    },
  },
  plugins: [],
}

