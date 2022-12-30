import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'hsl(178, 100%, 50%)',
      secondary: 'hsl(215, 32%, 27%)',
    },
    text: {
      primary: 'hsl(0, 0%, 100%)',
      secondary: 'hsl(215, 51%, 70%)',
    },
    background: {
      paper: 'hsl(216, 50%, 16%)',
      default: 'hsl(217, 54%, 11%)',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Outfit',
        },
      },
    },
  },
})

export default theme
