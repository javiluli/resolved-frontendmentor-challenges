import pxToRem from '../functions/pxToRem'
import breakpoints from './breakpoints'
import colors from './colors'

// const theme = createTheme()

const { text } = colors

const baseProperties = {
  fontFamily: 'Josefin Sans',
  fontWeightRegular: 400,
  fontWeightBold: 700,
  fontSizeXXS: pxToRem(0),
  fontSizeXS: pxToRem(0),
  fontSizeSM: pxToRem(0),
  fontSizeMD: pxToRem(18),
  fontSizeLG: pxToRem(0),
  fontSizeXL: pxToRem(0),
  fontSize2XL: pxToRem(0),
  fontSize3XL: pxToRem(0),
}

const typography = {
  fontFamily: baseProperties.fontFamily,

  // h2: {
  //   fontSize: pxToRem(2.5, 1),
  //   fontStyle: 'italic',
  //   fontWeight: baseProperties.fontWeightBold,

  //   [theme.breakpoints.up(breakpoints.values.desktop)]: {
  //     fontSize: pxToRem(4, 1),
  //   },
  // },

  body1: {
    fontSize: pxToRem(18),
    lineHeight: 1.625,
    color: text.primary,
  },

  caption: {
    fontSize: pxToRem(14),
    lineHeight: 1.25,
    color: text.secondary,
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
