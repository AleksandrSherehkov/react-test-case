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
        but: '0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.25)',
        card: '-2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px rgba(0, 0, 0, 0.23)',
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
