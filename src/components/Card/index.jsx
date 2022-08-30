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
      <MuiCard variant="outlined">
        <MuiCardMedia component="img" image={img} />

        <MuiCardContent>
          <Link to={url} style={{ textDecoration: 'none' }}>
            <MuiTypography sx={{ color: 'text.primary' }} variant="h5" component="div" gutterBottom>
              {title}
            </MuiTypography>
          </Link>
          <MuiTypography gutterBottom>{descripcion}</MuiTypography>
        </MuiCardContent>
      </MuiCard>
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
