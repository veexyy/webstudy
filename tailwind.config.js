/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}" /* src folder, for example */,
  ],
  theme: {
    extend: {
      screens: {
        mobile: "425px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        desktop: "1440px",
        "2xl": "1536px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        akony: ["Akony", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      FontFace: {
        akony: {
          fontFamily: "Akony",
          src: "url('https://firebasestorage.googleapis.com/v0/b/webstudy-1b851.appspot.com/o/fonts%2FAKONY.woff2?alt=media&token=c0c7ae21-6b1a-469e-8c46-68a56fdccd5b') format('woff2')",
        },
      },
      textShadow: {
        sm: "2px 2px 4px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
