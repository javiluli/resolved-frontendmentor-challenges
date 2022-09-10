// MUI
import MuiBox from '@mui/material/Box'
import MuiTypography from '@mui/material/Typography'
import MuiPaper from '@mui/material/Paper'
// MUI Hooks
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Banner = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <MuiBox sx={{ width: '100%' }}>
      <MuiPaper sx={{ padding: '1.5em 4em', borderRadius: '0.75em', boxShadow: '0 8px 0 hsla(0, 0%, 0%, 0.1)' }} elevation={0}>
        <MuiTypography sx={{ color: 'text.primary', fontWeight: 600 }} align={'center'} variant="body1">
          Try it free 7 days
          <MuiTypography sx={{ marginLeft: '0.25em', fontWeight: 300 }} align={'center'} component="span">
            then $20/mo. thereafter
          </MuiTypography>
        </MuiTypography>
      </MuiPaper>
    </MuiBox>
  )
}

export default Banner
