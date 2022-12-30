import { useState } from 'react'

import { ComponentAfterSubmit } from './ComponentAfterSubmit'
import { ComponentBeforeSubmit } from './ComponentBeforeSubmit'

const InteractiveRatingComponent = () => {
  const [rating, setRating] = useState(null)

  return <>{!rating ? <ComponentBeforeSubmit onRating={setRating} /> : <ComponentAfterSubmit rating={rating} onRating={setRating} />}</>
}

export default InteractiveRatingComponent
