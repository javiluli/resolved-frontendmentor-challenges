import MuiBox from '@mui/material/Box'
import MuiDivider from '@mui/material/Divider'
import MuiStack from '@mui/material/Stack'
import MuiSwitch from '@mui/material/Switch'
import MuiTypography from '@mui/material/Typography'

import { setLightMode, useMaterialUIController } from '../../../context'

const Header = () => {
  const [controller, dispatch] = useMaterialUIController()

  const { lightMode } = controller

  const handleLightMode = () => setLightMode(dispatch, !lightMode)

  return (
    <MuiStack direction={{ xs: 'column', sm: 'row' }} justifyContent={{ sm: 'space-between' }} spacing={1}>
      <MuiBox>
        <MuiTypography variant="h5" sx={{ color: 'text.primary', fontWeight: 700 }} gutterBottom>
          Social Media Dashboard
        </MuiTypography>

        <MuiTypography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 700 }} gutterBottom>
          Total Followers: 23.004
        </MuiTypography>
      </MuiBox>

      <MuiDivider sx={{ display: { xs: 'block', sm: 'none' } }} />

      <MuiStack direction="row" justifyContent={{ xs: 'space-between', sm: 'flex-end' }} alignItems="center">
        <MuiTypography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 700 }}>
          {lightMode ? 'Light Mode' : 'Dark Mode'}
        </MuiTypography>

        <MuiSwitch checked={lightMode} onChange={handleLightMode} />
      </MuiStack>
    </MuiStack>
  )
}

export default Header
