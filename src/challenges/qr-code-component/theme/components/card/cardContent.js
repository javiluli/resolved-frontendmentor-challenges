import borders from '../../base/borders'
import pxToRem from '../../functions/pxToRem'

const { borderRadius } = borders

const cardContent = {
  styleOverrides: {
    root: {
      padding: `${pxToRem(24)} ${pxToRem(4)}`,
      borderRadius: borderRadius.lg,
    },
  },
}

export default cardContent
