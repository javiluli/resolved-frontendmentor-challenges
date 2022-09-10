// CSS and custom theme
import './styles.css'
import theme from './theme'
// Component from challengers
import { ProfileCardComponent } from './components'
// Common cmponents
import MainChallengeContainer from '@/components/MainChallengeContainer'

const Index = () => {
  return (
    <MainChallengeContainer theme={theme}>
      <ProfileCardComponent />
    </MainChallengeContainer>
  )
}

export default Index
