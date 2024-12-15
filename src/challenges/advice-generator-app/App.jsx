import './assets/css/fonts.css'
import { ThemeProvider } from '@mui/material'

import { ChallengeContainer } from './components/layouts/challenge-container'

import { theme } from './themes'
import { AdviceGeneratorApp } from './components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChallengeContainer>
        <AdviceGeneratorApp />
      </ChallengeContainer>
    </ThemeProvider>
  )
}

export default App
