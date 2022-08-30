import MuiStack from '@mui/material/Stack'
import { ThemeProvider } from '@mui/material'

const MainChallengeContainer = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiStack
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '100%',
          minHeight: '100vh',
          backgroundColor: 'background.default',
        }}
      >
        {children}
      </MuiStack>
    </ThemeProvider>
  )
}

export default MainChallengeContainer
