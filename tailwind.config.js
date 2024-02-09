/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],

  content: ["./src/**/*.{html,js,tsx}"],
  // theme: {
  //   extend: {},
  // },



  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        Lora: ['var(--font-Lora)'],

      },
    },

  },
  plugins: [require("daisyui")],
}
