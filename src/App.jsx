import { Challenge, Home, Page404 } from '@@/pages'
import { ThemeProvider } from '@mui/material'
import MuiBox from '@mui/material/Box'
import { Route, Switch } from 'wouter'
import theme from './themes/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiBox sx={{ backgroundColor: 'background.default' }}>
        <Switch>
          <Route path="/" component={Home} />

          <Route path="/c/:id" component={Challenge} />

          <Route path="*" component={Page404} />
        </Switch>
      </MuiBox>
    </ThemeProvider>
  )
}

export default App
