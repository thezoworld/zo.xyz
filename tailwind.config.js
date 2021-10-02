module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Overpass", "sans-serif"],
      },
      colors: {
        orangy: "#F15824",
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
      },
      spacing: {
        108: "27rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
