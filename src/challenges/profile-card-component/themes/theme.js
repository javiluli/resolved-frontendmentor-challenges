import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(185, 75%, 39%)',
      secondary: 'hsl(216, 99%, 60%)',
    },
    text: {
      primary: 'hsl(229, 23%, 23%)',
      secondary: 'hsl(227, 10%, 46%)',
    },
    background: {
      paper: 'hsl(0, 0%, 95%)',
      default: 'hsl(185, 75%, 39%)',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Kumbh Sans',
        },
      },
    },
  },
})

export default theme
