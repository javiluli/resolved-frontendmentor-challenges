import borders from '../../base/borders'
import pxToRem from '../../functions/pxToRem'

const { borderRadius } = borders

const card = {
  styleOverrides: {
    root: {
      padding: pxToRem(0),
      borderRadius: borderRadius.sm,
      backgroundImage: 'none',
    },
  },
}

export default card
