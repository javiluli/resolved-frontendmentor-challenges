// CSS and custom theme
import './styles.css'
import theme from './theme'
// Component from challengers
import ProductPreviewCardComponent from './components/ProductPreviewCardComponent'
// Common cmponents
import MainChallengeContainer from '@/components/MainChallengeContainer'

const Index = () => {
  return (
    <MainChallengeContainer theme={theme}>
      <ProductPreviewCardComponent />
    </MainChallengeContainer>
  )
}

export default Index
