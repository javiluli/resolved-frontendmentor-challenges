import pxToRem from '../functions/pxToRem'
import colors from './colors'

const { text } = colors

const baseProperties = {
  fontFamily: 'Nunito Sans',
  fontSizeMD: pxToRem(14),
  fontWeightLight: 300,
  fontWeightMedium: 600,
  fontWeightBold: 800,
}

const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  fontWeight: baseProperties.fontWeightLight,
  color: text?.primary || '#000',
}

const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,

  h1: {
    ...baseHeadingProperties,
    fontSize: pxToRem(104),
    letterSpacing: '-1.5px',
  },

  h2: {
    ...baseHeadingProperties,
    fontSize: pxToRem(65),
    letterSpacing: '-0.5px',
  },

  h3: {
    ...baseHeadingProperties,
    fontWeightMedium: baseProperties.fontWeightMedium,
    fontSize: pxToRem(52),
    letterSpacing: 0,
  },

  h4: {
    ...baseHeadingProperties,
    fontWeight: baseProperties.fontWeightMedium,
    fontSize: pxToRem(37),
    letterSpacing: '0.25px',
  },

  h5: {
    ...baseHeadingProperties,
    fontWeight: baseProperties.fontWeightMedium,
    fontSize: pxToRem(26),
    letterSpacing: 0,
  },

  h6: {
    ...baseHeadingProperties,
    fontWeight: baseProperties.fontWeightBold,
    fontSize: pxToRem(22),
    letterSpacing: '0.15px',
  },

  subtitle1: {
    ...baseHeadingProperties,
    fontSize: pxToRem(17),
    fontWeight: baseProperties.fontWeightMedium,
    letterSpacing: '0.15px',
  },

  subtitle2: {
    ...baseHeadingProperties,
    fontSize: pxToRem(16),
    fontWeight: baseProperties.fontWeightMedium,
    letterSpacing: '0.1px',
  },

  body1: {
    ...baseHeadingProperties,
    fontSize: pxToRem(17),
    fontWeight: baseProperties.fontWeightMedium,
    letterSpacing: '0.5px',
  },

  body2: {
    ...baseHeadingProperties,
    fontSize: pxToRem(15),
    fontWeight: baseProperties.fontWeightMedium,
    letterSpacing: '0.25px',
  },

  button: {
    ...baseHeadingProperties,
    fontSize: pxToRem(15),
    fontWeight: baseProperties.fontWeightLight,
    letterSpacing: '0.25px',
  },

  size: {
    md: baseProperties.fontSizeMD,
  },

  weight: {
    light: baseProperties.fontWeightLight,
    medium: baseProperties.fontWeightMedium,
    bold: baseProperties.fontWeightBold,
  },
}

export default typography
