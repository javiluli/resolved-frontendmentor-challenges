import MuiRestoreIcon from '@mui/icons-material/Restore'
import MuiCard from '@mui/material/Card'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiChip from '@mui/material/Chip'
import MuiIconButton from '@mui/material/IconButton'
import MuiTypography from '@mui/material/Typography'

import imageIllustrationThankYou from '../../../assets/images/illustration-thank-you.svg'

const ComponentAfterSubmit = ({ rating, onRating }) => {
  return (
    <MuiCard
      sx={{
        width: 350,
        padding: '1em',
        borderRadius: '1em',
      }}
    >
      <MuiCardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2em' }}>
        <MuiCardMedia sx={{ width: 150 }} component="img" image={imageIllustrationThankYou} />
        <MuiChip sx={{ color: 'primary.main', backgroundColor: 'hsl(215, 18%, 18%)' }} label={`You selected ${rating} out of 5`} />
      </MuiCardContent>

      <MuiCardContent sx={{ padding: '0.5em' }}>
        <MuiTypography variant="h5" component="h1" align="center">
          Thank you!
        </MuiTypography>
        <MuiTypography variant="body2" color="text.secondary" align="center">
          We appreciate you taking the time to give a rating. if you need more support, don't hesitate to get in touch!
        </MuiTypography>
      </MuiCardContent>

      <MuiCardActions disableSpacing>
        <MuiIconButton aria-label="reset vote" sx={{ margin: '0 auto' }} onClick={() => onRating(null)}>
          <MuiRestoreIcon color="primary" sx={{ height: 40, width: 40 }} />
        </MuiIconButton>
      </MuiCardActions>
    </MuiCard>
  )
}

export default ComponentAfterSubmit
