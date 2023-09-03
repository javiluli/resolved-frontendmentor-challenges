import { ThemeProvider } from '@mui/material'
import MuiStack from '@mui/material/Stack'

import { CalculatorApp } from './components'
import { useMaterialUIController } from './context'
import { theme1, theme2, theme3 } from './themes'

const App = () => {
  const [controller] = useMaterialUIController()
  const { theme } = controller

  let changeTheme = theme1

  if (theme === 0) changeTheme = theme1
  else if (theme === 1) changeTheme = theme2
  else if (theme === 2) changeTheme = theme3
  else changeTheme = theme1

  return (
    <ThemeProvider theme={changeTheme}>
      <MuiStack
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.main',
        }}
      >
        <CalculatorApp />
      </MuiStack>
    </ThemeProvider>
  )
}

export default App
