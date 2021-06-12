module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Spartan", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      textColor: {
        primary: "#3A3A3A",
        secondary: "#1A6EFC",
        accent: "#9A9A9A",
        black300: "#616161",
        black400: "#4B4B4B",
        black700: "#313131",
        white800: "#9A9A9A",
      },
      backgroundColor: {
        secondary: "#1A6EFC",
        accent: "#F6F6F6",
        white200: "#F4F4F4",
        white300: "#EAEAEA",
      },
      borderColor: {
        white300: "#EAEAEA",
        white500: "#CBCBCB",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
