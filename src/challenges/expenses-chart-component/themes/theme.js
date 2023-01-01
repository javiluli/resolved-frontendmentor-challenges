import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(10, 79%, 65%)',
    },
    secondary: {
      main: 'hsl(186, 34%, 60%)',
    },
    custom: {
      brown: {
        main: 'hsl(28, 10%, 53%)',
        dark: 'hsl(25, 47%, 15%)',
      },
    },
    text: {
      primary: 'hsl(33, 100%, 98%)',
      secondary: 'hsl(27, 66%, 92%)',
    },
    background: {
      paper: 'hsl(33, 100%, 98%)',
      default: 'hsl(27, 66%, 92%)',
    },
  },

  shadows: ['none', '0px 48px 100px 0px rgba(17, 12, 46, 0.1)'],

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'DM Sans',
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          padding: '0.5em 0.5em',
          fontSize: '0.85rem',
          backgroundColor: 'hsl(25, 47%, 15%)',
        },
      },
    },
  },
})

export default theme
