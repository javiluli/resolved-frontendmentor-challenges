import { useMediaQuery } from '@mui/material'
import MuiBox from '@mui/material/Box'
import MuiTypography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

const HeaderSection = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <MuiBox>
      <MuiTypography
        color="primary.main"
        variant="h2"
        component="h1"
        textAlign={matches ? 'center' : 'left'}
        sx={{ fontWeight: 700, lineHeight: 0.95 }}
        gutterBottom
      >
        10,000+ of our users love our products.
      </MuiTypography>
      <MuiTypography
        variant="h6"
        component="h2"
        textAlign={matches ? 'center' : 'left'}
        sx={{ color: 'text.secondary', fontWeight: 700 }}
        gutterBottom
      >
        We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our
        services.
      </MuiTypography>
    </MuiBox>
  )
}

export default HeaderSection
