// CSS and custom theme
import './styles.css'
import theme from './theme'
// Component from challengers
import SinglePriceGridComponent from './components/SinglePriceGridComponent'
// Common cmponents
import MainChallengeContainer from '@/components/MainChallengeContainer'

const Index = () => {
  return (
    <MainChallengeContainer theme={theme}>
      <SinglePriceGridComponent />
    </MainChallengeContainer>
  )
}

export default Index
