// Others
import { useState } from 'react'
// Components from challengers
import ComponentAfterSubmit from './ComponentAfterSubmit'
import ComponentBeforeSubmit from './ComponentBeforeSubmit'

const InteractiveRatingComponent = () => {
  const [rating, setRating] = useState(null)

  return <>{!rating ? <ComponentBeforeSubmit onRating={setRating} /> : <ComponentAfterSubmit rating={rating} />}</>
}

export default InteractiveRatingComponent
