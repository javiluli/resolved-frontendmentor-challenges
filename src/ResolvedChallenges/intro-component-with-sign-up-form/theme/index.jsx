import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    common: {
      black: 'hsl(0, 0%, 0%)',
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
      primary: 'hsl(0, 0%, 100%)',
      secondary: 'hsl(0, 6%, 24%)',
    },
    background: {
      paper: 'hsl(248, 32%, 49%)',
      default: 'hsl(0, 100%, 74%)',
    },
  },

  typography: {
    h1: {
      fontSize: '2.5rem',
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
          fontFamily: 'Poppins',
          fontWeight: 400,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: 'hsl(154, 59%, 51%)',
          '&:hover': {
            backgroundColor: 'hsl(154, 75%, 60%)',
            boxShadow: 'inherit',
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: 'hsl(0, 93%, 68%)',
          boxShadow: 'inherit',
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: 'hsl(0, 0%, 0%)',
          fontFamily: 'Poppins',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.40)',
          },
        },
      },
    },
  },
})

export default theme
