import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import imgBgDesktop from '../../assets/images/bg-desktop.svg'
import imgBgMobile from '../../assets/images/bg-mobile.svg'
import { Banner } from './Banner'
import { Body } from './Body'
import { Footer } from './Footer'
import { Header } from './Header'

const HuddleLandingPageWithASingleIntroductorySection = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <MuiBox
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${matches ? imgBgDesktop : imgBgMobile})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <MuiStack justifyContent={matches ? 'space-between' : ''} sx={{ px: matches ? 15 : 6, py: matches ? 10 : 4 }} spacing={6}>
        <MuiBox sx={{ width: 200 }}>
          <Header />
        </MuiBox>

        <MuiStack direction={{ xs: 'column', lg: 'row' }} spacing={12}>
          <MuiBox sx={{ width: '100%', maxWidth: 800 }}>
            <Banner />
          </MuiBox>
          <MuiBox sx={{ width: '100%', maxWidth: matches ? 600 : 'auto' }}>
            <Body />
          </MuiBox>
        </MuiStack>

        <Footer />
      </MuiStack>
    </MuiBox>
  )
}

export default HuddleLandingPageWithASingleIntroductorySection
