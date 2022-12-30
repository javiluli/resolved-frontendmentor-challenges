import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

const CardFeature = ({ title, text, image, borderColor }) => {
  return (
    <MuiCard
      elevation={1}
      sx={{
        maxWidth: 320,
        padding: 2,
        borderTop: `4px solid ${borderColor}`,
        borderRadius: '0.25em',
      }}
    >
      <MuiStack direction="column" spacing={4}>
        <MuiCardContent sx={{ padding: 0 }}>
          <MuiTypography variant="h6" component="h1" sx={{ fontWeight: 600 }}>
            {title}
          </MuiTypography>
          <MuiTypography variant="caption" color="text.secondary">
            {text}
          </MuiTypography>
        </MuiCardContent>
        <MuiStack direction="row" justifyContent="flex-end">
          <MuiCardMedia sx={{ maxWidth: 50 }} component="img" alt="Image" image={image} />
        </MuiStack>
      </MuiStack>
    </MuiCard>
  )
}
export default CardFeature
