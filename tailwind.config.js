/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors: {
        dark: {
          300: "#2b3945", // rgb(43, 57, 69)
          400: "#202c37", // rgb(32, 44, 55)
          700: "#111517", // rgb(17, 21, 23)
        },
        gray: {
          300: "#fafafa", // rgb(250, 250, 250)
          400: "#858585", // rgb(133, 133, 133)
        },
      },
    },
  },
  plugins: [],
};
