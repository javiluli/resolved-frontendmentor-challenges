// MUI
import Muibox from '@mui/material/Box'
// MUI Hooks
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
// Images
import logo from '../../../images/logo.svg'

const Header = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <Muibox
      sx={{
        width: matches ? 190 : 120,
        margin: matches ? '0 10em 0 15em' : '3em 2em 1em',
      }}
      component="img"
      alt="Image"
      src={logo}
    />
  )
}

export default Header
