/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#faebeb",
        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
