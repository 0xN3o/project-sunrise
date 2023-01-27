/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chivomono: ["Chivo Mono", "sans-serif"],
      },
      colors: {
        themeBlue: "#128CC1",
        themeRed: "#F44C60",
        themeYellow: "#FFE13F",
        themeOrange: "#FF9637",
      },
    },
  },
  plugins: [],
};
