/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      mono: "'IBM Plex Mono', monospace",
    },
    extend: {
      backgroundImage: {
        'graph-paper': "url('/graph-paper.svg')",
      },
    },
  },
  plugins: [require('daisyui')],
};
