import {
  CardActionArea,
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Typography as MuiTypography,
} from '@mui/material'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

/**
 * Card component for displaying challenge data.
 *
 * @param {Object} props - Component props.
 * @param {string} props.id - Challenge ID.
 * @param {string} props.image - URL of the challenge image.
 * @param {string} props.title - Title of the challenge.
 * @param {Object} props.difficulty - Difficulty level of the challenge.
 * @param {Object} props.difficulty.colors - Colors associated with the difficulty level.
 * @param {string} props.difficulty.colors.main - Main color for the difficulty level.
 * @param {string} props.difficulty.colors.opaque - Opaque color for the difficulty level.
 * @returns {JSX.Element} The rendered Card component.
 */
export function ChallengeCard({
  id,
  image,
  title,
  difficulty: { colors },
}: {
  id: string
  image: string
  title: string
  difficulty: { colors: { main: string; transparent: string } }
}): JSX.Element {
  return (
    <MuiCard
      sx={{
        filter: 'grayscale(100%) brightness(80%)',
        transition: 'filter 250ms ease-in-out',

        '&:hover': {
          borderColor: colors.main,
          boxShadow: `0px 25px 50px -10px ${colors.transparent}`,
          filter: 'grayscale(0) brightness(100%)',
        },

        '&:hover .MuiTypography-root': {
          color: 'text.primary',
        },
      }}
    >
      <CardActionArea component={Link} to={`/c/${id}`} target="_blank" aria-label={`View challenge ${id}`}>
        <MuiCardMedia component="img" image={image} alt={`Challenge ${id}`} />

        <MuiCardContent>
          <MuiTypography color="text.secondary">{title}</MuiTypography>
        </MuiCardContent>
      </CardActionArea>
    </MuiCard>
  )
}

// PropTypes definition for better type checking
ChallengeCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.shape({
    colors: PropTypes.shape({
      main: PropTypes.string.isRequired,
      opaque: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

// Default props definition
ChallengeCard.defaultProps = {
  difficulty: {
    colors: {
      main: 'black',
      opaque: 'rgba(0, 0, 0, 0.5)',
    },
  },
}
