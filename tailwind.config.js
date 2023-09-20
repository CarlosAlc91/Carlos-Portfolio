/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#000000',
        'purple': '#494993',
        'cyan': '#10FFF1',
        'red': '#E40037',
        'blue': '#0C08B1',
        'p-gray': '#8F8F8F',
      },

      keyframes: {
        animateUser: {
          '50%': {
            transform: 'translateX(20px) translateY(-30px)'
          }
        }
      },

      animation: {
        'animateUser': 'animateUser 4s linear infinite'
      },

      backgroundImage: {
        'laptop': "url('images/laptop.png')"
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'sen': ['Sen', 'sans-serif']
    }
  },
  plugins: [

  ],
}


