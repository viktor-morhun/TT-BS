/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'lm': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
}

