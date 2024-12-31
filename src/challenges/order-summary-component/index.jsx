import './assets/css/fonts.css'

import { ThemeProvider } from '@mui/material'
import MuiStack from '@mui/material/Stack'

import { OrderSummaryComponent } from './components'
import theme from './themes/theme'

const Index = () => {
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
        <OrderSummaryComponent />
      </MuiStack>
    </ThemeProvider>
  )
}

export default Index
