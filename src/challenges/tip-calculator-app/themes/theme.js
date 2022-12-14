import { createTheme } from '@mui/material/styles'

const Colors = {
  // ### Primary
  Strong_cyan: 'hsl(172, 67%, 45%)',
  // ### Neutral
  Very_dark_cyan: 'hsl(183, 100%, 15%)',
  Dark_grayish_cyan: 'hsl(186, 14%, 43%)',
  Grayish_cyan: 'hsl(184, 14%, 56%)',
  Light_grayish_cyan: 'hsl(185, 41%, 84%)',
  Very_light_grayish_cyan: 'hsl(189, 41%, 97%)',
  White: 'hsl(0, 0%, 100%)',
}

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(172, 67%, 45%)', // Strong cyan
      dark: 'hsl(183, 100%, 15%)', // Very dark cyan
      contrastText: 'hsl(0, 0%, 100%)', // White
    },
    error: {
      main: 'hsl(15,70%,60%)',
    },
    text: {
      primary: 'hsl(183, 100%, 15%)', // Very dark cyan
      secondary: 'hsl(172, 67%, 45%)', // Strong cyan
      disabled: 'hsla(0, 0%, 100%, 0.4)', // White (0.4)
    },
    background: {
      paper: 'hsl(0, 0%, 100%)', // White
      default: 'hsl(185, 41%, 84%)', // Light grayish cyan
    },
  },

  shadows: ['none', '0px 48px 100px 0px rgba(17, 12, 46, 0.1)'],

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Space Mono',
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          padding: '0.25em 2.75em',
          fontFamily: 'Space Mono',
          fontSize: 18,
          color: 'hsl(0, 0%, 100%)',
          backgroundColor: Colors.Very_dark_cyan,
          borderRadius: 6,
          '&:hover': {
            color: Colors.Very_dark_cyan,
            backgroundColor: Colors.Light_grayish_cyan,
          },

          disabled: {
            backgroundColor: 'hsl(183.1,78.7%,23.9%)',
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: 'Space Mono',
          fontSize: 18,
          color: Colors.Very_dark_cyan,
          backgroundColor: Colors.Very_light_grayish_cyan,

          '&:focus': {
            border: '10px solid red',
          },
        },

        notchedOutline: {
          borderColor: 'transparent',
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Space Mono',
          color: Colors.Very_dark_cyan,
        },
      },
    },
  },
})

export default theme
