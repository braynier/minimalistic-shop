/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["var(--font-poppins)", "sans-serif"],
      bebas: ["var(--font-bebas-neue)", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#222222",
        secondary: "#F5E6E0",
      },
    },
  },
  plugins: [],
};
