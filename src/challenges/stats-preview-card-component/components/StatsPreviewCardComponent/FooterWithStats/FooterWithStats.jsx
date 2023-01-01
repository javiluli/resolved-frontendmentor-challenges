import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const MuiBoxResponsive = styled(MuiStack)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.up('sm')]: {
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
        <MuiTypography variant="h5" color="text.primary">
          10k+
        </MuiTypography>
        <MuiTypography variant="body2" color="text.secondary">
          companies
        </MuiTypography>
      </MuiBox>

      <MuiBox>
        <MuiTypography variant="h5" color="text.primary">
          314
        </MuiTypography>
        <MuiTypography variant="body2" color="text.secondary">
          templates
        </MuiTypography>
      </MuiBox>

      <MuiBox>
        <MuiTypography variant="h5" color="text.primary">
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
