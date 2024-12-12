import colors from '../base/colors'
import pxToRem from '../functions/pxToRem'

const { text } = colors

const divider = {
  styleOverrides: {
    root: {
      height: pxToRem(1),
      borderColor: text.secondary,
    },
  },
}

export default divider
