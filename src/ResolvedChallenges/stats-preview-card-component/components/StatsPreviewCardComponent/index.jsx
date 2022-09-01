// MUI
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiBox from '@mui/material/Box'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiGrid from '@mui/material/Grid'
// Components
import Footer from '../Footer'
import MainSection from '../MainSection'
// Images
import img__headerDesktop from '../../images/image-header-desktop.jpg'
import img__headerMobile from '../../images/image-header-mobile.jpg'

const MuiCardResponsive = styled(MuiBox)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    maxWidth: 320,
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: 320,
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: 900,
  },
}))

const MuiCardContentResponsive = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: '1em 1.5em !important',
  },
  [theme.breakpoints.up('sm')]: {
    padding: '1em 1.5em !important',
  },
  [theme.breakpoints.up('md')]: {
    padding: '3em 4em 3em 3em !important',
  },
}))

const QRCodeComponent = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  // variables responsives
  const imgHeader = matches ? img__headerDesktop : img__headerMobile

  return (
    <MuiCardResponsive
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: '0.75em',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
      }}
    >
      <MuiGrid container sx={{ flexDirection: 'row-reverse' }}>
        <MuiGrid item xs={12} md={6}>
          <MuiCardMedia sx={{ filter: 'hue-rotate(90deg)' }} component="img" image={imgHeader} />
        </MuiGrid>

        <MuiGrid item xs={12} md={6}>
          <MuiCardContentResponsive>
            <MainSection />
            <Footer />
          </MuiCardContentResponsive>
        </MuiGrid>
      </MuiGrid>
    </MuiCardResponsive>
  )
}

export default QRCodeComponent
