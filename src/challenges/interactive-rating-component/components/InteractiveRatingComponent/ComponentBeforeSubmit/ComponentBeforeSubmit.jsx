import { useState } from 'react'

import MuiStarRoundedIcon from '@mui/icons-material/StarRounded'
import MuiButton from '@mui/material/Button'
import MuiCard from '@mui/material/Card'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardContent from '@mui/material/CardContent'
import MuiRating from '@mui/material/Rating'
import MuiTypography from '@mui/material/Typography'

const ComponentBeforeSubmit = ({ onRating }) => {
  const [value, setValue] = useState(2)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  return (
    <MuiCard
      sx={{
        width: 350,
        padding: '1em',
        borderRadius: '1em',
      }}
    >
      <MuiCardContent sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
        <MuiStarRoundedIcon
          sx={{
            padding: 0.75,
            fontSize: '2.5em',
            color: 'primary.main',
            backgroundColor: 'hsl(215, 18%, 18%)',
            borderRadius: '100%',
          }}
        />
        <MuiTypography variant="h5" component="h1">
          How did we do?
        </MuiTypography>
        <MuiTypography variant="body2" color="text.secondary">
          Please let us know we did with youe support request. All feedback is appreciated to help us improve our offwring!
        </MuiTypography>
      </MuiCardContent>

      <MuiCardActions sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
        <MuiRating
          sx={{ fontSize: '2.5em' }}
          name="rating-pick"
          value={value}
          defaultValue={value}
          max={5}
          onChange={handleChange}
          icon={<MuiStarRoundedIcon style={{ margin: '0 0.30em' }} fontSize="2.5em" />}
          emptyIcon={<MuiStarRoundedIcon style={{ margin: '0 0.30em' }} fontSize="2.5em" />}
        />

        <MuiButton role="submitbutton" onClick={() => onRating(value)}>
          Submit
        </MuiButton>
      </MuiCardActions>
    </MuiCard>
  )
}

export default ComponentBeforeSubmit
