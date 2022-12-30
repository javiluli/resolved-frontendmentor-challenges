import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import imgBgPattern from '../../assets/images/bg-pattern-desktop.svg'
import imgHeroDesktop from '../../assets/images/hero-desktop.jpg'
import imgHeroMobile from '../../assets/images/hero-mobile.jpg'
import imgLogo from '../../assets/images/logo.svg'
import { FormSection } from './FormSection'

const BaseApparelComingSoonPage = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <MuiBox
      sx={{
        minWidth: '100%',
        backgroundImage: `url(${imgBgPattern})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <MuiStack direction={{ md: 'column', lg: 'row' }} justifyContent="space-between" sx={{ height: '100%' }}>
        <MuiStack justifyContent={matches ? 'center' : ''} alignItems={matches ? 'center' : ''} sx={{ width: '100%', paddingBottom: 3 }}>
          <MuiBox sx={{ maxWidth: 430, width: '100%', padding: matches ? '2em 1.5em' : '2em 5em' }}>
            <MuiBox sx={{ width: matches ? 190 : 130 }} component="img" alt="Image logo" src={imgLogo} />
          </MuiBox>

          {!matches && <MuiBox sx={{ width: '100%' }} component="img" alt="Image hero" src={imgHeroMobile} />}

          <MuiStack justifyContent="center" alignItems="center" sx={{ maxWidth: 430, width: '100%', px: 3, margin: '0 auto' }} spacing={4}>
            <MuiBox>
              <MuiTypography
                variant="h2"
                component="h1"
                align={matches ? 'left' : 'center'}
                sx={{ margin: '1.5em 0 0.5em', fontWeight: 300, textTransform: 'uppercase' }}
              >
                <MuiTypography
                  variant="inherit"
                  component="span"
                  sx={{ display: 'block', color: 'text.primary', fontWeight: 'inherit', letterSpacing: 10 }}
                >
                  We're
                </MuiTypography>
                <MuiTypography
                  variant="inherit"
                  component="span"
                  sx={{ display: 'block', color: 'text.secondary', fontWeight: 600, letterSpacing: 10 }}
                >
                  coming
                </MuiTypography>
                <MuiTypography
                  variant="inherit"
                  component="span"
                  sx={{ display: 'block', color: 'text.secondary', fontWeight: 600, letterSpacing: 10 }}
                >
                  soon
                </MuiTypography>
              </MuiTypography>

              <MuiTypography variant="body1" align={matches ? 'left' : 'center'} sx={{ color: 'text.primary' }}>
                Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with
                announcements and our launch deals.
              </MuiTypography>
            </MuiBox>

            <FormSection />
          </MuiStack>
        </MuiStack>

        {matches && (
          <MuiStack sx={{ height: '100vh' }}>
            <MuiBox sx={{ height: '100%' }} component="img" alt="Image hero" src={imgHeroDesktop} />
          </MuiStack>
        )}
      </MuiStack>
    </MuiBox>
  )
}

export default BaseApparelComingSoonPage
