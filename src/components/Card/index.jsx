import { Link } from 'react-router-dom'
import MuiBox from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiTypography from '@mui/material/Typography'
import PropTypes from 'prop-types'

const Card = ({ title, descripcion, img, url }) => {
  return (
    <MuiBox>
      <Link to={url} target="_blank" style={{ textDecoration: 'none' }}>
        <MuiCard sx={{ boxShadow: '0 0 20px hsla(0, 0%, 0%, 0.1)' }}>
          <MuiCardMedia component="img" image={img} />

          <MuiCardContent>
            <MuiTypography gutterBottom variant="h5" component="div">
              {title}
            </MuiTypography>

            <MuiTypography gutterBottom>{descripcion}</MuiTypography>
          </MuiCardContent>
        </MuiCard>
      </Link>
    </MuiBox>
  )
}

export default Card

Card.propTypes = {
  /**
   * Titulo principal del componente
   */
  title: PropTypes.string.isRequired,
  /**
   * Breve descicion que acompoña al titulo
   */
  descripcion: PropTypes.string.isRequired,
  /**
   * Imagen de la cabecera
   */
  img: PropTypes.string.isRequired,
  /**
   * Link
   */
  url: PropTypes.string.isRequired,
}
