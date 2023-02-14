/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'asap': 'Asap Condensed',
        'archivo': 'Archivo',
        'nanum': 'Nanum Pen Script'
      }
    },
  },
  plugins: [],
}