import colors from '../base/colors'
import pxToRem from '../functions/pxToRem'

const { text } = colors

const button = {
  defaultProps: {
    disableRipple: true,
  },

  styleOverrides: {
    root: {
      padding: `${pxToRem(4)} ${pxToRem(28)}`,
      color: text.primary,
      boxShadow: '0 0 8px hsla(200, 15%, 8%, 0.35)',
      textTransform: 'none',

      '& .MuiButton-startIcon': {
        color: text.primary,
      },
    },

    text: {
      boxShadow: 'none',
    },
  },

  variants: [],
}

export default button
