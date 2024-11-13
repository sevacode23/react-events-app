/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#E30D5B',
        primaryLight: '#E30D7C',
        eerieBlack: '#1d161a',
        pastelBlue: '#B6CAD5',
        thistle: '#d7bfcb',
        azureWhite: '#D9E2F1',
        arsenic: '#3C4249',
        platinum: '#E2E5EB',
        darkChocolate: '#3F0C26',
        pansyPurple: '#7C184C',
        onyx: '#343B3F',
      },

      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },

      gridTemplateColumns: {
        'fit-320': 'repeat(auto-fit, 320px)',
      },

      boxShadow: {
        soft: 'rgba(0, 0, 0, 0.26) 0px 2px 4px',
        softHover: 'rgba(0, 0, 0, 0.26) 0px 2px 8px',
        cardDark: '0 2px 8px rgba(0, 0, 0, 0.26)',
      },

      transitionProperty: {
        'bg-shadow': 'background-color, box-shadow',
        'max-h': 'max-height',
      },
    },
  },

  variants: {
    transitionProperty: ['responsive', 'hover', 'focus'],
  },

  plugins: [],
};
