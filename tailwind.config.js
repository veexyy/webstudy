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
