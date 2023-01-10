import MuiBox from '@mui/material/Box'
import MuiContainer from '@mui/material/Container'
import MuiStack from '@mui/material/Stack'

import { Header } from './Header'
import { PrimarySection } from './PrimarySection'
import { SecondarySection } from './SecondarySection'

const SocialMediaDashboardWithThemeSwitcherMaster = () => {
  return (
    <MuiContainer sx={{ maxWidth: { xl: 'lg' }, my: 4 }}>
      <MuiStack sx={{ width: '100%' }} spacing={4}>
        <MuiBox>
          <Header />
        </MuiBox>

        <MuiBox>
          <PrimarySection />
        </MuiBox>

        <MuiBox>
          <SecondarySection />
        </MuiBox>
      </MuiStack>
    </MuiContainer>
  )
}

export default SocialMediaDashboardWithThemeSwitcherMaster
