/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Bungee Shade'],
        'secondary': ['poppins']
      }
    },
  },
  plugins: [require("daisyui")],
}

