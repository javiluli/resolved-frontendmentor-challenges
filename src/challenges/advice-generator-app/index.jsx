import './assets/css/fonts.css'

import { AdviceGeneratorApp } from './components'
import MuiStack from '@mui/material/Stack'
import { ThemeProvider } from '@mui/material'
import theme from './themes/theme'

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiStack
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: 'background.default',
        }}
      >
        <AdviceGeneratorApp />
      </MuiStack>
    </ThemeProvider>
  )
}

export default Index
