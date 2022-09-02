// CSS and custom theme
import './styles.css'
import theme from './theme'
// Component from challengers
import Card from './components/Card'
// Common cmponents
import MainChallengeContainer from '@/components/MainChallengeContainer'

const Index = () => {
  return (
    <MainChallengeContainer theme={theme}>
      <Card />
    </MainChallengeContainer>
  )
}

export default Index
