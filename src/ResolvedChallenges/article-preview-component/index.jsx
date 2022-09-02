// CSS and custom theme
import './styles.css'
import theme from './theme'
// Component from challengers
import ArticlePreviewComponent from './components/ArticlePreviewComponent'
// Common cmponents
import MainChallengeContainer from '@/components/MainChallengeContainer'

const Index = () => {
  return (
    <MainChallengeContainer theme={theme}>
      <ArticlePreviewComponent />
    </MainChallengeContainer>
  )
}

export default Index
