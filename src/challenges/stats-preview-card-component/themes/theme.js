import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'hsl(277, 64%, 61%)',
      light: 'sl(216, 99%, 60%)',
      dark: 'hsl(277, 64%, 42.7%)',
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

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Lexend Deca',
        },
      },
    },
  },
})

export default theme
