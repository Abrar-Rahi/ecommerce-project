/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm': ['DM Sans'],
      },
      fontSize: {
        '39' : '39px',
        '49' : '49px',
      }
    },
  },
  plugins: [],
}

