const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      tablet: '576px',
      ...defaultTheme.screens,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      cyan: colors.cyan,
      gg: {
        light: '#fa0',
        DEFAULT: '#f00',
        dark: '#f0a',
      },
      ...colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
