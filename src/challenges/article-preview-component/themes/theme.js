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

  shadows: ['none', '0px 48px 100px 0px rgba(17, 12, 46, 0.1)', ,],

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Manrope',
        },
      },
    },

    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontSize: '0.75rem',
          fontWeight: 700,
        },
        subheader: {
          fontSize: '0.70rem',
        },
      },
    },
  },
})

export default theme
