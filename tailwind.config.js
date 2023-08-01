/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.25)',
      },
      width: {
        380: '380px',
        196: '196px',
      },
      height: {
        460: '460px',
        50: '50px',
      },
      colors: {
        'custom-blue1': '#471CA9 0%',
        'custom-blue2': '#5736A3 69.10%',
        'custom-blue3': '#4B2A99 100%',
      },
      animation: ['hover'],
    },
  },
  plugins: [],
};
