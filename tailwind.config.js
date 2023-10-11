/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-background': '#090b1a',
        'soft-violet': 'hsl(277, 64%, 61%)',
        'soft-viole-trans': 'hsl(293, 42%, 35%, 0.2)',
        'card-background': 'hsl(244, 38%, 16%)',
        'main-paragraph': 'hsla(0, 0%, 100%, 0.75)',
        'stat-headings': 'hsla(0, 0%, 100%, 0.6)'
      },
      fontFamily: {
        'lexend': 'Lexend, sans-serif',
      }
    },
  },
  plugins: [],
}

