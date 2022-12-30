import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'dark',
    text: {
      primary: 'hsl(193, 38%, 86%)',
      secondary: 'hsl(150, 100%, 66%)',
    },
    background: {
      paper: 'hsl(217, 19%, 24%)',
      default: 'hsl(218, 23%, 16%)',
    },
  },

  shadows: ['none', '0px 25px 60px 0px rgba(0, 0, 0, 0.1)'],

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Manrope',
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'hsl(218, 23%, 16%)',
          backgroundColor: 'hsl(150, 100%, 66%)',

          '&:hover': {
            color: 'hsl(218, 23%, 16%)',
            backgroundColor: 'hsl(150, 100%, 70%)',
            boxShadow: '0 0 15px hsla(150, 100%, 70%, 0.8)',
          },
        },
      },
    },
  },
})

export default theme
