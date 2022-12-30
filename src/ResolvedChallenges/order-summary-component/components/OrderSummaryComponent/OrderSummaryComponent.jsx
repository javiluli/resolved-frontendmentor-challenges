import MuiBox from '@mui/material/Box'
import MuiButton from '@mui/material/Button'
import MuiCard from '@mui/material/Card'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiLink from '@mui/material/Link'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import imgIconMusic from '../../assets/images/icon-music.svg'
import imgIllustrationHero from '../../assets/images/illustration-hero.svg'
import imgPatternBackgroundDesktop from '../../assets/images/pattern-background-desktop.svg'
import imgPatternBackgroundMobile from '../../assets/images/pattern-background-mobile.svg'

const OrderSummaryComponent = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  // variables responsives
  const imgPatternBackground = matches ? imgPatternBackgroundDesktop : imgPatternBackgroundMobile

  return (
    <MuiStack
      justifyContent="center"
      alignItems="center"
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${imgPatternBackground})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <MuiCard
        sx={{
          maxWidth: 320,
          borderRadius: '1em',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <MuiCardMedia component="img" image={imgIllustrationHero} />

        <MuiBox sx={{ padding: '0 1em' }}>
          <MuiCardContent>
            <MuiTypography variant="h6" align="center" sx={{ fontWeight: 900 }} gutterBottom>
              Order Summary
            </MuiTypography>
            <MuiTypography variant="body2" align="center" color="text.secondary">
              You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
            </MuiTypography>
          </MuiCardContent>

          <MuiCardActions>
            <MuiStack
              spacing={3}
              sx={{
                width: '100%',
              }}
            >
              <MuiStack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{
                  padding: '1em',
                  backgroundColor: 'primary.light',
                  borderRadius: '0.75em',
                }}
              >
                <MuiCardMedia component="img" image={imgIconMusic} sx={{ width: '2.75em' }} />

                <MuiBox sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                  <MuiTypography variant="body1" component="span" sx={{ fontWeight: 900 }}>
                    Anual Plan
                  </MuiTypography>
                  <MuiTypography variant="body2" component="span" color="text.secondary">
                    $59.99/year
                  </MuiTypography>
                </MuiBox>

                <MuiLink variant="caption" component="span" sx={{ fontWeight: 900 }}>
                  Change
                </MuiLink>
              </MuiStack>

              <MuiStack spacing={3}>
                <MuiButton sx={{ boxShadow: '0 10px 20px 0px hsla(245, 75%, 52%, 0.3)' }}>Proceed to Payment</MuiButton>

                <MuiLink
                  underline="none"
                  variant="body1"
                  align="center"
                  color="text.secondary"
                  sx={{
                    fontWeight: 900,
                    '&:hover': {
                      color: 'inherit',
                    },
                  }}
                >
                  Cancel Order
                </MuiLink>
              </MuiStack>
            </MuiStack>
          </MuiCardActions>
        </MuiBox>
      </MuiCard>
    </MuiStack>
  )
}

export default OrderSummaryComponent
