import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      light: 'hsl(300, 69%, 71%)',
      main: 'hsl(257, 40%, 49%)',
    },
    text: {
      primary: 'hsl(0, 0%, 100%)',
      secondary: 'hsl(0, 0%, 96%)',
    },
    background: {
      paper: 'hsl(0, 0%, 100%)',
      default: 'hsl(257, 40%, 49%)',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
          fontWeight: 400,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
          fontWeight: 400,
        },
        containedPrimary: {
          padding: '1em 4em',
          color: 'hsl(257, 40%, 49%)',
          backgroundColor: 'hsl(0, 0%, 100%)',
          borderRadius: 9999,
          boxShadow: '0 5px 15px hsla(0, 0%, 0%, 0.4)',
          textTransform: 'none',
          '&:hover': {
            color: 'hsl(0, 0%, 100%)',
            backgroundColor: 'hsl(300, 69%, 71%)',
            boxShadow: '0 5px 15px hsla(0, 0%, 0%, 0.4)',
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'hsl(0, 0%, 100%)',
          border: '2px solid hsl(0, 0%, 100%)',

          '&:hover': {
            color: 'hsl(300, 69%, 71%)',
            borderColor: 'hsl(300, 69%, 71%)',
          },
        },
      },
    },
  },
})

export default theme
