import { createTheme } from '@mui/material'

import borders from './base/borders'
import breakpoints from './base/breakpoints'
import colors from './base/colors'
import globals from './base/globals'
import shadows from './base/shadows'
import typography from './base/typography'
import divider from './components/divider'
import formHelperText from './components/form/formHelperText'
import formLabel from './components/form/formLabel'
import inputOutlined from './components/form/inputOutlined'
import iconButton from './components/iconButton'
import svgIcon from './components/svgIcon'

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  shadows: { ...shadows },
  borders: { ...borders },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
      },
    },

    MuiDivider: { ...divider },
    MuiSvgIcon: { ...svgIcon },
    MuiIconButton: { ...iconButton },
    MuiOutlinedInput: { ...inputOutlined },
    MuiFormLabel: { ...formLabel },
    MuiFormHelperText: { ...formHelperText },
  },
})
