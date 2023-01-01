import MuiBox from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiDivider from '@mui/material/Divider'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

import imgIconClock from '../../assets/images/icon-clock.svg'
import imgIconEthereum from '../../assets/images/icon-ethereum.svg'
import imgIconView from '../../assets/images/icon-view.svg'
import imgImageAvatar from '../../assets/images/image-avatar.png'
import imgImageEquilibrium from '../../assets/images/image-equilibrium.jpg'

const NFTPreviewCardComponent = () => {
  return (
    <MuiCard
      sx={{
        maxWidth: 300,
        padding: '1.15em',
        borderRadius: '1em',
      }}
    >
      <MuiCardContent
        sx={{
          position: 'relative',
          padding: 0,
          borderRadius: '0.5em',
          overflow: 'hidden',
          cursor: 'pointer',
          '&:hover .MuiBox-root': {
            backgroundColor: 'hsla(178, 100%, 50%, 0.4)',
            opacity: 1,
          },
        }}
      >
        <MuiCardMedia sx={{ position: 'relative', zIndex: 100 }} component="img" image={imgImageEquilibrium} />

        <MuiBox
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'grid',
            opacity: 0,
            zIndex: 101,
            transition: 'all 0.2s ease',
          }}
        >
          <MuiCardMedia sx={{ width: '3em', margin: 'auto' }} component="img" image={imgIconView} />
        </MuiBox>
      </MuiCardContent>

      <MuiCardContent sx={{ padding: '1em 0 0 !important' }}>
        <MuiStack spacing={2}>
          <MuiTypography
            variant="body1"
            component="h1"
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            Equilibrbium #3429
          </MuiTypography>

          <MuiTypography variant="body2" color="text.secondary" sx={{ fontWeight: 300 }}>
            Our Equilibrium collection promotes balance and calm.
          </MuiTypography>

          <MuiStack direction="row" justifyContent="space-between" alignItems="center">
            <MuiStack direction="row" alignItems="center" spacing={1}>
              <MuiCardMedia component="img" image={imgIconEthereum} sx={{ width: '0.5em' }} />
              <MuiTypography variant="body2" color="primary.main" component="span">
                0.041 ETH
              </MuiTypography>
            </MuiStack>

            <MuiStack direction="row" alignItems="center" spacing={1}>
              <MuiCardMedia component="img" image={imgIconClock} sx={{ width: '0.85em' }} />
              <MuiTypography variant="body2" color="text.secondary" component="span">
                3 days left
              </MuiTypography>
            </MuiStack>
          </MuiStack>

          <MuiDivider sx={{ borderColor: 'primary.secondary' }} />

          <MuiStack direction="row" alignItems="center" spacing={1}>
            <MuiCardMedia component="img" image={imgImageAvatar} sx={{ display: 'inline-block', width: '2em' }} />

            <MuiTypography variant="body2" color="text.secondary" sx={{ fontWeight: 300 }}>
              Creation of
              <MuiTypography
                variant="body2"
                color="text.primary"
                component="span"
                sx={{
                  marginLeft: '3px',
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                Jules Wyvern
              </MuiTypography>
            </MuiTypography>
          </MuiStack>
        </MuiStack>
      </MuiCardContent>
    </MuiCard>
  )
}
export default NFTPreviewCardComponent
