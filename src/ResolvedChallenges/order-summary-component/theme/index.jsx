import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(245, 75%, 52%)',
    },
    text: {
      primary: 'hsl(0, 0%, 100%)',
      secondary: 'hsl(217, 12%, 63%)',
    },
    background: {
      paper: 'hsl(0, 0%, 100%)',
      default: 'hsl(225, 100%, 94%)',
    },
  },
  typography: {
    subtitle1: {
      color: 'hsl(223, 47%, 23%)',
      fontSize: '1.45em',
      fontWeight: 900,
    },
    subtitle2: {
      color: 'hsl(224, 23%, 55%)',
      fontSize: '0.80em',
      fontWeight: 500,
      lineHeight: '1.65em',
    },
    body1: {
      color: 'hsl(223, 47%, 23%)',
      fontWeight: 900,
      fontSize: '0.85em',
    },
    body2: {
      color: 'hsl(224, 23%, 55%)',
      fontSize: '0.85em',
      fontWeight: 500,
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
          fontFamily: 'Red Hat Display',
          fontSize: '0.75em',
          fontWeight: 700,
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
        fullWidth: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          color: 'hsl(0, 0%, 100%)',
          fontFamily: 'Red Hat Display',
          textTransform: 'none',
          borderRadius: '0.7em',
          '&:hover': {
            backgroundColor: 'hsl(244, 82%, 70%)',
          },
        },
        textPrimary: {
          color: 'hsl(245, 75%, 52%)',
          fontFamily: 'Red Hat Display',
          textTransform: 'none',
          borderRadius: '0.7em',
          '&:hover': {
            color: 'hsl(223, 47%, 23%)',
            backgroundColor: 'hsl(0, 0%, 100%)',
          },
        },
      },
    },
  },
})

export default theme
