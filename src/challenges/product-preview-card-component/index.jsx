import { ThemeProvider } from '@mui/material'

import './assets/css/fonts.css'
import { theme } from './themes'

import { ProductPreviewCardComponent } from './components'
import { ChallegeContainer } from './layout'

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChallegeContainer>
        <ProductPreviewCardComponent />
      </ChallegeContainer>
    </ThemeProvider>
  )
}

export default Index
