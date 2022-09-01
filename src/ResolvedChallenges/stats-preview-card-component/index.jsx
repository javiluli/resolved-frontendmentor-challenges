// CSS and custom theme
import './styles.css'
import theme from './theme'
// Component from challengers
import StatsPreviewCardComponent from './components/StatsPreviewCardComponent'
// Common cmponents
import MainChallengeContainer from '@/components/MainChallengeContainer'

const Index = () => {
  return (
    <MainChallengeContainer theme={theme}>
      <StatsPreviewCardComponent />
    </MainChallengeContainer>
  )
}

export default Index
