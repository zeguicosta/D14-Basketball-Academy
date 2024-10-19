/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#46951A',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      animation: {
        appearleft: 'appearleft',
        appearright: 'appearright'
      },
      keyframes: {
        appearleft: {
          'from': { opacity: '0', transform: 'translate(-100px)' },
          'to': { opacity: '1', transform: 'scale(0px)' }
        },
        appearright: {
          'from': { opacity: '0', transform: 'translate(100px)' },
          'to': { opacity: '1', transform: 'scale(0px)' }
        }
      }
    },
  },
  plugins: [],
}

