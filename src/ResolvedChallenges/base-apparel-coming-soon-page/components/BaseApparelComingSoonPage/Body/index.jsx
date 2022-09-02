// MUI
import Muibox from '@mui/material/Box'
import MuiTypography from '@mui/material/Typography'
// MUI Hooks
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Body = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <Muibox>
      <MuiTypography
        sx={{ margin: '1.5em 0 0.5em', fontWeight: 300, textTransform: 'uppercase' }}
        align={matches ? 'left' : 'center'}
        variant={matches ? 'h1' : 'h2'}
        component="h1"
      >
        <MuiTypography
          sx={{ display: 'block', color: 'text.primary', fontWeight: 'inherit', letterSpacing: 10 }}
          variant="inherit"
          component="span"
        >
          We're
        </MuiTypography>
        <MuiTypography
          sx={{ display: 'block', color: 'text.secondary', fontWeight: 600, letterSpacing: 10 }}
          variant="inherit"
          component="span"
        >
          coming
        </MuiTypography>
        <MuiTypography
          sx={{ display: 'block', color: 'text.secondary', fontWeight: 600, letterSpacing: 10 }}
          variant="inherit"
          component="span"
        >
          soon
        </MuiTypography>
      </MuiTypography>

      <MuiTypography sx={{ color: 'text.primary' }} align={matches ? 'left' : 'center'} variant="body1">
        Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date
        with announcements and our launch deals.
      </MuiTypography>
    </Muibox>
  )
}

export default Body
