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
        animatePulseGreen: {
          "0%": {
            transform: "scale(0.8)",
            boxShadow: "0 0 0 0 rgba(50, 205, 50, 1)",
            /* rgba: "229, 62, 62, 1" */
          },
          "70%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 30px rgba(50, 205, 50, 0)",

          },
          "100%": {
            transform: "scale(0.8)"
          }
        },
        animatePulseBlue: {
          "0%": {
            transform: "scale(0.8)",
            boxShadow: "0 0 0 0 rgba(10, 102, 194, 1)",
            /* rgba: "229, 62, 62, 1" */
          },
          "70%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 30px rgba(10, 102, 194, 0)",

          },
          "100%": {
            transform: "scale(0.8)"
          }
        },
        animatePulseBlack: {
          "0%": {
            transform: "scale(0.8)",
            boxShadow: "0 0 0 0 rgba(0, 0, 0, 1)",
            /* rgba: "229, 62, 62, 1" */
          },
          "70%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 30px rgba(0, 0, 0, 0)",

          },
          "100%": {
            transform: "scale(0.8)"
          }
        },
        animatePulseWhite: {
          "0%": {
            transform: "scale(0.8)",
            boxShadow: "0 0 0 0 rgba(255, 255, 255, 1)",
            /* rgba: "229, 62, 62, 1" */
          },
          "70%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 30px rgba(255, 255, 255, 0)",

          },
          "100%": {
            transform: "scale(0.8)"
          }
        },
      },

      animation: {
        animateUser: "animateUser 4s linear infinite",
        animatePulseGreen: "animatePulseGreen 2s infinite",
        animatePulseBlue: "animatePulseBlue 2s infinite",
        animatePulseBlack: "animatePulseBlack 2s infinite",
        animatePulseWhite: "animatePulseWhite 2s infinite"

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
