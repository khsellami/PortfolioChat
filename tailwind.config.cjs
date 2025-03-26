/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  theme: {
    fill: {
      current: "currentColor",
    },
    extend: {
      colors: {
        primary: "#121212",
        whitePrimary: "#EAEAEA",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      gridTemplateColumns: {
        40: "repeat(40, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
