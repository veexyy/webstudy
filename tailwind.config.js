/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
};
