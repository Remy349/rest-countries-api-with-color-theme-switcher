/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'very-dark-blue-l': 'hsl(200, 15%, 8%)',
        'very-light-gray-l-bg': 'hsl(0, 0%, 98%)',
        'dark-blue': 'hsl(209, 23%, 22%)',
        'very-dark-blue-d': 'hsl(207, 26%, 17%)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
