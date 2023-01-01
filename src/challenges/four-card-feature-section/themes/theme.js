import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(277, 64%, 61%)',
      secondary: 'hsl(216, 99%, 60%)',
    },
    text: {
      primary: 'hsl(234, 12%, 34%)',
      secondary: 'hsl(229, 6%, 66%)',
    },
    background: {
      paper: 'hsl(0, 0%, 100%)',
      default: 'hsl(0, 0%, 100%)',
    },
  },

  shadows: ['none', '0px 10px 15px 0px rgba(17, 12, 46, 0.1)'],

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        },
      },
    },
  },
})

export default theme
