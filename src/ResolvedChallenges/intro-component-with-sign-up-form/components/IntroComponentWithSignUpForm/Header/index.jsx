// MUI
import MuiBox from '@mui/material/Box'
import MuiTypography from '@mui/material/Typography'
// MUI Hooks
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Header = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <MuiBox>
      <MuiTypography
        sx={{ color: 'text.primary', fontWeight: 600 }}
        align={matches ? 'left' : 'center'}
        variant="h1"
        component="h1"
        gutterBottom
      >
        Learn to code by watching others
      </MuiTypography>

      <MuiTypography
        sx={{ color: 'text.primary', fontWeight: 500 }}
        align={matches ? 'left' : 'center'}
        variant="h2"
        component="h2"
        gutterBottom
      >
        See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers
        think is invaluable.
      </MuiTypography>
    </MuiBox>
  )
}

export default Header
