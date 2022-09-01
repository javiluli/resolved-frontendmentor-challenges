import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(158, 36%, 37%)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
    background: {
      paper: 'hsl(0, 0%, 100%)',
      default: 'hsl(30, 38%, 92%)',
    },
  },
  typography: {
    body1: {
      fontFamily: 'Fraunces',
      fontSize: '1.90em',
      lineHeight: 1.15,
    },
    subtitle1: {
      fontFamily: 'Montserrat',
      fontSize: '0.75em',
    },
    subtitle2: {
      fontFamily: 'Fraunces',
      fontSize: '1.75em',
    },
    body2: {
      fontFamily: 'Montserrat',
    },
    caption: {
      fontFamily: 'Montserrat',
    },
  },

  components: {
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
