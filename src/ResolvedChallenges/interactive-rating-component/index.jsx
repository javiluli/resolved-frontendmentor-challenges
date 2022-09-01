// CSS and custom theme
import './styles.css'
import theme from './theme'
// Others
import { useState } from 'react'
// Component from challengers
import ComponentAfterSubmit from './components/ComponentAfterSubmit'
import ComponentBeforeSubmit from './components/ComponentBeforeSubmit'
// Common cmponents
import MainChallengeContainer from '@/components/MainChallengeContainer'

const Index = () => {
  const [rating, setRating] = useState(null)

  return (
    <MainChallengeContainer theme={theme}>
      {!rating ? <ComponentBeforeSubmit onRating={setRating} /> : <ComponentAfterSubmit rating={rating} />}
    </MainChallengeContainer>
  )
}

export default Index
