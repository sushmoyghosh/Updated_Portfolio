/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primaryColor:"#8873EF",
        headingColor:"#081e21",
        smallTextColor:"#193256",
        bgColorOne:"#FFF7ED",
        bgColortwo:"#0F172A",
        bgColorThree:"#FAD6BD",
        
      },
      fontFamily:{
        logo:"Great Vibes",
      },
    },
  },
  // ...
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
};

