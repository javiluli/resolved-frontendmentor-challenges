// CSS and custom theme
import './styles.css'
import theme from './theme'
// Component from challengers
import { SocialProofSection } from './components'
// Common cmponents
import MainChallengeContainer from '@/components/MainChallengeContainer'

const Index = () => {
  return (
    <MainChallengeContainer theme={theme}>
      <SocialProofSection />
    </MainChallengeContainer>
  )
}

export default Index
