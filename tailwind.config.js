module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3A3A3A",
        secondary: "#1A6EFC",
        accent: "#9A9A9A",
        white: {
          DEFAULT: "#FFF",
          200: "#F4F4F4",
          300: "#EAEAEA",
          500: "#CBCBCB",
          800: "#9A9A9A",
        },
        black: {
          300: "#616161",
          400: "#4B4B4B",
          700: "#313131",
        },
      },
      fontFamily: {
        display: ["Spartan", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
