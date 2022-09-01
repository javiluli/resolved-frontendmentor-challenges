import MuiBox from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiDivider from '@mui/material/Divider'
import MuiGrid from '@mui/material/Grid'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import img__iconEthereum from '../../images/icon-ethereum.svg'
import img__iconView from '../../images/icon-view.svg'
import img__imageAvatar from '../../images/image-avatar.png'
import img__imageEquilibrium from '../../images/image-equilibrium.jpg'

const NFTPreviewCardComponent = () => {
  return (
    <MuiCard
      sx={{
        maxWidth: 300,
        backgroundColor: 'background.paper',
        padding: '1.15em',
        borderRadius: '0.75em',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
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
        <MuiCardMedia sx={{ position: 'relative', zIndex: 100 }} component="img" image={img__imageEquilibrium} />

        <MuiBox
          sx={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            display: 'grid',
            opacity: 0,
            zIndex: 101,
            transition: 'all 0.2s ease',
          }}
        >
          <MuiCardMedia sx={{ width: '3em', margin: 'auto' }} component="img" image={img__iconView} />
        </MuiBox>
      </MuiCardContent>

      <MuiCardContent sx={{ padding: '1em 0 0 !important' }}>
        <MuiGrid container spacing={2}>
          <MuiGrid item>
            <MuiTypography
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
              variant="subtitle1"
              color="text.primary"
            >
              Equilibrbium #3429
            </MuiTypography>
          </MuiGrid>
          <MuiGrid item>
            <MuiTypography variant="subtitle2" color="text.secondary">
              Our Equilibrium collection promotes balance and calm.
            </MuiTypography>
          </MuiGrid>
          <MuiGrid container item sx={{ justifyContent: 'space-between' }}>
            <MuiGrid item>
              <MuiCardMedia
                sx={{ display: 'inline-block', marginRight: 1, width: '0.5em' }}
                component="img"
                image={img__iconEthereum}
              />
              <MuiTypography variant="body1" color="primary.main" component="span">
                0.041 ETH
              </MuiTypography>
            </MuiGrid>

            <MuiGrid item xs="auto">
              <MuiTypography variant="body1" color="text.secondary" component="span">
                3 days left
              </MuiTypography>
            </MuiGrid>
          </MuiGrid>

          <MuiGrid item xs={12}>
            <MuiDivider sx={{ borderColor: 'primary.secondary' }} />
          </MuiGrid>

          <MuiGrid item xs={12}>
            <MuiStack direction="row" alignItems="center" spacing={2}>
              <MuiCardMedia sx={{ display: 'inline-block', width: '2em' }} component="img" image={img__imageAvatar} />
              <MuiTypography variant="body1" color="text.secondary" component="span">
                Creation of
              </MuiTypography>
              <MuiTypography
                sx={{
                  marginLeft: '3px !important',
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
                variant="body2"
                color="text.primary"
                component="span"
              >
                Jules Wyvern
              </MuiTypography>
            </MuiStack>
          </MuiGrid>
        </MuiGrid>
      </MuiCardContent>
    </MuiCard>
  )
}
export default NFTPreviewCardComponent
