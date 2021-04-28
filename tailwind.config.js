module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Spartan", "sans-serif"],
      },
      animation: {
         'spin-slow': 'spin 3s linear infinite',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
