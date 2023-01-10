import CssBaseline from '@mui/material/CssBaseline'

import App from './App'
import './assets/css/fonts.css'
import { MaterialUIControllerProvider } from './context'

const Index = () => {
  return (
    <MaterialUIControllerProvider>
      <CssBaseline />
      <App />
    </MaterialUIControllerProvider>
  )
}

export default Index
