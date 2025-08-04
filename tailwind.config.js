/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  images: {
    formats: ["image/webp", "image/png", "image/jpeg"],
  },
  theme: {
    extend: {},
  },
  plugins: [`require("@tailwindcss/line-clamp")`],
};
