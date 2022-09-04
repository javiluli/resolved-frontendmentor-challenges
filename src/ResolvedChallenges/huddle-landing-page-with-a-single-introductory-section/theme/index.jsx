import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    common: {
      black: 'hsl(0, 0%, 0%)',
      white: 'hsl(0, 0%, 100%)',
    },
    primary: {
      main: 'hsl(257, 40%, 49%)',
      light: 'hsl(300, 69%, 71%)',
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

  typography: {
    h5: {
      fontFamily: 'Poppins',
    },
    body1: {
      fontFamily: 'Open Sans',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 400,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Open Sans',
        },
        containedPrimary: {
          padding: '0.7em 5em',
          color: 'hsl(257, 40%, 49%)',
          backgroundColor: 'hsl(0, 0%, 100%)',
          borderRadius: 9999,
          boxShadow: '0 5px 2px hsla(0, 0%, 0%, 0.2)',
          textTransform: 'none',
          '&:hover': {
            color: 'hsl(0, 0%, 100%)',
            backgroundColor: 'hsl(300, 69%, 71%)',
            boxShadow: '0 5px 2px hsla(0, 0%, 0%, 0.2)',
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
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
