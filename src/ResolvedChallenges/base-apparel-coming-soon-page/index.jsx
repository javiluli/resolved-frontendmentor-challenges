// CSS and custom theme
import './styles.css'
import theme from './theme'
// Component from challengers
import BaseApparelComingSoonPage from './components/BaseApparelComingSoonPage'
// Common cmponents
import MainChallengeContainer from '@/components/MainChallengeContainer'

const Index = () => {
  return (
    <MainChallengeContainer theme={theme}>
      <BaseApparelComingSoonPage />
    </MainChallengeContainer>
  )
}

export default Index
