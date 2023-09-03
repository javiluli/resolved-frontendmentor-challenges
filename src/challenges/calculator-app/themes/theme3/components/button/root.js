import { createTheme } from '@mui/material'

import borders from '../../base/borders'
import breakpoints from '../../base/breakpoints'
import typography from '../../base/typography'
import pxToRem from '../../functions/pxToRem'

const theme = createTheme()

const { fontWeightBold, size } = typography
const { borderRadius } = borders

const root = {
  fontSize: size.sm,
  fontWeight: fontWeightBold,
  borderRadius: borderRadius.lg,
  padding: `${pxToRem(30)} !important`,
  lineHeight: 0,
  textAlign: 'center',
  textTransform: 'none',
  userSelect: 'none',
  transition: 'all 100ms ease-in',

  [theme.breakpoints.up(breakpoints.values.desktop)]: {
    fontSize: size.md,
  },
}

export default root
