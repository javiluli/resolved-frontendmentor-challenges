import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(217, 19%, 35%)',
      light: 'hsl(214, 17%, 51%)',
    },
    text: {
      primary: 'hsl(217, 19%, 35%)',
      secondary: 'hsl(214, 17%, 51%)',
    },
    background: {
      default: 'hsl(210, 46%, 95%)',
      paper: 'hsl(0, 0%, 100%)',
    },
  },
  typography: {
    h1: {
      fontSize: '0.95rem',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: '0.80em',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.70em',
      fontWeight: 700,
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Manrope',
        },
        gutterBottom: {
          marginBottom: '10px',
        },
      },
    },

    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontSize: '0.70em',
        },
        subheader: {
          fontSize: '0.70em',
        },
      },
    },
  },
})

export default theme
