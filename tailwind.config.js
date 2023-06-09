/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#957357",
        darkprimary: "#100F0F",
        secondary: "#080808",
        tridary: "#3B3B3B",
        light: "#FFFAE8",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
