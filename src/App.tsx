import { Route, Routes } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'
import MuiBox from '@mui/material/Box'

import { ChallengePage } from '@/pages/challenge'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'

import { theme } from '@/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiBox sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/c/:challengeSlug/*" element={<ChallengePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MuiBox>
    </ThemeProvider>
  )
}

export default App
