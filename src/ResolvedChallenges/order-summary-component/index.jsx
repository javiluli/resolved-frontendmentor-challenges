// CSS and custom theme
import './styles.css'
import theme from './theme'
// Component from challengers
import OrderSummaryComponent from './components/OrderSummaryComponent'
// Common cmponents
import MainChallengeContainer from '@/components/MainChallengeContainer'

const Index = () => {
  return (
    <MainChallengeContainer theme={theme}>
      <OrderSummaryComponent />
    </MainChallengeContainer>
  )
}

export default Index
