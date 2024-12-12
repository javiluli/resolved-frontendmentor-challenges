import borders from '../../base/borders'
import pxToRem from '../../functions/pxToRem'

const { borderRadius } = borders

const card = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      borderRadius: borderRadius.xxl,
    },
  },
}

export default card
