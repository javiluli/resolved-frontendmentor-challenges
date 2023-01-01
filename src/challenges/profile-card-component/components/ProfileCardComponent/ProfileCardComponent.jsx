import MuiBox from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiDivider from '@mui/material/Divider'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

import imgBgPatternBottom from '../../assets/images/bg-pattern-bottom.svg'
import imgBgPatternCard from '../../assets/images/bg-pattern-card.svg'
import imgBgPatternTop from '../../assets/images/bg-pattern-top.svg'
import imgProfile from '../../assets/images/image-victor.jpg'

const ProfileCardComponent = () => {
  return (
    <MuiStack
      justifyContent="center"
      alignItems="center"
      sx={{
        p: 4,
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <MuiBox
        sx={{
          position: 'absolute',
          top: -600,
          left: -200,
          width: '978px',
          height: '978px',
          backgroundImage: `url(${imgBgPatternTop})`,
          backgroundRepeat: 'no-repeat',
        }}
      />

      <MuiBox
        sx={{
          position: 'absolute',
          bottom: -600,
          right: -200,
          width: '978px',
          height: '978px',
          backgroundImage: `url(${imgBgPatternBottom})`,
          backgroundRepeat: 'no-repeat',
        }}
      />

      <MuiCard
        sx={{
          width: 320,
          borderRadius: '1rem',
          boxShadow: '0px 48px 100px 0px rgba(17, 12, 46, 0.1)',
          zIndex: 0,
        }}
      >
        <MuiCardContent
          sx={{
            position: 'relative',
            padding: 0,
          }}
        >
          <MuiCardMedia sx={{ position: 'absolute' }} component="img" image={imgBgPatternCard} />
        </MuiCardContent>

        <MuiCardContent sx={{ marginTop: '3em' }}>
          <MuiCardMedia
            sx={{
              position: 'relative',
              width: '100px',
              margin: '0.5em auto',
              borderRadius: '100%',
              border: '4px solid transparent',
              borderColor: 'background.paper',
            }}
            component="img"
            image={imgProfile}
          />
          <MuiTypography variant="h6" component="h1" color="text.primary" textAlign="center" sx={{ fontWeight: 700 }} gutterBottom>
            Victor Crest
            <MuiTypography variant="h6" component="span" color="text.secondary" sx={{ mx: '0.25em' }}>
              26
            </MuiTypography>
          </MuiTypography>
          <MuiTypography variant="subtitle1" color="text.secondary" textAlign="center" gutterBottom>
            London
          </MuiTypography>

          <MuiDivider />

          <MuiStack direction="row" justifyContent="space-around" alignItems="center" spacing={2}>
            <MuiBox sx={{ textAlign: 'center' }}>
              <MuiTypography variant="h6" color="text.primary" sx={{ fontWeight: 700 }}>
                80K
              </MuiTypography>
              <MuiTypography variant="caption" color="text.secondary">
                Followers
              </MuiTypography>
            </MuiBox>

            <MuiBox sx={{ textAlign: 'center' }}>
              <MuiTypography variant="h6" color="text.primary" sx={{ fontWeight: 700 }}>
                803K
              </MuiTypography>
              <MuiTypography variant="caption" color="text.secondary">
                Likes
              </MuiTypography>
            </MuiBox>

            <MuiBox sx={{ textAlign: 'center' }}>
              <MuiTypography variant="h6" color="text.primary" sx={{ fontWeight: 700 }}>
                1.4K
              </MuiTypography>
              <MuiTypography variant="caption" color="text.secondary">
                Photos
              </MuiTypography>
            </MuiBox>
          </MuiStack>
        </MuiCardContent>
      </MuiCard>
    </MuiStack>
  )
}

export default ProfileCardComponent
