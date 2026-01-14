import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  theme: {
    extend: {
      /**
       * Nuxt UI runtime CSS expects Tailwind color tokens like `outline-primary`.
       * Tailwind only generates `outline-{color}` when the color has a `DEFAULT`.
       */
      colors: {
        primary: { ...colors.green, DEFAULT: colors.green[500] },
        gray: { ...colors.zinc, DEFAULT: colors.zinc[500] },
      },
      fontFamily: {
        sans: ['DM Sans', 'DM Sans fallback', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
