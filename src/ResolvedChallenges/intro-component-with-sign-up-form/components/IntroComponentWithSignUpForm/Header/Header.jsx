import MuiBox from '@mui/material/Box'
import MuiTypography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Header = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <MuiBox>
      <MuiTypography
        variant={matches ? 'h3' : 'h5'}
        component="h1"
        align={matches ? 'left' : 'center'}
        sx={{ color: 'text.primary', fontWeight: 600 }}
        gutterBottom
      >
        Learn to code by watching others
      </MuiTypography>

      <MuiTypography
        variant={matches ? 'h6' : 'body1'}
        component="h2"
        align={matches ? 'left' : 'center'}
        sx={{ color: 'text.primary' }}
        gutterBottom
      >
        See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers
        think is invaluable.
      </MuiTypography>
    </MuiBox>
  )
}

export default Header
