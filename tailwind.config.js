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
        secondary: "#347EFD",
        accent: "#9A9A9A",
        black300: "#616161",
        white800: "#9A9A9A",
      },
      backgroundColor: {
        secondary: "#347EFD",
        white200: "#F4F4F4",
        accent: "#F6F6F6",
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
