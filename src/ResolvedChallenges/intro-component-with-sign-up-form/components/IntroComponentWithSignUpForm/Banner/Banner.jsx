import MuiPaper from '@mui/material/Paper'
import MuiTypography from '@mui/material/Typography'

const Banner = () => {
  return (
    <MuiPaper elevation={1} sx={{ width: '100%', padding: '1.5em 3em', borderRadius: '1em' }}>
      <MuiTypography variant="body1" color="text.primary" align="center" sx={{ fontWeight: 700 }}>
        Try it free 7 days
        <MuiTypography variant="inherit" component="span" align="center" sx={{ marginLeft: '0.25em' }}>
          then $20/mo. thereafter
        </MuiTypography>
      </MuiTypography>
    </MuiPaper>
  )
}

export default Banner
