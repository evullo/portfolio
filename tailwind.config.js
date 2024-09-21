/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': "url('./src/assets/img/background.png')",
        'me': "url('./src/assets/img/me.png')"
      },
      colors: {
        'text-white': '#FEFDFD',
        'text-black': '#010101',
        'purple': '#8F00FF',
        'purple-light': '#AF93D7',
        'purple-dark': '#35166E',
      }
    },
    dropShadow: {
      'custom': '5px 5px 5px #000000'
    }
  },
  plugins: [],
}

