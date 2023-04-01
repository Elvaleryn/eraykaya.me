/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
          950: "var(--color-primary-950)",
          text: "var(--color-primary-text)",
          invert: "var(--color-invert)",
          theme: "var(--color-theme-bg)",
        },
      },
      fontFamily: {
        opensans: ["var(--font-opensans)"],
        inconsolata: ["var(--font-inconsolata)"],
      },
    },
  },
  plugins: [],
};
