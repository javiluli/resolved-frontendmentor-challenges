// React
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// MUI
import MuiBox from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiGrid from '@mui/material/Grid'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
// Components
import DifficultyTag from './DifficultyTag'
import ListOfLanguagesTag from './ListOfLanguagesTag'

const Card = ({ title, subtitle, img, url, languages, difficulty }) => {
  return (
    <MuiBox>
      <MuiCard sx={{ borderRadius: 4 }} variant="outlined">
        <MuiCardMedia component="img" image={img} />

        <MuiCardContent>
          <MuiGrid container justifyContent="space-between" spacing={2}>
            <MuiGrid item>
              <MuiBox sx={{ mb: 1 }}>
                <MuiStack direction="row" justifyContent="space-between" spacing={1}>
                  <ListOfLanguagesTag languages={languages} />
                </MuiStack>
              </MuiBox>
            </MuiGrid>

            <MuiGrid item>
              <MuiBox sx={{ mb: 1 }}>
                <DifficultyTag difficulty={difficulty} />
              </MuiBox>
            </MuiGrid>
          </MuiGrid>

          <Link to={url} style={{ textDecoration: 'none' }}>
            <MuiTypography sx={{ color: 'text.primary', fontWeight: 900 }} variant="h6" component="h1" gutterBottom>
              {title}
            </MuiTypography>
          </Link>
          <MuiTypography sx={{ color: 'text.secondary' }} variant="body2" component="p" gutterBottom>
            {subtitle}
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
  subtitle: PropTypes.string.isRequired,
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
