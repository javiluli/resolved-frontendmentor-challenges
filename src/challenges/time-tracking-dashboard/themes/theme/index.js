import { createTheme } from '@mui/material'

import { boxShadows, colors, globals, typography } from './base'

export default createTheme({
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
      },
    },
  },
})
