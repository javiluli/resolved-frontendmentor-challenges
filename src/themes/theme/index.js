import { createTheme } from '@mui/material'

import borders from './base/borders'
import breakpoints from './base/breakpoints'
import colors from './base/colors'
import globals from './base/globals'
import shadows from './base/shadows'
import typography from './base/typography'

import pxToRem from './functions/pxToRem'

import divider from './components/divider'

export const theme = createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  shadows: { ...shadows },
  borders: { ...borders },
  functions: {
    pxToRem,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
      },
    },

    MuiDivider: { ...divider },
  },
})
