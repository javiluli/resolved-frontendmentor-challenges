import MuiBox from '@mui/material/Box'
import MuiDivider from '@mui/material/Divider'
import MuiStack from '@mui/material/Stack'
import MuiSwitch from '@mui/material/Switch'
import MuiTypography from '@mui/material/Typography'
import { useContext } from 'react'

import { MaterialUI } from '../../../context'

const Header = () => {
  const { toggleThemeMode } = useContext(MaterialUI)

  return (
    <MuiStack direction={{ xs: 'column', sm: 'row' }} justifyContent={{ sm: 'space-between' }} spacing={1}>
      <MuiBox>
        <MuiTypography variant="h5" sx={{ color: 'text.primary', fontWeight: 700 }}>
          Social Media Dashboard
        </MuiTypography>

        <MuiTypography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700 }}>
          Total Followers: 23.004
        </MuiTypography>
      </MuiBox>

      <MuiDivider sx={{ display: { xs: 'block', sm: 'none' } }} />

      <MuiStack direction="row" justifyContent={{ xs: 'space-between', sm: 'flex-end' }} alignItems="center">
        <MuiTypography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700 }}>
          Dark Mode
        </MuiTypography>

        <MuiSwitch onClick={toggleThemeMode} />
      </MuiStack>
    </MuiStack>
  )
}

export default Header
