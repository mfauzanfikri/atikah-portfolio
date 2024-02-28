/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      fontFamily: {
        inter: "Inter Variable, sans-serif",
      },
      colors: {
        primary: "#fb923c",
        secondary: "#6b7280",
        dark: "#0f172a",
      },
      boxShadow: {
        nav: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
