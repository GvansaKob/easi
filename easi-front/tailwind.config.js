/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: '#4f3bf4',
        vert: '#80ed99',
        noir: '#111111',
        blanc: '#FFFFFF',
      },
      fontFamily: {
        titre: ['"rl-aqva"', 'sans-serif'],
        textse: ['"urw-form"', 'sans-serif'],
      }
    },
  },
  plugins: [
  ],
}
