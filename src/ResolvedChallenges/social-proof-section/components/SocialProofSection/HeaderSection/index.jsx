// MUI
import { styled } from '@mui/material/styles'
import MuiBox from '@mui/material/Box'
import MuiTypography from '@mui/material/Typography'

const MuiTypographyResponsive = styled(MuiTypography)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.up('lg')]: {
    textAlign: 'left',
  },
}))

const HeaderSection = () => {
  return (
    <MuiBox>
      <MuiTypographyResponsive sx={{ color: 'primary.main' }} variant="h1" component="h1" gutterBottom>
        10,000+ of our users love our products.
      </MuiTypographyResponsive>
      <MuiTypographyResponsive sx={{ color: 'text.secondary' }} variant="subtitle1" component="p" gutterBottom>
        We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our
        services.
      </MuiTypographyResponsive>
    </MuiBox>
  )
}

export default HeaderSection
