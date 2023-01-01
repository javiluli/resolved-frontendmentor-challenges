import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'hsl(25, 97%, 53%)',
    },
    text: {
      primary: 'hsl(0, 0%, 100%)',
      secondary: 'hsl(217, 12%, 63%)',
    },
    background: {
      paper: 'hsl(215, 22%, 15%)',
      default: 'hsl(216, 12%, 8%)',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Overpass',
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
        fullWidth: true,
        variant: 'contained',
        size: 'large',
      },

      styleOverrides: {
        root: {
          color: 'hsl(0, 0%, 100%)',
          fontFamily: 'Overpass',
          borderRadius: '9999px',
          '&:hover': {
            color: 'hsl(25, 97%, 53%)',
            backgroundColor: 'hsl(0, 0%, 100%)',
          },
        },
      },
    },
  },
})

export default theme
