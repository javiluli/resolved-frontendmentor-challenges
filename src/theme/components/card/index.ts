import borders from '../../base/borders'
import colors from '../../base/colors'
import hsla from '../../functions/hsla'
import pxToRem from '../../functions/pxToRem'

const { common, background } = colors
const { borderWidth } = borders

const card = {
  styleOverrides: {
    root: {
      padding: pxToRem(32),
      backgroundColor: background.default,
      backgroundImage: 'none',
      border: `${borderWidth[1]} solid ${hsla(common.white, 0.125)}`,
      borderRadius: 0,
      boxShadow: 'none',
    },
  },
}

export default card
