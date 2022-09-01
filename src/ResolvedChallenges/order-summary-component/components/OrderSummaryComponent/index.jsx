import MuiBox from '@mui/material/Box'
import MuiButton from '@mui/material/Button'
import MuiCard from '@mui/material/Card'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiLink from '@mui/material/Link'
import MuiTypography from '@mui/material/Typography'
import img__iconMusic from '../../images/icon-music.svg'
import img__illustrationHero from '../../images/illustration-hero.svg'

const OrderSummaryComponent = () => {
  return (
    <MuiCard
      sx={{
        maxWidth: 340,
        backgroundColor: 'background.paper',
        borderRadius: '1em',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <MuiCardContent
        sx={{
          position: 'relative',
          padding: 0,
          backgroundColor: 'primary.main',
          overflow: 'hidden',
        }}
      >
        <MuiCardMedia sx={{ position: 'relative', zIndex: 100 }} component="img" image={img__illustrationHero} />
      </MuiCardContent>

      <MuiBox sx={{ padding: '1em 3em' }}>
        <MuiCardContent sx={{ padding: '0' }}>
          <MuiTypography sx={{ textAlign: 'center' }} variant="subtitle1">
            Order Summary
          </MuiTypography>
          <MuiTypography sx={{ textAlign: 'center' }} variant="subtitle2">
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </MuiTypography>
        </MuiCardContent>

        <MuiCardActions sx={{ padding: '0' }}>
          <MuiBox
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1em',
            }}
          >
            <MuiBox
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '0.75em',
                padding: '1em',
                margin: '1em 0',
                backgroundColor: 'hsl(225, 100%, 98%)',
                borderRadius: '0.75em',
              }}
            >
              <MuiCardMedia sx={{ width: '2.5em' }} component="img" image={img__iconMusic} />

              <MuiBox sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <MuiTypography variant="body1" component="span">
                  Anual Plan
                </MuiTypography>
                <MuiTypography variant="body2" component="span">
                  $59.99/year
                </MuiTypography>
              </MuiBox>

              <MuiLink component="span">Change</MuiLink>
            </MuiBox>

            <MuiButton>Proceed to Payment</MuiButton>
            <MuiButton variant="text">Cancel Order</MuiButton>
          </MuiBox>
        </MuiCardActions>
      </MuiBox>
    </MuiCard>
  )
}

export default OrderSummaryComponent
