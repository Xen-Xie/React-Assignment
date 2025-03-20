/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/@heroui/theme/dist/components/(button|snippet|code|input).js'
    
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0FF1F6",
        secondary: "#14BCB2",
        foreground: "#ffffff",
        default: "#002228"
      },
      animation: {
        gradient: "gradientMove 3s ease infinite",
      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },

    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

