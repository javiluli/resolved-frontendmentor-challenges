import { createTheme } from '@mui/material'

import borders from './base/borders'
import breakpoints from './base/breakpoints'
import colors from './base/colors'
import globals from './base/globals'
import shadows from './base/shadows'
import typography from './base/typography'
import button from './components/button'
import checkbox from './components/form/checkbox'
import formControlLabel from './components/form/formControlLabel'
import svgIcon from './components/svgIcon'
import pxToRem from './functions/pxToRem'

export default createTheme({
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

    MuiButton: { ...button },
    MuiCheckbox: { ...checkbox },
    MuiFormControlLabel: { ...formControlLabel },
    MuiSvgIcon: { ...svgIcon },
  },
})
