import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(277, 64%, 61%)',
      secondary: 'hsl(216, 99%, 60%)',
    },
    text: {
      primary: 'hsl(0, 0%, 100%)',
      secondary: 'hsla(0, 0%, 100%, 0.6)',
    },
    background: {
      paper: 'hsl(244, 38%, 16%)',
      default: 'hsl(233, 47%, 7%)',
    },
  },
  typography: {
    subtitle1: {
      fontSize: '1.75em',
      fontWeight: 700,
      fontFamily: 'Inter',
    },
    subtitle2: {
      fontSize: '1em',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1.5em',
      fontWeight: 700,
    },
    body2: {
      fontSize: '0.75em',
      fontFamily: 'Lexend Deca',
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: 'inherit',
      fontWeight: 700,
    },
  },

  components: {
    MuiTypography: {
      defaultProps: {
        gutterBottom: true,
      },

      styleOverrides: {
        root: {
          lineHeight: 1.25,
        },
      },
    },
  },
})

export default theme
