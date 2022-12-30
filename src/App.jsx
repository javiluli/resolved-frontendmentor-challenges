import { All, Challenge, Home } from '@/pages'
import Layout from '@/pages/Layout'
import { Box as MuiBox } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
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
  )
}

export default App
