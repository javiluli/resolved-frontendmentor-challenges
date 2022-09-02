import MuiStack from '@mui/material/Stack'
import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiTypography from '@mui/material/Typography'

const Card = ({ title, text, image, borderColor }) => {
  return (
    <MuiCard
      sx={{
        maxWidth: 320,
        padding: '1.5em',
        borderTop: `4px solid ${borderColor}`,
        borderRadius: '0.25em',
        boxShadow: '0 10px 20px hsla(234, 12%, 34%, 0.15)',
      }}
    >
      <MuiStack direction="column" spacing={4}>
        <MuiCardContent sx={{ padding: 0 }}>
          <MuiTypography sx={{ fontWeight: 600 }} variant="h1" component="h1" gutterBottom>
            {title}
          </MuiTypography>
          <MuiTypography variant="body1" color="text.secondary">
            {text}
          </MuiTypography>
        </MuiCardContent>
        <MuiStack direction="row" justifyContent="flex-end">
          <MuiCardMedia sx={{ maxWidth: '50px' }} component="img" alt="Image" image={image} />
        </MuiStack>
      </MuiStack>
    </MuiCard>
  )
}
export default Card
