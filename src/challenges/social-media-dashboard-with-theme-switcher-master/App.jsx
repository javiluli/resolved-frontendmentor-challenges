import { ThemeProvider } from '@mui/material'
import MuiStack from '@mui/material/Stack'

import { SocialMediaDashboardWithThemeSwitcherMaster } from './components'
import { useMaterialUIController } from './context'
import { themeDark, themeLight } from './themes'

const App = () => {
  const [controller] = useMaterialUIController()
  const { lightMode } = controller

  return (
    <ThemeProvider theme={lightMode ? themeLight : themeDark}>
      <MuiStack
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
        }}
      >
        <SocialMediaDashboardWithThemeSwitcherMaster />
      </MuiStack>
    </ThemeProvider>
  )
}

export default App
