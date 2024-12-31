import { useState } from 'react'

import MuiBox from '@mui/material/Box'

import { ComponentAfterSubmit } from './ComponentAfterSubmit'
import { ComponentBeforeSubmit } from './ComponentBeforeSubmit'

const InteractiveRatingComponent = () => {
  const [rating, setRating] = useState(null)

  return (
    <MuiBox sx={{ m: 4 }}>
      {!rating ? <ComponentBeforeSubmit onRating={setRating} /> : <ComponentAfterSubmit rating={rating} onRating={setRating} />}
    </MuiBox>
  )
}

export default InteractiveRatingComponent
