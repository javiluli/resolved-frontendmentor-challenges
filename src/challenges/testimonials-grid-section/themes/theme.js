import { createTheme } from '@mui/material/styles'

const Colors = {
  // ### Primary
  MODERATE_VIOLET: 'hsl(263, 55%, 52%)',
  VERY_DARK_GRAYISH_BLUE: 'hsl(217, 19%, 35%)',
  VERY_DARK_BLACKISH_BLUE: 'hsl(219, 29%, 14%)',
  WHITE: 'hsl(0, 0%, 100%)',
  // ### Neutral
  LIGHT_GRAY: 'hsl(0, 0%, 81%)',
  LIGHT_GRAYISH_BLUE: 'hsl(210, 46%, 95%)',
}

const theme = createTheme({
  palette: {
    type: 'light',
    background: {
      paper: Colors.WHITE,
      default: Colors.LIGHT_GRAYISH_BLUE,
    },
  },

  shadows: ['none', '0px 48px 100px 0px rgba(17, 12, 46, 0.1)'],

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Barlow Semi Condensed',
        },
      },
    },
  },
})

export default theme
