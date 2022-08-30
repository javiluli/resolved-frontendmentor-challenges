import { Route, Routes } from 'react-router-dom'
import { Box as MuiBox } from '@mui/material'

import Layout from '@/pages/Layout'
import Home from '@/pages/Home'
import Challenge from '@/pages/Challenge'

function App() {
  return (
    <MuiBox sx={{ position: 'relative', backgroundColor: 'background.default' }} id="__NEXT">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/challenge/:id" element={<Challenge />} />

          <Route path="/*" element={<Home />} />
        </Route>
      </Routes>
    </MuiBox>
  )
}

export default App
