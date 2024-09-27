/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      utilities: {
        ".hide-scrollbar": {
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none", // Chrome, Safari and Opera
        },
      },
    },
  },
  plugins: [],
};
