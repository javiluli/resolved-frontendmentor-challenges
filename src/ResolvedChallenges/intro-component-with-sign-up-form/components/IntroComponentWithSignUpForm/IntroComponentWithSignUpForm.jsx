import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import bgIntroDesktop from '../../assets/images/bg-intro-desktop.png'
import bgIntroMobile from '../../assets/images/bg-intro-mobile.png'
import { Banner } from './Banner'
import { Form } from './Form'
import { Header } from './Header'

const BaseApparelComingSoonPage = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <MuiBox
      sx={{
        width: '100%',
        height: matches ? '100vh' : 'auto',
        backgroundImage: `url(${matches ? bgIntroDesktop : bgIntroMobile})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <MuiStack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ width: '100%', maxWidth: 1200, height: matches ? '100%' : 'auto', p: 3, margin: '0 auto' }}
      >
        <MuiBox sx={{ width: '100%', maxWidth: 600 }}>
          <Header />
        </MuiBox>

        <MuiStack spacing={3} sx={{ width: '100%', maxWidth: 500 }}>
          <Banner />
          <Form />
        </MuiStack>
      </MuiStack>
    </MuiBox>
  )
}

export default BaseApparelComingSoonPage
