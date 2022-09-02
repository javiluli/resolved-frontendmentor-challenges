import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(0, 36%, 70%)',
      secondary: 'hsl(216, 99%, 60%)',
    },
    error: {
      main: 'hsl(0, 93%, 68%)',
    },
    text: {
      primary: 'hsl(0, 36%, 70%)',
      secondary: 'hsl(0, 6%, 24%)',
    },
    background: {
      paper: 'hsl(0, 36%, 90%)',
      default: 'hsl(0, 0%, 100%)',
    },
  },

  typography: {
    h1: {
      fontSize: '4.25rem',
    },
    h2: {
      fontSize: '2.5rem',
    },
    body1: {
      fontSize: '0.875rem',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Josefin Sans',
          fontWeight: 400,
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          background: 'linear-gradient(135deg, hsl(0, 80%, 86%) 0%, hsl(0, 74%, 74%) 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, hsl(0, 80%, 92%) 0%, hsl(0, 74%, 80%) 100%)',
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: 'hsl(0, 93%, 68%)',
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: 'Josefin Sans',
          borderRadius: 9999,
          fieldset: {
            borderColor: 'hsl(0, 36%, 85%)',
          },
        },
      },
    },
  },
})

export default theme
