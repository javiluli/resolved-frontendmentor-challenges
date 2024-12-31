import { createTheme, ThemeOptions } from '@mui/material/styles'

import borders from './base/borders'
import colors from './base/colors'
import globals from './base/globals'
import shadows from './base/shadows'
import typography from './base/typography'

import pxToRem from './functions/pxToRem'

import card from './components/card'
import cardActionArea from './components/card/cardActionArea'
import cardContent from './components/card/cardContent'
import divider from './components/divider'

// Define the type for functions
interface CustomFunctions {
  pxToRem: typeof pxToRem
}

// Extend the ThemeOptions interface to include the borders property
interface CustomThemeOptions extends ThemeOptions {
  borders?: typeof borders
  functions?: CustomFunctions
}

export const theme: CustomThemeOptions = createTheme({
  palette: { ...colors },
  typography: { ...typography },
  shadows: { ...shadows },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
      },
    },

    MuiCard: { ...card },
    MuiCardActionArea: { ...cardActionArea },
    MuiCardContent: { ...cardContent },
    MuiDivider: { ...divider },
  },
})
