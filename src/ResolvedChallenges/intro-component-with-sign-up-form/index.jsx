// CSS and custom theme
import './styles.css'
import theme from './theme'
// Component from challengers
import IntroComponentWithSignUpForm from './components/IntroComponentWithSignUpForm'
// Common cmponents
import MainChallengeContainer from '@/components/MainChallengeContainer'

const Index = () => {
  return (
    <MainChallengeContainer theme={theme}>
      <IntroComponentWithSignUpForm />
    </MainChallengeContainer>
  )
}

export default Index
