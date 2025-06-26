/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', 'src/**/*.{js,jsx}'], // ✅ هنا التصحيح الحقيقي
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}