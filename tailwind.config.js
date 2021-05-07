module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
      },
      backgroundColor: {
        secondary: "#347EFD",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
