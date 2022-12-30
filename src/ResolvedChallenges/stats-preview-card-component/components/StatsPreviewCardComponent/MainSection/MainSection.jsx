import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const MainSection = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  // variables responsives
  const MUIResponsive = {
    TEXT_ALIGN: matches ? 'center' : 'left',
  }

  return (
    <MuiStack textAlign={MUIResponsive.TEXT_ALIGN} spacing={3}>
      <MuiTypography variant="h4" component="h1">
        Get
        <MuiTypography variant="h4" component="span" color="primary.main" sx={{ margin: '0 0.25em' }}>
          insights
        </MuiTypography>
        that help your business grow.
      </MuiTypography>

      <MuiTypography variant="body2" color="text.secondary" sx={{ lineHeight: '1.6em' }}>
        Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
      </MuiTypography>
    </MuiStack>
  )
}

export default MainSection
