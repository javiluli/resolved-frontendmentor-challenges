import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    common: {
      black: 'hsl(0, 0%, 70%)',
      white: 'hsl(0, 0%, 100%)',
    },
    primary: {
      light: 'hsl(223, 100%, 88%)',
      main: 'hsl(223, 87%, 63%)',
      dark: 'hsl(209, 33%, 12%)',
    },
    error: {
      main: 'hsl(354, 100%, 66%)',
    },
    grey: {
      50: 'hsl(0, 0%, 98%)',
      100: 'hsl(0, 0%, 96%)',
      200: 'hsl(0, 0%, 93%)',
      300: 'hsl(0, 0%, 88%)',
      400: 'hsl(0, 0%, 74%)',
      500: 'hsl(0, 0%, 62%)',
      600: 'hsl(0, 0%, 46%)',
      700: 'hsl(0, 0%, 38%)',
      800: 'hsl(0, 0%, 26%)',
      900: 'hsl(0, 0%, 13%)',
      A100: 'hsl(0, 0%, 96%)',
      A200: 'hsl(0, 0%, 93%)',
      A400: 'hsl(0, 0%, 74%)',
      A700: 'hsl(0, 0%, 38%)',
    },
    text: {
      primary: 'hsl(223, 87%, 63%)',
    },
    background: {
      default: 'hsl(0, 0%, 100%)',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Libre Franklin',
          fontWeight: 300,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Libre Franklin',
          fontWeight: 600,
        },
        containedPrimary: {
          padding: '1em 4em',
          color: 'hsl(0, 0%, 100%)',
          borderRadius: 9999,
          boxShadow: '0 10px 15px hsla(223, 87%, 63%, 0.3)',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'hsl(223, 87%, 73%)',
            boxShadow: '0 10px 20px hsla(223, 87%, 63%, 0.5)',
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: 'hsl(0, 0%, 0%)',
          fontFamily: 'Libre Franklin',
          borderRadius: 9999,
          fieldset: {
            borderColor: 'hsl(223, 100%, 88%)',
          },
        },
        input: {
          paddingLeft: '2em',
          '&::placeholder': {
            color: 'hsl(223, 87%, 63%)',
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          fontStyle: 'italic',
        },
      },
    },
  },
})

export default theme
