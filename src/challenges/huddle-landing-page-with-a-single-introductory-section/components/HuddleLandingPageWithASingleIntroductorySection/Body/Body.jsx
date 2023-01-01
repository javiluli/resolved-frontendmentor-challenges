import MuiBox from '@mui/material/Box'
import MuiButton from '@mui/material/Button'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Header = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <MuiStack justifyContent="center" spacing={4}>
      <MuiTypography
        variant={matches ? 'h3' : 'h5'}
        component="h1"
        align={matches ? 'left' : 'center'}
        color="text.primary"
        sx={{ fontWeight: 600, fontFamily: 'Poppins' }}
      >
        Build The Community Your Fans Will Love
      </MuiTypography>
      <MuiTypography
        variant={matches ? 'h6' : ''}
        color="text.primary"
        align={matches ? 'left' : 'center'}
        sx={{ fontFamily: 'Open Sans' }}
        gutterBottom
      >
        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as
        you engage in genuine discussion.
      </MuiTypography>

      <MuiStack justifyContent="center">
        <MuiBox sx={{ margin: matches ? '' : '0 auto' }}>
          <MuiButton variant="contained">Register</MuiButton>
        </MuiBox>
      </MuiStack>
    </MuiStack>
  )
}

export default Header
