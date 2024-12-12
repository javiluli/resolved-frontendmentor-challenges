import './assets/css/fonts.css'
import { ThemeProvider } from '@mui/material'

import { ChallengeContainer } from './components/layouts/challenge-container'
import { Card } from './components/ui/card'

import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChallengeContainer>
        <Card />
      </ChallengeContainer>
    </ThemeProvider>
  )
}

export default App
