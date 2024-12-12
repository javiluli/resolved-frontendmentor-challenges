import MuiBox from '@mui/material/Box'
import { Link } from 'react-router-dom'

export function Card({ id, rows, cols, src }) {
  return (
    <MuiBox
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: {
          xs: '1em',
          lg: '2em',
        },
        boxShadow: '0 4px 6px hsla(0, 0%, 0%, 0.1)',
        gridColumnEnd: `span ${cols}`,
        gridRowEnd: `span ${rows}`,
        '&:hover img': {
          transform: 'scale(1.025)',
        },
      }}
    >
      <Link to={`/c/${id}`} target="_blank" style={{ textDecoration: 'none' }}>
        <MuiBox
          component="img"
          src={src}
          alt={id}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
          }}
        />
      </Link>
    </MuiBox>
  )
}
