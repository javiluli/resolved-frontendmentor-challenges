// CSS and custom theme
import './styles.css'
import theme from './theme'
// Others
import { useState } from 'react'
// Component from challengers
import { InteractiveRatingComponent } from './components'
// Common cmponents
import MainChallengeContainer from '@/components/MainChallengeContainer'

const Index = () => {
  const [rating, setRating] = useState(null)

  return (
    <MainChallengeContainer theme={theme}>
      <InteractiveRatingComponent />
    </MainChallengeContainer>
  )
}

export default Index
