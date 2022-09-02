// Others
import { useState } from 'react'
// MUI
import MuiBox from '@mui/material/Box'
import MuiGrid from '@mui/material/Grid'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import MuiButton from '@mui/material/Button'
import MuiTextField from '@mui/material/TextField'
import MuiIconButton from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
// MUI Hooks
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
// Images
import illustrationDashboard from '../../images/illustration-dashboard.png'
import logo from '../../images/logo.svg'

const BaseApparelComingSoonPage = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  const [value, setValue] = useState('')
  const [error, setError] = useState()
  // regex para validar un email
  const regex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim

  const handleClick = () => {
    if (!regex.test(value)) {
      return setError('Please provider a valid email')
    }
    setError()
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <MuiBox
      sx={{
        minWidth: '100%',
        height: matches ? '100vh' : 'auto',
        backgroundColor: 'background.primary',
      }}
    >
      <MuiStack sx={{ px: 5, py: 2, pt: 0, height: matches ? '100%' : 'auto' }} justifyContent="center">
        <MuiBox sx={{ margin: '0 auto', maxWidth: 700 }}>
          <MuiStack sx={{ width: '100%' }} spacing={2}>
            <MuiBox
              sx={{ width: '100%', maxWidth: 60, display: 'block', margin: '0 auto' }}
              component="img"
              alt="Image"
              src={logo}
            />

            <MuiBox>
              <MuiTypography
                align="center"
                component="h2"
                gutterBottom
                sx={{ mb: 2, color: 'text.primary' }}
                variant="h5"
              >
                We are launching
                <MuiTypography component="span" sx={{ ml: 1, fontWeight: 700, color: 'text.secondary' }} variant="h5">
                  soon!
                </MuiTypography>
              </MuiTypography>

              <MuiTypography
                align="center"
                gutterBottom
                sx={{ fontWeight: 600, color: 'text.primary' }}
                variant="body1"
              >
                Subscribe and get notified
              </MuiTypography>
            </MuiBox>

            <MuiGrid container gap={2}>
              <MuiGrid item xs={12} md>
                <MuiTextField
                  fullWidth
                  id="inpt-email"
                  placeholder="Please provide a valid emaail address"
                  onChange={handleChange}
                  helperText={error}
                  error={!!error}
                />
              </MuiGrid>
              <MuiGrid sx={{ p: 0 }} item xs={12} md="auto">
                <MuiButton variant="contained" fullWidth onClick={handleClick}>
                  Notify Me
                </MuiButton>
              </MuiGrid>
            </MuiGrid>

            <MuiBox sx={{ width: '100%' }} component="img" alt="Image" src={illustrationDashboard} />

            <MuiStack direction="row" justifyContent="center" spacing={3}>
              <MuiIconButton sx={{ border: '1px solid hsla(0, 0%, 0%, 0.1)' }} aria-label="Facebook">
                <FacebookIcon color="primary" fontSize="small" />
              </MuiIconButton>

              <MuiIconButton sx={{ border: '1px solid hsla(0, 0%, 0%, 0.1)' }} aria-label="Twitter">
                <TwitterIcon color="primary" />
              </MuiIconButton>

              <MuiIconButton sx={{ border: '1px solid hsla(0, 0%, 0%, 0.1)' }} aria-label="Instagram">
                <InstagramIcon color="primary" />
              </MuiIconButton>
            </MuiStack>

            <MuiTypography align="center" gutterBottom sx={{ color: 'text.primary' }} variant="body2">
              &copy; Copyright Ping. All rights reserved.
            </MuiTypography>
          </MuiStack>
        </MuiBox>
      </MuiStack>
    </MuiBox>
  )
}

export default BaseApparelComingSoonPage
