import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(158, 36%, 37%)',
    },
    text: {
      primary: 'hsla(0, 0%, 0%, 0.87)',
      secondary: 'hsla(0, 0%, 0%, 0.6)',
    },
    background: {
      paper: 'hsl(0, 0%, 100%)',
      default: 'hsl(30, 38%, 92%)',
    },
  },

  shadows: ['none', '0px 48px 100px 0px hsla(249, 59%, 11%, 0.1)'],

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
          textTransform: 'none',
        },
      },
    },
  },
})

export default theme
