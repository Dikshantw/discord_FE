/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    boxShadow: {
      sm: "0 2px 0 0 hsl(none 0% 0% / 0.05), 0 1.5px 0 0 hsl(none 0% 0% / 0.05), 0 1px 0 0 hsl(none 0% 0% / 0.16)"
    },
    extend: {
      fontFamily:{
        raleway: "Raleway",
        exo: ["'Exo 2'", "serif"],
        stupid: "Stupids Regular"
      },
      colors:{
        brand: "hsl(235 calc(1 * 85.6%) 64.7% / 1)",
        gray:{
          50: "#ECEDEE",
          100: "#DCDDDE",
          200: "#B9BBBE",
          300: "#8E9297",
          400: "#72767D",
          500: "#5C6067",
          550: "#4f545c",
          600: "#464950",
          700: "#36393F",
          800: "#2F3136",
          900: "#202225"
        }
      }
    },
  },
  plugins: [],
}

