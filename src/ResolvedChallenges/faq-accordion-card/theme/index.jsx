import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(273, 75%, 66%)',
    },
    text: {
      primary: 'hsl(238, 29%, 16%)',
      secondary: 'hsl(240, 6%, 50%)',
    },
    background: {
      default: 'hsl(240, 70%, 95%)',
      paper: 'hsl(0, 0%, 100%)',
    },
  },
  typography: {
    subtitle1: {
      fontSize: '2.15em',
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: '0.80em',
      fontWeight: 700,
    },
    body1: {
      fontSize: '0.75em',
      fontWeight: 400,
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Kumbh Sans',
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&::before': {
            backgroundColor: 'hsl(240, 5%, 91%)',
          },
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: 'hsl(14, 88%, 65%)',
          fontWeight: 700,
        },
      },
    },
  },
})

export default theme
