import { ThemeProvider } from '@mui/material'
import MuiStack from '@mui/material/Stack'

import { AgeCalculatorApp } from './components'
import { theme } from './themes'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiStack
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: 'background.default',
        }}
      >
        <AgeCalculatorApp />
      </MuiStack>
    </ThemeProvider>
  )
}

export default App
