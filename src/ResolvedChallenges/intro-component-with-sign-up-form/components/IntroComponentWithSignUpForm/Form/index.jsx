// MUI
import MuiBox from '@mui/material/Box'
import MuiTypography from '@mui/material/Typography'
import MuiPaper from '@mui/material/Paper'
import MuiTextField from '@mui/material/TextField'
import MuiStack from '@mui/material/Stack'
import MuiButton from '@mui/material/Button'
// MUI Hooks
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Form = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <MuiBox sx={{ width: '100%' }}>
      <MuiPaper
        sx={{
          padding: '1.5em',
          backgroundColor: 'common.white',
          borderRadius: '0.75em',
          boxShadow: '0 8px 0 hsla(0, 0%, 0%, 0.1)',
        }}
        elevation={0}
      >
        <MuiStack spacing={2}>
          <MuiTextField id="first-name" label="First name" variant="outlined" />
          <MuiTextField id="last-name" label="Last name" variant="outlined" />
          <MuiTextField id="email-address" label="Email Address" variant="outlined" />
          <MuiTextField id="password" label="Password" variant="outlined" />

          <MuiButton sx={{ padding: '0.75em', color: 'text.primary', boxShadow: '0 4px 0 hsl(154, 58%, 44%)' }} variant="contained">
            Claim your free trial
          </MuiButton>

          <MuiBox sx={{ padding: '0 1em' }}>
            <MuiTypography sx={{ color: 'hsl(246, 25%, 77%)', fontWeight: 500 }} align={'center'} variant="body2">
              By clicking the button, you are agreeing to our
              <MuiTypography sx={{ color: 'background.default', marginLeft: '0.25em', fontWeight: 600 }} variant="inherit" component="span">
                Terms and Services
              </MuiTypography>
            </MuiTypography>
          </MuiBox>
        </MuiStack>
      </MuiPaper>
    </MuiBox>
  )
}

export default Form
