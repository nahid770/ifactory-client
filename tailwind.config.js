/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'source': ['Source Sans Pro', 'sans-serif'],
        'Vibes': ['Great Vibes', 'sans-serif']
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
}