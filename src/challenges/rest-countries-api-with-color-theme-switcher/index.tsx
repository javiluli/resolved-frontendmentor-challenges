import './assets/css/fonts.css'

import App from './App'
import { MaterialUIControllerProvider } from './context'

const IndexApp = () => {
  return (
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  )
}

export default IndexApp
