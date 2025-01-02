import MuiDarkModeIcon from '@mui/icons-material/DarkMode'
import MuiDarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { useTheme } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import MuiButton from '@mui/material/Button'
import MuiToolbar from '@mui/material/Toolbar'
import MuiTypography from '@mui/material/Typography'

import { useContextController } from '../../context'

export function Header() {
  const theme = useTheme()
  const { typography } = theme

  const { state, setDarkMode } = useContextController()

  const handleDarkMode = () => {
    setDarkMode(!state.darkMode)
  }

  return (
    <MuiAppBar position="static">
      <MuiToolbar sx={{ display: 'flex', justifyContent: 'space-between', mx: 'auto', width: '100%', maxWidth: 'desktop', minHeight: 90 }}>
        <MuiTypography variant="h5" component="h1" sx={{ fontWeight: typography.fontWeightBold }}>
          Where in the world?
        </MuiTypography>

        <MuiButton onClick={handleDarkMode} startIcon={state.darkMode ? <MuiDarkModeIcon /> : <MuiDarkModeOutlinedIcon />}>
          Dark Mode
        </MuiButton>
      </MuiToolbar>
    </MuiAppBar>
  )
}
