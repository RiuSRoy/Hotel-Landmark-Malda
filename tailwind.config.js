/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          navy: '#1a2332',
          gold: '#d4af37',
          'gold-light': '#e5c158',
          cream: '#faf9f6',
          charcoal: '#2d3436',
          rose: '#8b4f5c',
          'gray-dark': '#333333',
        },
      },
      fontFamily: {
        itim: ["var(--font-itim)"],
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #1a2332 0%, #2d3436 100%)',
      },
    },
  },
  plugins: [],
}

