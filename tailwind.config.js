/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")
const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  })
})
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "main": "#282C34",
        "container": "#383c44",
        'transparent': "#e0e0e0",
        purple: "#494993",
        cyan: "#10FFF1",
        red: "#E40037",
        blue: "#0C08B1",
        "p-gray": "#8F8F8F",
      },

      keyframes: {
        animateUser: {
          "50%": {
            transform: "translateX(20px) translateY(-30px)",
          },
        },
      },

      animation: {
        animateUser: "animateUser 4s linear infinite",
      },

      backgroundImage: {
        laptop: "url('/images/laptop.png')",
        ecommerce: "url('/images/ecommerce.png')",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      sen: ["Sen", "sans-serif"],
    },
  },
  plugins: [Myclass],
}
