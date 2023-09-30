/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      colors: {
        secondary: '#6b7280',
        primary: '#4F709C',
        dark: '#0f172a',
        dMode:'#18181b',
      },
      screens: {
        '2xl': '1520px',
      }
    },
  },
  plugins: [],
}
