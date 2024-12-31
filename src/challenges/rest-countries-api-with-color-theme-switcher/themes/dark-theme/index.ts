import { ThemeOptions, createTheme } from '@mui/material'

// Custom theme base
import borders from './base/borders'
import breakpoints from './base/breakpoints'
import colors from './base/colors'
import globals from './base/globals'
import shadows from './base/shadows'
import typography from './base/typography'
// Custom theme components
import appBar from './components/appBar'
import button from './components/button'
import card from './components/card'
import cardContent from './components/card/cardContent'
import inputOutlined from './components/form/inputOutlined'
import select from './components/form/select'
import textField from './components/form/textField'
import list from './components/list'
import menu from './components/menu'
import menuItem from './components/menu/menuItem'
// Custom theme functions
import pxToRem from './functions/pxToRem'

// Define the type for functions
interface CustomFunctions {
  pxToRem: typeof pxToRem
}

// Extend the ThemeOptions interface to include the borders property
interface CustomThemeOptions extends ThemeOptions {
  borders?: typeof borders
  functions?: CustomFunctions
}

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  shadows: { ...shadows },
  borders: { ...borders },
  functions: {
    pxToRem,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
      },
    },

    MuiAppBar: { ...appBar },
    MuiButton: { ...button },
    MuiCard: { ...card },
    MuiCardContent: { ...cardContent },
    MuiOutlinedInput: { ...inputOutlined },
    MuiSelect: { ...select },
    MuiTextField: { ...textField },
    MuiList: { ...list },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
  },
} as CustomThemeOptions)
