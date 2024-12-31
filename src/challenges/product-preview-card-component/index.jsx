import './assets/css/fonts.css'

import { ThemeProvider } from '@mui/material'

import { ProductPreviewCardComponent } from './components'
import { ChallegeContainer } from './layout'
import { theme } from './themes'

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
