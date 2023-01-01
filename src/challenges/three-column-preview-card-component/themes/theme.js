import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(31, 77%, 52%)',
    },
    text: {
      primary: 'hsla(0, 0%, 100%, 0.75)',
      secondary: 'hsl(0, 0%, 95%)',
    },
    background: {
      default: 'hsl(0, 0%, 95%)',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Lexend Deca',
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          padding: '0.5em 2em',
          fontFamily: 'Lexend Deca',
          backgroundColor: 'hsl(0, 0%, 95%)',
          border: '1px solid hsl(0, 0%, 95%)',
          borderRadius: '9999px',
          textTransform: 'none',
          '&:hover': {
            color: 'inherit',
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
})

export default theme
