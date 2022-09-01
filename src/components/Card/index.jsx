import { Link } from 'react-router-dom'
import MuiBox from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiTypography from '@mui/material/Typography'
import PropTypes from 'prop-types'

import Tag from '@/components/Tag'

const Card = ({ title, descripcion, img, url, languages }) => {
  return (
    <MuiBox>
      <MuiCard sx={{ borderRadius: 4 }} variant="outlined">
        <MuiCardMedia component="img" image={img} />

        <MuiCardContent>
          <MuiBox sx={{ mb: 1 }}>
            {languages.map(({ title, color }) => (
              <Tag key={title} color={color}>
                {title}
              </Tag>
            ))}
          </MuiBox>

          <Link to={url} style={{ textDecoration: 'none' }}>
            <MuiTypography sx={{ color: 'text.primary', fontWeight: 900 }} variant="h6" component="h1" gutterBottom>
              {title}
            </MuiTypography>
          </Link>
          <MuiTypography sx={{ color: 'text.secondary' }} variant="body2" component="p" gutterBottom>
            {descripcion}
          </MuiTypography>
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
  /**
   * Array de elementos de tipo <String>
   */
  languages: PropTypes.array.isRequired,
}
