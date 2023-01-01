import { ThemeProvider } from '@mui/material'
import MuiStack from '@mui/material/Stack'

import './assets/css/fonts.css'
import { IntroComponentWithSignUpForm } from './components'
import theme from './themes/theme'

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiStack
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
        }}
      >
        <IntroComponentWithSignUpForm />
      </MuiStack>
    </ThemeProvider>
  )
}

export default Index
