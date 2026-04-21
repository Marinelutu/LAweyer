/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f1114",
        surface: "#171a1f",
        text: "#ece7dd",
        muted: "#b4aa98",
        accent: "#c8a977"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "ui-serif", "Georgia"]
      },
      maxWidth: {
        prose: "68ch"
      }
    },
  },
  plugins: [],
}

