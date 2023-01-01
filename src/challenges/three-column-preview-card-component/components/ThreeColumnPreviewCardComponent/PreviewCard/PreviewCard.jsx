import MuiButton from '@mui/material/Button'
import MuiCard from '@mui/material/Card'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiTypography from '@mui/material/Typography'
import PropTypes from 'prop-types'

const PreviewCard = ({ icon, title, paragraph, color }) => {
  return (
    <MuiCard
      sx={{
        maxWidth: 270,
        padding: '2em',
        backgroundColor: color,
        borderRadius: 0,
      }}
    >
      <MuiCardMedia component="img" image={icon} alt="image" sx={{ width: 60 }} />
      <MuiCardContent>
        <MuiTypography gutterBottom variant="h4" component="h1" sx={{ fontFamily: 'Big Shoulders Display' }}>
          {title}
        </MuiTypography>
        <MuiTypography variant="caption" color="text.secondary">
          {paragraph}
        </MuiTypography>
      </MuiCardContent>
      <MuiCardActions>
        <MuiButton sx={{ color: color }}>Learn More</MuiButton>
      </MuiCardActions>
    </MuiCard>
  )
}

export default PreviewCard

PreviewCard.propTypes = {
  /**
   * Icono en la cabecera
   */
  icon: PropTypes.string,
  /**
   * Titulo principal
   */
  title: PropTypes.string,
  /**
   * Parrafo principal
   */
  paragraph: PropTypes.string,
  /**
   * color principal de fondo y letras del boton
   */
  color: PropTypes.string,
}
