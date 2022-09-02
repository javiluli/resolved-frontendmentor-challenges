// MUI
import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'
// MUI Hooks
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
// Components section
import Header from './Header'
import Banner from './Banner'
import Body from './Body'
import Form from './Form'

import bgPattern from '../../images/bg-pattern-desktop.svg'

const BaseApparelComingSoonPage = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <MuiBox
      sx={{
        minWidth: '100%',
        height: '100vh',
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <MuiBox>
        <MuiStack direction={matches ? 'row' : 'column'} justifyContent="space-between">
          <MuiStack spacing={4} justifyContent="center">
            <Header />

            {!matches && <Banner />}

            <MuiStack
              sx={{
                maxWidth: 420,
                margin: matches ? '0 15em !important' : '0 2em !important',
              }}
              spacing={4}
            >
              <Body />
              <Form />
            </MuiStack>
          </MuiStack>

          {matches && (
            <MuiBox>
              <Banner />
            </MuiBox>
          )}
        </MuiStack>
      </MuiBox>
    </MuiBox>
  )
}

export default BaseApparelComingSoonPage
