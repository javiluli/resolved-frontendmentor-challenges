import colors from '../../base/colors'
import typography from '../../base/typography'
import pxToRem from '../../functions/pxToRem'

const { background, text } = colors
const { weight } = typography

const select = {
  styleOverrides: {
    select: {
      paddingLeft: `${pxToRem(24)} !important`,
      backgroundColor: background.paper,
      fontSize: pxToRem(15),
      fontWeight: weight.light,
    },

    icon: {
      color: text.primary,
    },

    selectMenu: {
      background: 'none',
      height: 'none',
      minHeight: 'none',
      overflow: 'unset',
    },
  },
}

export default select
