import { defineConfig, transform } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'
import plugin from 'windicss/plugin'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,

  plugins: [
    typography(),
    require('windicss/plugin/forms'),
    // make things reasonably friendly for mobile clients
    // ...especially iPhones - THANKS APPLE!
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.safe-top-const': {
          paddingTop: 'constant(safe-area-inset-top)',
        },
        '.safe-top-env': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.safe-left-const': {
          paddingLeft: 'constant(safe-area-inset-left)',
        },
        '.safe-left-env': {
          paddingLeft: 'env(safe-area-inset-left)',
        },
        '.safe-right-const': {
          paddingRight: 'constant(safe-area-inset-right)',
        },
        '.safe-right-env': {
          paddingRight: 'env(safe-area-inset-right)',
        },
        '.safe-bottom-const': {
          paddingBottom: 'constant(safe-area-inset-bottom)',
        },
        '.safe-bottom-env': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
      }
      addUtilities(newUtilities)
    }),
    // LET DAISY DO ITS THING!
    transform('daisyui'),
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
})
