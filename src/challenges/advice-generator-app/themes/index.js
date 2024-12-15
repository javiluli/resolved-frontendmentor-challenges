import { createTheme } from '@mui/material'

import borders from './base/borders'
import colors from './base/colors'
import globals from './base/globals'
import shadows from './base/shadows'
import typography from './base/typography'

import pxToRem from './functions/pxToRem'
import iconButton from './components/iconButton'

export const theme = createTheme({
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

    MuiIconButton: { ...iconButton },
  },
})
