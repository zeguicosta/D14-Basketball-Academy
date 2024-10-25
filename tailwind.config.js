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
        customGreen2: '#0A9015',
        customGreen3: '#0BA618',
        customGreen4: '#54AE21',
        customGreen5: '#408718'
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
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #222222 0%, #101010 40%)'
      },
      boxShadow: {
        'custom-shadow': '0px 0px 60px -12px rgba(50, 50, 93, 0.1), 0px 0px 36px -18px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}

