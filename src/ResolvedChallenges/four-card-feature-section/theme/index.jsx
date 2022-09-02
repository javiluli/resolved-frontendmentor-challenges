import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(277, 64%, 61%)',
      secondary: 'hsl(216, 99%, 60%)',
    },
    text: {
      primary: 'hsl(234, 12%, 34%)',
      secondary: 'hsl(229, 6%, 66%)',
    },
    background: {
      paper: 'hsl(0, 0%, 100%)',
      default: 'hsl(0, 0%, 100%)',
    },
  },
  typography: {
    h1: {
      fontSize: '1.6rem',
    },
    subtitle1: {
      fontSize: '1rem',
    },
    body1: {
      fontSize: '0.875rem',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
          fontWeight: 400,
        },
      },
    },
  },
})

export default theme
