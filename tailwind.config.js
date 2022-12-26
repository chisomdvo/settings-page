/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        rose: colors.rose,
        "partner-rgba": "rgba(195,223,234,1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
