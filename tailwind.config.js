/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "fade-out": {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-out forwards",
        "fade-out": "fade-out 0.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
