/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,ts,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

