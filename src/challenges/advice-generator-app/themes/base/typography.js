import pxToRem from '../functions/pxToRem'
import colors from './colors'

const { text } = colors

const baseProperties = {
  fontFamily: 'Manrope',
  fontSizeMD: pxToRem(15),
  fontWeightRegular: 400,
  fontWeightBold: 700,
}

const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  fontWeight: baseProperties.fontWeightBold,
  color: text.primary,
}

const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightBold: baseProperties.fontWeightBold,

  h1: {
    ...baseHeadingProperties,
    fontSize: pxToRem(20),
    lineHeight: 1.15,
  },

  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.25,
  },

  size: {
    md: baseProperties.fontSizeMD,
  },
}

export default typography
