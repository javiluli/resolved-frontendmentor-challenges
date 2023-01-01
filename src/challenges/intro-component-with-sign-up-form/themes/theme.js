import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    common: {
      black: 'hsl(0, 0%, 0%)',
      white: 'hsl(0, 0%, 100%)',
    },
    primary: {
      main: 'hsl(248, 32%, 49%)',
      secondary: 'hsl(216, 99%, 60%)',
    },
    error: {
      main: 'hsl(0, 100%, 74%)',
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

  shadows: ['none', '0 8px 0 hsla(0, 0%, 0%, 0.1)'],

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
          boxShadow: '0 4px 0 hsl(154, 58%, 44%)',
          '&:hover': {
            backgroundColor: 'hsl(154, 75%, 60%)',
            boxShadow: '0 4px 0 hsl(154, 58%, 44%)',
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
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          color: 'hsl(0, 0%, 0%)',
          fontFamily: 'Poppins',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'hsl(248, 32%, 49%)',
          },

          fieldset: {
            borderColor: 'hsl(0, 0%, 85%)',
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textAlign: 'right',
        },
      },
    },
  },
})

export default theme
