/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main:"#4fb96e",
        main2:"#2980b8",
        Sectionbg:"#4bc0ed"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-180deg, #eee, #fff, #f9f9f9)',
      },
      fontFamily: {
        body: ['Cairo, sans-serif']
      }
    },
  },
  plugins: [],
};
