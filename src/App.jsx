import { Route, Routes } from 'react-router-dom'

// import Challenge from '@/pages/Challenge'
import Home from '@/pages/Home'
import Layout from '@/pages/Layout'
import MuiBox from '@mui/material/Box'

function App() {
  return (
    <MuiBox sx={{ position: 'relative', backgroundColor: 'background.default' }} id="__NEXT">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/challenge/:id" element={<Challenge />} /> */}

          <Route path="/*" element={<Home />} />
        </Route>
      </Routes>
    </MuiBox>
  )
}

export default App
