/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: "#0A0B10",
        bgPanel: "#16171E",
        primary: "#00D2FF",
        primaryHover: "#00AACC",
        textMain: "#EDEDED",
        textMuted: "#A0A0A0",
        borderMain: "#2A2C38",
      },
    },
  },
  plugins: [],
};
