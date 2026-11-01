/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Palette is taken from the Hotel Landmark logo (HL.png / logo.png):
      // amber fill, deep-brown outer triangle, rust inner triangle.
      colors: {
        brand: {
          amber: "#F9AE3C",
          "amber-dark": "#E8961A",
          brown: "#5E3A12",
          ink: "#2E1D0E",
          rust: "#8A3B2E",
          sand: "#F7F3EC",
          line: "#E7DFD2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
