// Others
import { useState } from 'react'
// MUI
import MuiButton from '@mui/material/Button'
import MuiCard from '@mui/material/Card'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardContent from '@mui/material/CardContent'
import MuiRating from '@mui/material/Rating'
import MuiTypography from '@mui/material/Typography'
// MUI icons
import StarRoundedIcon from '@mui/icons-material/StarRounded'

const ComponentBeforeSubmit = ({ onRating }) => {
  const [value, setValue] = useState(2)

  return (
    <MuiCard
      sx={{
        width: 350,
        padding: '0.25em',
        backgroundColor: 'background.paper',
        borderRadius: '0.75em',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <MuiCardContent sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
        <StarRoundedIcon
          sx={{
            padding: 1,
            fontSize: '2.5em',
            color: 'primary.main',
            backgroundColor: 'hsl(215, 18%, 18%)',
            borderRadius: '100%',
          }}
        />
        <MuiTypography variant="body1" color="text.primary">
          How did we do?
        </MuiTypography>
        <MuiTypography variant="body2" color="text.secondary">
          Please let us know we did with youe support request. All feedback is appreciated to help us improve our offwring!
        </MuiTypography>

        <MuiCardActions sx={{ display: 'flex', flexDirection: 'column', gap: '1em', padding: 0 }}>
          <MuiRating
            sx={{ fontSize: '2.5em' }}
            name="rating"
            value={value}
            onChange={(e, newValue) => {
              setValue(newValue)
            }}
            icon={<StarRoundedIcon style={{ margin: '0 0.30em' }} fontSize="2.5em" />}
            emptyIcon={<StarRoundedIcon style={{ margin: '0 0.30em' }} fontSize="2.5em" />}
          />

          <MuiButton onClick={() => onRating(value)}>Submit</MuiButton>
        </MuiCardActions>
      </MuiCardContent>
    </MuiCard>
  )
}

export default ComponentBeforeSubmit
