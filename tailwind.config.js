const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    '../../config/**/*.yaml',
    '../../pages/**/*.md',
    './blueprints/**/*.yaml',
    './js/**/*.js',
    './templates/**/*.twig',
    './knotentheme.yaml',
    './knotentheme.php'
  ],
  darkMode: 'class', //false or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Inconsolata"', 'system-ui']
    },
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
    },
    colors: {
      'primary': {
        'lighter': colors.yellow['300'],
        DEFAULT: colors.yellow['400'],
        'darker' : colors.yellow['500'],
      },
      diwoBlue: '#040a25',
      diwoRosa: '#723465',
      gray: '#6a6a6a',
      lightGray: '#dfdfdf',
      black: colors.black,
      white: colors.white,
      red: '#e42928',
      green: colors.green,
      blue: '#040493',
      orange: colors.orange,
      indigo: colors.indigo,
      transparent: 'transparent',
      'inherit': 'inherit',
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: 'inherit',
          lineHeight: 'inherit',
          maxWidth: 'inherit',
          a: {
            transition: 'all 500ms',
            color: theme('colors.primary.DEFAULT'),
            '&:hover': {
              color: theme('colors.primary.darker')
            },
            textDecoration: 'none'
          },
          strong: {
            color: 'inherit'
          },
        }
      }
    }),
  },
  variants: {
    extend: {},
  },
  important: false,
}
