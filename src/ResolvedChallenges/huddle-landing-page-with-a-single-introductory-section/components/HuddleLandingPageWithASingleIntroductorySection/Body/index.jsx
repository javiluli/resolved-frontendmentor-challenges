// MUI
import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import MuiButton from '@mui/material/Button'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Header = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <MuiStack justifyContent="center" spacing={4}>
      <MuiBox>
        <MuiTypography
          align={matches ? 'left' : 'center'}
          component="h1"
          gutterBottom
          sx={{ color: 'text.primary', fontWeight: 600 }}
          variant={matches ? 'h2' : 'h5'}
        >
          Build The Community Your Fans Will Love
        </MuiTypography>
      </MuiBox>
      <MuiBox>
        <MuiTypography align={matches ? 'left' : 'center'} gutterBottom sx={{ color: 'text.primary' }} variant="body1">
          Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users
          as you engage in genuine discussion.
        </MuiTypography>
      </MuiBox>

      <MuiBox>
        <MuiBox sx={{ width: 'min-content', mx: matches || 'auto' }}>
          <MuiButton variant="contained">Register</MuiButton>
        </MuiBox>
      </MuiBox>
    </MuiStack>
  )
}

export default Header
