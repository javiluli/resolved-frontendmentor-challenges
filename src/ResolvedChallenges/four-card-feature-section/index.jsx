// CSS and custom theme
import './styles.css'
import theme from './theme'
// Component from challengers
import { FourCardFeatureSection } from './components'
// Common cmponents
import MainChallengeContainer from '@/components/MainChallengeContainer'

const Index = () => {
  return (
    <MainChallengeContainer theme={theme}>
      <FourCardFeatureSection />
    </MainChallengeContainer>
  )
}

export default Index
