import MuiBox from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardContent from '@mui/material/CardContent'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import imageJeremy from '../../../assets/images/image-jeremy.png'

const ProfileCard = ({ name }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <MuiCard
      sx={{
        maxWidth: 330,
        width: '100%',
        height: '100%',
        bgcolor: 'hsl(235, 46%, 20%)',
        backgroundImage: 'none',
        borderRadius: 5,
      }}
    >
      <MuiStack
        direction={{ xs: 'row', lg: 'column' }}
        alignItems={{ xs: 'center', lg: 'normal' }}
        spacing={2}
        sx={{ p: 4, bgcolor: 'hsl(246, 80%, 60%)', borderRadius: 5 }}
      >
        <MuiBox
          component="img"
          sx={{
            width: 70,
            height: 'fit-content',
            border: '3px solid hsl(0, 100%, 100%)',
            borderRadius: '100%',
          }}
          alt={name}
          src={imageJeremy}
        />

        <MuiCardContent sx={{ p: 0 }}>
          <MuiStack>
            <MuiTypography color="text.secondary">Report for</MuiTypography>

            <MuiTypography variant={matches ? 'h5' : 'h4'} color="text.primary" sx={{ fontWeight: 300 }}>
              {name}
            </MuiTypography>
          </MuiStack>
        </MuiCardContent>
      </MuiStack>

      <MuiBox sx={{ px: 4, py: 2 }}>
        <MuiCardActions>
          <MuiStack direction={{ xs: 'row', lg: 'column' }} justifyContent="space-between" spacing={2} sx={{ width: '100%' }}>
            <MuiTypography
              color="text.secondary"
              gutterBottom
              sx={{
                '&:hover': {
                  color: 'hsl(0, 0%, 100%)',
                  cursor: 'pointer',
                },
              }}
            >
              Daily
            </MuiTypography>
            <MuiTypography
              color="text.secondary"
              gutterBottom
              sx={{
                '&:hover': {
                  color: 'hsl(0, 0%, 100%)',
                  cursor: 'pointer',
                },
              }}
            >
              Weekly
            </MuiTypography>
            <MuiTypography
              color="text.secondary"
              gutterBottom
              sx={{
                '&:hover': {
                  color: 'hsl(0, 0%, 100%)',
                  cursor: 'pointer',
                },
              }}
            >
              Monthly
            </MuiTypography>
          </MuiStack>
        </MuiCardActions>
      </MuiBox>
    </MuiCard>
  )
}

export default ProfileCard
