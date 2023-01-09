import CssBaseline from '@mui/material/CssBaseline'
import MuiStack from '@mui/material/Stack'

import './assets/css/fonts.css'
import { SocialMediaDashboardWithThemeSwitcherMaster } from './components'
import { MaterialUIControllerProvider } from './context'

const Index = () => {
  return (
    <MaterialUIControllerProvider>
      <CssBaseline />
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
    </MaterialUIControllerProvider>
  )
}

export default Index
