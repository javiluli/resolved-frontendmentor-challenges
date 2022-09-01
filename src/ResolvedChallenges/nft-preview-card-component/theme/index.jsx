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
  typography: {
    subtitle1: {
      fontSize: '1.35em',
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: '0.9em',
      fontWeight: 300,
    },
    body1: {
      fontSize: '0.85em',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.85em',
      fontWeight: 600,
    },
  },

  components: {
    MuiTypography: {
      defaultProps: {
        gutterBottom: true,
      },
      styleOverrides: {
        root: {
          fontFamily: 'Outfit',
          lineHeight: 1.15,
        },
      },
    },
  },
})

export default theme
