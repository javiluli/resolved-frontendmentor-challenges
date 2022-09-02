import { createTheme } from '@mui/material/styles'
const theme = createTheme({
  palette: {
    type: 'light',
    common: {
      black: 'hsl(0, 0%, 70%)',
      white: 'hsl(0, 0%, 100%)',
    },
    primary: {
      main: 'hsl(223, 87%, 63%)',
      light: 'hsl(223, 100%, 88%)',
      dark: 'hsl(209, 33%, 12%)',
    },
    error: {
      main: 'hsl(354, 100%, 66%)',
    },
    text: {
      primary: 'hsl(0, 0%, 59%)',
      secondary: 'hsl(0, 0%, 0%)',
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
          padding: '1em 3em',
          color: 'hsl(0, 0%, 100%)',
          borderRadius: 9999,
          boxShadow: '0 10px 10px hsla(223, 87%, 63%, 0.2)',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'hsl(223, 100%, 88%)',
            boxShadow: '0 10px 15px hsla(223, 87%, 63%, 0.1)',
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: 'Libre Franklin',
          borderRadius: 9999,
          fieldset: {
            borderColor: 'hsl(223, 87%, 63%)',
          },
        },
        input: {
          padding: '1em 1em 1em 3em',
          '&::placeholder': {
            color: 'hsl(223, 87%, 63%)',
          },
        },
      },
    },
  },
})

export default theme
