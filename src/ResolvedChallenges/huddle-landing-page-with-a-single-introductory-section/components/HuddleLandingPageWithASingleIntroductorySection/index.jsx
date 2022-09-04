// MUI
import MuiBox from '@mui/material/Box'
import MuiGrid from '@mui/material/Grid'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// components
import Header from './Header'
import Banner from './Banner'
import Body from './Body'
import Footer from './Footer'

// Images
import bgMobile from '../../images/bg-mobile.svg'
import bgDesktop from '../../images/bg-desktop.svg'

const HuddleLandingPageWithASingleIntroductorySection = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <MuiBox
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${matches ? bgDesktop : bgMobile})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <MuiGrid container sx={{ px: 5, py: 4, minHeight: '100vh' }} spacing={6}>
        <MuiGrid item xs={12}>
          <Header />
        </MuiGrid>

        <MuiGrid item xs={12} md={7}>
          <Banner />
        </MuiGrid>

        <MuiGrid
          item
          container
          direction="column"
          justifyContent="space-between"
          alignItems="flex-end"
          xs={12}
          md
          spacing={6}
        >
          <MuiGrid item>
            <Body />
          </MuiGrid>
          <MuiGrid item sx={{ width: matches ? 'auto' : '100%' }}>
            <Footer />
          </MuiGrid>
        </MuiGrid>
      </MuiGrid>
    </MuiBox>
  )
}

export default HuddleLandingPageWithASingleIntroductorySection
