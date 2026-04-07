/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rosa-cha': '#E5D3C5',
        'grafite': '#2D2926',
        'dourado': '#D4AF37'
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Cormorant Garamond', 'serif'],
      }
    },
  },
  plugins: [],
}
