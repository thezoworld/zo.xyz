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
        60: 60,
      },
      spacing: {
        18: "4.5rem",
        108: "27rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
