import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(216, 95%, 57%)',
      light: 'hsl(216, 99%, 60%)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
    background: {
      paper: 'hsl(0, 0%, 100%)',
      default: 'hsl(212, 45%, 89%)',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Outfit',
          lineHeight: 1.35,
        },
      },
    },
  },
})

export default theme
