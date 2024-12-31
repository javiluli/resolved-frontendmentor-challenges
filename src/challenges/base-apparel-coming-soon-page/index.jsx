import './assets/css/fonts.css'

import { ThemeProvider } from '@mui/material'
import MuiStack from '@mui/material/Stack'

import { BaseApparelComingSoonPage } from './components'
import theme from './themes/theme'

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiStack
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: 'background.default',
        }}
      >
        <BaseApparelComingSoonPage />
      </MuiStack>
    </ThemeProvider>
  )
}

export default Index
