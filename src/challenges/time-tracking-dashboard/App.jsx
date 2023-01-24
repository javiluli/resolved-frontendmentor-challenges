import { ThemeProvider } from '@mui/material'
import MuiStack from '@mui/material/Stack'

import { TimeTrackingDashboard } from './components'
import { theme } from './themes'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiStack
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
        }}
      >
        <TimeTrackingDashboard />
      </MuiStack>
    </ThemeProvider>
  )
}

export default App
