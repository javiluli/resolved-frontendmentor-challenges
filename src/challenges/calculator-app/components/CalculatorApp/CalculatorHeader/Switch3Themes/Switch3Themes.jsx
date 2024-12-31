import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'
import MuiTab from '@mui/material/Tab'
import MuiTabs from '@mui/material/Tabs'
import MuiTypography from '@mui/material/Typography'

import { setTheme, useMaterialUIController } from '../../../../context'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Switch3Themes = () => {
  const [controller, dispatch] = useMaterialUIController()
  const { theme } = controller

  const handleTheme = (reult) => setTheme(dispatch, reult)

  const handleChangeTheme = (event, newValue) => {
    handleTheme(newValue)
  }

  return (
    <MuiStack direction="row" justifyContent="center" alignItems="flex-end" spacing={1}>
      <MuiTypography variant="caption" component="span" sx={{ color: theme === 0 ? 'text.secondary' : 'text.primary', letterSpacing: 2 }}>
        THEME
      </MuiTypography>

      <MuiBox>
        <MuiStack justifyContent="space-around" direction="row" sx={{ width: '100%' }}>
          <MuiTypography variant="caption" component="span" sx={{ color: theme === 0 ? 'text.secondary' : 'text.primary' }}>
            1
          </MuiTypography>
          <MuiTypography variant="caption" component="span" sx={{ color: theme === 0 ? 'text.secondary' : 'text.primary' }}>
            2
          </MuiTypography>
          <MuiTypography variant="caption" component="span" sx={{ color: theme === 0 ? 'text.secondary' : 'text.primary' }}>
            3
          </MuiTypography>
        </MuiStack>
        <MuiTabs value={theme} onChange={handleChangeTheme} aria-label="basic tabs example" indicatorColor="secondary">
          <MuiTab {...a11yProps(0)} />
          <MuiTab {...a11yProps(1)} />
          <MuiTab {...a11yProps(2)} />
        </MuiTabs>
      </MuiBox>
    </MuiStack>
  )
}

export default Switch3Themes
