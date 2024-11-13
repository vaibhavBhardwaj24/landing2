/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7083F5",
      },
      backgroundImage: {
        "gradient-1":
          "linear-gradient(55.15deg, #8ea5fe -7.09%, #beb3fd 51.72%, #90d1ff 101.48%)",
      },
    },
  },
  plugins: [],
};
