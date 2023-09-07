import { All, Challenge, Home } from '@/pages'
import Layout from '@/pages/Layout'
import { Box as MuiBox } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'
import theme from './themes/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiBox sx={{ position: 'relative', backgroundColor: 'background.default' }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/c/:id" element={<Challenge />} />
            <Route path="/all" element={<All />} />

            <Route path="/*" element={<Home />} />
          </Route>
        </Routes>
      </MuiBox>
    </ThemeProvider>
  )
}

export default App
