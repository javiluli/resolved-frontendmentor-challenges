import borders from '../../base/borders'
import colors from '../../base/colors'
import pxToRem from '../../functions/pxToRem'

const { background, keysColors } = colors
const { borderRadius } = borders

const tabs = {
  styleOverrides: {
    root: {
      position: 'relative',
      width: `${pxToRem(62)} !important`,
      height: `${pxToRem(22)} !important`,
      backgroundColor: background.keypad,
      borderRadius: borderRadius.xxl,
      minHeight: 'unset',
    },

    indicator: {
      width: `${pxToRem(22)} !important`,
      height: pxToRem(22),
      border: `5px solid ${background.keypad}`,
      borderRadius: borderRadius.xl,
      backgroundColor: keysColors.keyBackground__2,
      transition: 'all 200ms ease',

      ':hover': {
        backgroundColor: keysColors.keyBackground__2_hover,
      },
    },
  },
}

export default tabs
