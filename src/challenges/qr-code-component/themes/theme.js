import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(216, 95%, 57%)',
      secondary: 'hsl(216, 99%, 60%)',
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

  shadows: ['none', '0px 48px 100px 0px rgba(17, 12, 46, 0.1)'],

  components: {
    MuiTypography: {
      defaultProps: {
        gutterBottom: true,
      },
      styleOverrides: {
        root: {
          marginBottom: '0.5em',
          fontFamily: 'Outfit',
          lineHeight: 1.15,
        },
      },
    },
  },
})

export default theme
