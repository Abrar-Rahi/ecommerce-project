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
        '25' : '25px',
      },
      maxWidth: {
        'container': '1604px',
        '644': '644px',
      },
      spacing: {
        '18': '18px',
        '17': '17px',
        '21': '21px',
        '507': '507px',
        '1055': '1055px',
        '644': '644px',
        '140': '140px',
        '37%': '37%',
        
      },
      colors: {
        'ash': '#F5F5F3',
        'ash0': '#F0F0F0',
        '6d': '#6D6D60',
        '76': '#767676',
        'blk26': '#262626',
        'bannerBG': '#f5f7f9',
      },
    },
  },
  plugins: [],
}

