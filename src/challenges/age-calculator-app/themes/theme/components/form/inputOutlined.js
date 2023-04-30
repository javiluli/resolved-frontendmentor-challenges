import { createTheme } from '@mui/material'

import borders from '../../base/borders'
import breakpoints from '../../base/breakpoints'
import colors from '../../base/colors'
import typography from '../../base/typography'
import pxToRem from '../../functions/pxToRem'

const { primary, neutralColors } = colors
const { size } = typography
const { borderRadius } = borders

const theme = createTheme()

const inputOutlined = {
  styleOverrides: {
    root: {
      borderRadius: borderRadius.md,
      fontSize: size.lg,

      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: primary.main,
      },
    },

    notchedOutline: {
      borderColor: neutralColors.light_grey,
    },

    input: {
      padding: `${pxToRem(10)} ${pxToRem(16)}`,
      caretColor: primary.main,

      [theme.breakpoints.up(breakpoints.values.desktop)]: {
        fontSize: size['2xl'],
      },
    },
  },
}

export default inputOutlined
