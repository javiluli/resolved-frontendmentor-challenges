import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiChip from '@mui/material/Chip'
import MuiTypography from '@mui/material/Typography'
import img__illustrationThankYou from '../../images/illustration-thank-you.svg'

const ComponentAfterSubmit = ({ rating }) => {
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
      <MuiCardContent
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2em', padding: '0.5em' }}
      >
        <MuiCardMedia sx={{ width: 151 }} component="img" image={img__illustrationThankYou} />
        <MuiChip
          sx={{ color: 'primary.main', backgroundColor: 'hsl(215, 18%, 18%)' }}
          label={`You selected ${rating} out of 5`}
        />
      </MuiCardContent>

      <MuiCardContent sx={{ padding: '0.5em' }}>
        <MuiTypography sx={{ textAlign: 'center' }} variant="body1" color="text.primary">
          Thank you!
        </MuiTypography>
        <MuiTypography sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
          We appreciate you taking the time to give a rating. if you need more support, don't hesitate to get in touch!
        </MuiTypography>
      </MuiCardContent>
    </MuiCard>
  )
}

export default ComponentAfterSubmit
