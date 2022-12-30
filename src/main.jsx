import ColorContextProvider from '@/context/toggleTheme'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CssBaseline />
    <ColorContextProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </ColorContextProvider>
  </BrowserRouter>
)
