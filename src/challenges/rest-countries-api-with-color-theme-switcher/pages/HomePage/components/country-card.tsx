import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import MuiCard from '@mui/material/Card'
import MuiCardActionArea from '@mui/material/CardActionArea'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiTypography from '@mui/material/Typography'

import { InfoTypography } from '../../../components/ui/info-typography'
import { agregarComas } from '../../../utility'

interface CountryCardProps {
  image: string
  name: string
  population: number
  region: string
  capital?: string
}

export function CountryCard({ image, name, population, region, capital }: CountryCardProps) {
  return (
    <MuiCard elevation={1}>
      <MuiCardActionArea component={Link} to={`${name}`} aria-label={`View challenge ${name}`}>
        <MuiCardMedia component="img" image={image} alt={`Challenge ${name}`} />
      </MuiCardActionArea>

      <MuiCardContent>
        <MuiTypography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
          {name}
        </MuiTypography>
        <InfoTypography label="Population" value={agregarComas(population)} />
        <InfoTypography label="Region" value={region} />
        {capital && <InfoTypography label="Capital" value={capital} />}
      </MuiCardContent>
    </MuiCard>
  )
}

// Definición de propTypes
CountryCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
}
