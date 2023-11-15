/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        container: '1200px'
      },
      screens: {
        bannerTop: '850px'
      },
      colors: {
        primary: '#01483C',
        secondary: '#16a34a'
      }
    }
  },
  plugins: []
}
