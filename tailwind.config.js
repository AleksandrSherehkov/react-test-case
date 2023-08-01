/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
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
