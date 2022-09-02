// MUI
import MuiBox from '@mui/material/Box'
import MuiGrid from '@mui/material/Grid'
import MuiStack from '@mui/material/Stack'
// MUI Hooks
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
// Components section
import Header from './Header'
import Banner from './Banner'
import Form from './Form'
// Images
import bgIntroMobile from '../../images/bg-intro-mobile.png'
import bgIntroDesktop from '../../images/bg-intro-desktop.png'

const BaseApparelComingSoonPage = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <MuiBox
      sx={{
        minWidth: '100%',
        height: matches ? '100vh' : 'auto',
        backgroundImage: `url(${matches ? bgIntroDesktop : bgIntroMobile})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'background.primary',
      }}
    >
      <MuiStack sx={{ height: matches ? '100%' : 'auto' }}>
        <MuiGrid
          sx={{ width: '100%', maxWidth: 1200, height: matches ? '100%' : 'auto', margin: '0 auto' }}
          container
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <MuiGrid sx={{ padding: 3 }} item xs={12} md={6}>
            <MuiBox sx={{ width: '100%', maxWidth: 450, margin: '0 auto' }}>
              <Header />
            </MuiBox>
          </MuiGrid>

          <MuiGrid sx={{ padding: 3 }} item xs={12} md={6}>
            <MuiStack
              sx={{ width: '100%', maxWidth: 450, margin: '0 auto' }}
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Banner />
              <Form />
            </MuiStack>
          </MuiGrid>
        </MuiGrid>
      </MuiStack>
    </MuiBox>
  )
}

export default BaseApparelComingSoonPage
