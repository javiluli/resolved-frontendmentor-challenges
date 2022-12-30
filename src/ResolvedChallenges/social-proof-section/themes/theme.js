import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(300, 43%, 22%)',
      secondary: 'hsl(333, 80%, 67%)',
    },
    grey: {
      50: '#fafafa',
    },
    text: {
      primary: ' hsl(0, 0%, 100%)',
      secondary: 'hsl(303, 10%, 53%)',
    },
    background: {
      paper: 'hsl(300, 24%, 96%)',
      default: 'hsl(0, 0%, 100%)',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'League Spartan',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          padding: '0.35em',
          borderRadius: '0.5em',
          boxShadow: 'none',
        },
      },
    },

    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          color: 'hsl(0, 0%, 100%)',
          fontWeight: 500,
        },
        subheaderTypographyProps: {
          color: 'hsl(333, 80%, 67%)',
          fontWeight: 400,
        },
      },

      styleOverrides: {
        avatar: {
          marginRight: '2em',
        },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            padding: 'inherit',
          },
        },
      },
    },
  },
})

export default theme
