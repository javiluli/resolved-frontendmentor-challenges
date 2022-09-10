// MUI
import { styled } from '@mui/material/styles'
import MuiBox from '@mui/material/Box'
import MuiTypography from '@mui/material/Typography'

const MuiBoxResponsive = styled(MuiBox)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1em',

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.up('sm')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}))

const MainSection = () => {
  return (
    <MuiBoxResponsive>
      <MuiTypography variant="subtitle1" color="text.primary">
        Get
        <MuiTypography sx={{ margin: '0 0.25em', color: 'primary.main' }} variant="caption" color="text.primary">
          insights
        </MuiTypography>
        that help your business grow.
      </MuiTypography>
      <MuiTypography sx={{ lineHeight: '1.6em' }} variant="subtitle2" color="text.secondary" paragraph>
        Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
      </MuiTypography>
    </MuiBoxResponsive>
  )
}

export default MainSection
