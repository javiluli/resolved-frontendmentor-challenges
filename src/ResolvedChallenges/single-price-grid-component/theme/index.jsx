import { createTheme } from '@mui/material/styles'
const theme = createTheme({
  palette: {
    type: 'light',
    common: {
      black: 'hsl(0, 0%, 70%)',
      white: 'hsl(0, 0%, 100%)',
    },
    primary: {
      main: 'hsl(0, 36%, 70%)',
      secondary: 'hsl(216, 99%, 60%)',
    },
    error: {
      main: 'hsl(0, 93%, 68%)',
    },
    text: {
      primary: 'hsl(179, 62%, 43%)',
      secondary: 'hsl(71, 73%, 54%)',
    },
    background: {
      paper: 'hsl(0, 0%, 100%)',
      default: 'hsl(204, 43%, 93%)',
    },
  },

  typography: {
    h1: {
      fontSize: '1.5rem',
    },
    h2: {
      fontSize: '1rem',
    },
    body1: {
      fontSize: '0.875rem',
    },
    body2: {
      fontSize: '0.65rem',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Karla',
          fontWeight: 400,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Karla',
          fontWeight: 400,
        },
        containedPrimary: {
          padding: '0.8em 0',
          color: 'hsl(0, 0%, 100%)',
          backgroundColor: 'hsl(71, 73%, 54%)',
          boxShadow: '0 10px 15px hsla(0, 0%, 0%, 0.1)',
          '&:hover': {
            backgroundColor: 'hsl(71, 73%, 60%)',
            boxShadow: '0 10px 15px hsla(0, 0%, 0%, 0.1)',
          },
        },
      },
    },
  },
})

export default theme
