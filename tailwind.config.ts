/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        script: ["var(--font-sail)", "cursive"],
      },
    },
  },
  plugins: [],
};
