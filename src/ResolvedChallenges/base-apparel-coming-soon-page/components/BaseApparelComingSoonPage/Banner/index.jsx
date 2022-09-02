// MUI
import Muibox from '@mui/material/Box'
// MUI Hooks
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
// Images
import heroMobile from '../../../images/hero-mobile.jpg'
import heroDesktop from '../../../images/hero-desktop.jpg'

const Banner = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))
  const imgHero = matches ? heroDesktop : heroMobile

  return (
    <Muibox
      sx={{
        maxHeight: '100vh',
      }}
      component="img"
      alt="Image"
      src={imgHero}
    />
  )
}

export default Banner
