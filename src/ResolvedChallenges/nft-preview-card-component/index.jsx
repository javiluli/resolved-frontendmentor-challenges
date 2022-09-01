// CSS and custom theme
import './styles.css'
import theme from './theme'
// Component from challengers
import NTFPreviewCardComponent from './components/NTFPreviewCardComponent'
// Common cmponents
import MainChallengeContainer from '@/components/MainChallengeContainer'

const Index = () => {
  return (
    <MainChallengeContainer theme={theme}>
      <NTFPreviewCardComponent />
    </MainChallengeContainer>
  )
}

export default Index
