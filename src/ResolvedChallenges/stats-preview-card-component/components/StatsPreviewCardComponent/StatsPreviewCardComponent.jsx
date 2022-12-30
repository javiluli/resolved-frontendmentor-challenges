import MuiBox from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiGrid from '@mui/material/Grid'
import MuiStack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import imgHeaderDesktop from '../../assets/images/image-header-desktop.jpg'
import imgHeaderMobile from '../../assets/images/image-header-mobile.jpg'
import { FooterWithStats } from './FooterWithStats'
import { MainSection } from './MainSection'

const QRCodeComponent = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  // variables responsives
  const MUIResponsive = {
    IMG_HEADER: matches ? imgHeaderMobile : imgHeaderDesktop,
    MAX_WIDTH: matches ? 320 : 900,
    PADDING: matches ? '1em 1.5em' : '2em 3em 3em 2em',
  }

  return (
    <MuiCard
      sx={{
        maxWidth: MUIResponsive.MAX_WIDTH,
        borderRadius: '1em',
      }}
    >
      <MuiGrid container direction="row-reverse">
        <MuiGrid item xs={12} md={6} sx={{ position: 'relative' }}>
          <MuiCardMedia component="img" image={MUIResponsive.IMG_HEADER} />
          <MuiBox
            sx={{
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'primary.dark',
              opacity: 0.6,
            }}
          />
        </MuiGrid>

        <MuiGrid item xs={12} md={6}>
          <MuiStack justifyContent="space-between" spacing={3} sx={{ height: '100%', padding: MUIResponsive.PADDING }}>
            <MainSection />
            <FooterWithStats />
          </MuiStack>
        </MuiGrid>
      </MuiGrid>
    </MuiCard>
  )
}

export default QRCodeComponent
