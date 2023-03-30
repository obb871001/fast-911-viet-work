/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "911-color": "#FF6600",
        "911-hover-color": "#C34F01",
        "common-gray": "#717171",
        "911-secondary-color": "#C89D73",
      },
    },
  },
  plugins: [],
};
