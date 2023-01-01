import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(245, 75%, 52%)',
      light: 'hsl(225, 100%, 98%)',
    },
    text: {
      primary: 'hsl(223, 47%, 23%)',
      secondary: 'hsl(224, 23%, 55%)',
    },
    background: {
      paper: 'hsl(0, 0%, 100%)',
      default: 'hsl(225, 100%, 94%)',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Red Hat Display',
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: 'hsl(245, 75%, 52%)',
          '&:hover': {
            color: 'hsl(244, 82%, 70%)',
            cursor: 'pointer',
          },
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
          padding: '0.75em 0',
          color: 'hsl(0, 0%, 100%)',
          fontFamily: 'Red Hat Display',
          textTransform: 'none',
          borderRadius: '0.75em',
          '&:hover': {
            backgroundColor: 'hsl(244, 82%, 70%)',
          },
        },
      },
    },
  },
})

export default theme
