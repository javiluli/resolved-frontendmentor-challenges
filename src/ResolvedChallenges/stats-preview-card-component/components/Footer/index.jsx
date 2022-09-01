// MUI
import { styled } from '@mui/material/styles'
import MuiBox from '@mui/material/Box'
import MuiTypography from '@mui/material/Typography'

const MuiBoxResponsive = styled(MuiBox)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'left',
  },
}))

const Footer = () => {
  return (
    <MuiBoxResponsive sx={{ gap: '1.25em' }}>
      <MuiBox>
        <MuiTypography variant="body1" color="text.primary">
          10k+
        </MuiTypography>
        <MuiTypography variant="body2" color="text.secondary">
          companies
        </MuiTypography>
      </MuiBox>

      <MuiBox>
        <MuiTypography variant="body1" color="text.primary">
          314
        </MuiTypography>
        <MuiTypography variant="body2" color="text.secondary">
          templates
        </MuiTypography>
      </MuiBox>

      <MuiBox>
        <MuiTypography variant="body1" color="text.primary">
          12m+
        </MuiTypography>
        <MuiTypography variant="body2" color="text.secondary">
          queries
        </MuiTypography>
      </MuiBox>
    </MuiBoxResponsive>
  )
}
export default Footer
