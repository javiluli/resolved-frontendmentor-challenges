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
          background: 'linear-gradient(135deg, hsl(0, 80%, 86%) 0%, hsl(0, 74%, 74%) 100%)',
          borderRadius: 9999,
          boxShadow: '0 2px 20px 0 hsl(0, 80%, 86%)',
          '&:hover': {
            background: 'linear-gradient(135deg, hsl(0, 80%, 92%) 0%, hsl(0, 74%, 80%) 100%)',
            boxShadow: '0 5px 10px 0 hsla(0, 80%, 10%, 0.3)',
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
