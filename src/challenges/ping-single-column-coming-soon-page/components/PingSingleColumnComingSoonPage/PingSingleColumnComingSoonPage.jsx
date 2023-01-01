import MuiFacebookIcon from '@mui/icons-material/Facebook'
import MuiInstagramIcon from '@mui/icons-material/Instagram'
import MuiTwitterIcon from '@mui/icons-material/Twitter'
import MuiBox from '@mui/material/Box'
import MuiButton from '@mui/material/Button'
import MuiGrid from '@mui/material/Grid'
import MuiIconButton from '@mui/material/IconButton'
import MuiStack from '@mui/material/Stack'
import MuiTextField from '@mui/material/TextField'
import MuiTypography from '@mui/material/Typography'
import { useState } from 'react'

import imgIllustrationDashboard from '../../assets/images/illustration-dashboard.png'
import imgLogo from '../../assets/images/logo.svg'

const PingSingleColumnComingSoonPage = () => {
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
    <MuiBox sx={{ backgroundColor: 'background.primary' }}>
      <MuiStack justifyContent="center" alignItems="center" sx={{ px: 2, py: 3 }}>
        <MuiBox sx={{ minWidth: 260, maxWidth: 600 }}>
          <MuiStack spacing={2}>
            <MuiBox src={imgLogo} component="img" alt="Image logo" sx={{ maxWidth: 80, margin: '0 auto 1.5em' }} />

            <MuiStack spacing={6}>
              <MuiBox>
                <MuiTypography variant="h3" component="h2" align="center" color="grey.500" gutterBottom>
                  We are launching
                  <MuiTypography variant="h3" component="span" color="grey.900" sx={{ ml: 1, fontWeight: 700 }}>
                    soon!
                  </MuiTypography>
                </MuiTypography>

                <MuiTypography variant="h6" align="center" color="grey.800" gutterBottom>
                  Subscribe and get notified
                </MuiTypography>
              </MuiBox>

              <MuiGrid container gap={2}>
                <MuiGrid item xs={12} md>
                  <MuiTextField placeholder="Your emaail address..." onChange={handleChange} helperText={error} error={!!error} fullWidth />
                </MuiGrid>
                <MuiGrid item xs={12} md="auto">
                  <MuiButton variant="contained" fullWidth onClick={handleClick}>
                    Notify Me
                  </MuiButton>
                </MuiGrid>
              </MuiGrid>

              <MuiBox src={imgIllustrationDashboard} component="img" alt="Image" sx={{ width: '100%' }} />
            </MuiStack>

            <MuiStack direction="row" justifyContent="center" spacing={3}>
              <MuiIconButton aria-label="Facebook" sx={{ border: '1px solid hsla(0, 0%, 0%, 0.1)' }}>
                <MuiFacebookIcon color="primary" fontSize="small" />
              </MuiIconButton>

              <MuiIconButton aria-label="Twitter" sx={{ border: '1px solid hsla(0, 0%, 0%, 0.1)' }}>
                <MuiTwitterIcon color="primary" />
              </MuiIconButton>

              <MuiIconButton aria-label="Instagram" sx={{ border: '1px solid hsla(0, 0%, 0%, 0.1)' }}>
                <MuiInstagramIcon color="primary" />
              </MuiIconButton>
            </MuiStack>

            <MuiTypography variant="body2" align="center" color="grey.500">
              &copy; Copyright Ping. All rights reserved.
            </MuiTypography>
          </MuiStack>
        </MuiBox>
      </MuiStack>
    </MuiBox>
  )
}

export default PingSingleColumnComingSoonPage
