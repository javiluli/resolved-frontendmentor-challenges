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

  shadows: ['none', '0px 48px 100px 0px rgba(17, 12, 46, 0.1)'],

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
