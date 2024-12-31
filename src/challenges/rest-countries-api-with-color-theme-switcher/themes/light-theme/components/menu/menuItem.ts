import colors from '../../base/colors'
import typography from '../../base/typography'
import pxToRem from '../../functions/pxToRem'

const { background } = colors
const { weight } = typography

const menuItem = {
  styleOverrides: {
    root: {
      minHeight: 'unset',
      padding: `${pxToRem(6)} ${pxToRem(24)}`,
      backgroundColor: background.paper,
      fontSize: pxToRem(15),
      fontWeight: weight.light,
    },
  },
}

export default menuItem
