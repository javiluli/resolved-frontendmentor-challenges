import { ThemeProvider } from '@mui/material'
import MuiStack from '@mui/material/Stack'

import './assets/css/fonts.css'
import { ProductPreviewCardComponent } from './components'
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
        <ProductPreviewCardComponent />
      </MuiStack>
    </ThemeProvider>
  )
}

export default Index
