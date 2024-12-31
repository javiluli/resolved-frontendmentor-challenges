import './assets/css/fonts.css'

import { ThemeProvider } from '@mui/material'

import { ContainerChallege, InteractiveRatingComponent } from './components'
import theme from './themes/theme'

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContainerChallege>
        <InteractiveRatingComponent />
      </ContainerChallege>
    </ThemeProvider>
  )
}

export default Index
