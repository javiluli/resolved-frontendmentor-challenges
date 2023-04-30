import { createTheme } from '@mui/material'

import pxToRem from '../functions/pxToRem'
import breakpoints from './breakpoints'

const theme = createTheme()

const baseProperties = {
  fontFamily: "'Poppins', sans-serif",
  fontWeightRegular: 400,
  fontWeightBold: 700,
  fontWeightExtraBold: 800,
  fontSizeXXS: pxToRem(9.5),
  fontSizeXS: pxToRem(12),
  fontSizeSM: pxToRem(14),
  fontSizeMD: pxToRem(16),
  fontSizeLG: pxToRem(18),
  fontSizeXL: pxToRem(20),
  fontSize2XL: pxToRem(24),
  fontSize3XL: pxToRem(30),
}

const typography = {
  fontFamily: baseProperties.fontFamily,

  h2: {
    fontSize: pxToRem(2.5, 1),
    fontStyle: 'italic',
    fontWeight: baseProperties.fontWeightExtraBold,

    [theme.breakpoints.up(breakpoints.values.desktop)]: {
      fontSize: pxToRem(4, 1),
    },
  },

  size: {
    xxs: baseProperties.fontSizeXXS,
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    md: baseProperties.fontSizeMD,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL,
    '2xl': baseProperties.fontSize2XL,
    '3xl': baseProperties.fontSize3XL,
  },
}

export default typography
