import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    text: {
      primary: 'hsl(230, 8%, 67%)',
      secondary: 'hsla(0, 0%, 100%, 1)',
      disabled: 'hsla(0, 0%, 1000%, 0.6)',
    },
    background: {
      paper: 'hsl(0, 0%, 100%)',
      default: 'hsl(204, 43%, 93%)',
    },

    custom: {
      lime: {
        main: 'hsl(71, 73%, 54%)',
      },
      cyan: {
        light: 'hsl(179, 47%, 52%)',
        main: 'hsl(179, 62%, 43%)',
      },
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
          textTransform: 'none',
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
