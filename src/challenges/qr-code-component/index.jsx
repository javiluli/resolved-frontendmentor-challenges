import './assets/css/fonts.css'

import { ThemeProvider } from '@mui/material'

import { ChallengeContainer } from './components/layouts/challenge-container'
import { QRCodeCard } from './components/ui/qr-code-card'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChallengeContainer>
        <QRCodeCard />
      </ChallengeContainer>
    </ThemeProvider>
  )
}

export default App
