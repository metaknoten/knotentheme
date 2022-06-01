const { colors } = require('tailwindcss/colors');

module.exports = {
  content: [
    '../../config/**/*.yaml',
    '../../pages/**/*.md',
    './blueprints/**/*.yaml',
    './js/**/*.js',
    './templates/**/*.twig',
    './knotentheme.yaml',
    './knotentheme.php'
  ],
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
      },
      colors: {
        diwoBlue: '#040a25',
        diwoRosa: '#723465',
        lightGray: '#dfdfdf',
        darkGray: '#171717',
        red: '#e42928',
        blue: '#040493',
      }
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
  important: false,
}
