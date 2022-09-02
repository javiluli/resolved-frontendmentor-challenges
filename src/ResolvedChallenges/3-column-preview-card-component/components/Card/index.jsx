import PropTypes from 'prop-types'
// MUI
import MuiCard from '@mui/material/Card'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiButton from '@mui/material/Button'
import MuiTypography from '@mui/material/Typography'

const Card = ({ icon, title, paragraph, color }) => {
  return (
    <MuiCard
      sx={{
        maxWidth: 280,
        padding: '2em',
        backgroundColor: color,
        borderRadius: 0,
      }}
    >
      <MuiCardMedia component="img" sx={{ width: 100 }} image={icon} alt="image" />
      <MuiCardContent>
        <MuiTypography gutterBottom variant="body1" component="h1">
          {title}
        </MuiTypography>
        <MuiTypography variant="body2" color="text.secondary">
          {paragraph}
        </MuiTypography>
      </MuiCardContent>
      <MuiCardActions>
        <MuiButton sx={{ color: color }}>Learn More</MuiButton>
      </MuiCardActions>
    </MuiCard>
  )
}

export default Card

Card.propTypes = {
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
