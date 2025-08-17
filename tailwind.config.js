/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#5B8CFF",
        brand2: "#06B6D4"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2,6,23,0.08)"
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
