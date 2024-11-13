/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#302E2B',
        'board-light': '#EBECD0',
        'board-dark': '#739552',
        'grey-dark': '#262522',
      },
    },
  },
  plugins: [],
}
