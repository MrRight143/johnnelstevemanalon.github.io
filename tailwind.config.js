/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0b0e14",
          gray: "#1f2937"
        }
      }
    },
  },
  plugins: [],
}
