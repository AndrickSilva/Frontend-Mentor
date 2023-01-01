/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkElem: "hsl(209, 23%, 22%)",
        darkBg: "hsl(207, 26%, 17%)",
        darkText: "hsl(0, 0%, 100%)",
        lightText: "hsl(200, 15%, 8%)",
        lightBg: "hsl(0, 0%, 98%)",
        lightElem: "hsl(0, 0%, 100%)"
      },
      fontFamily: {
        nunito: ["Nunito Sans"]
      }
    },
  },
  plugins: [],
}
