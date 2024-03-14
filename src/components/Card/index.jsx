/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import MuiCodeIcon from '@mui/icons-material/Code'
import MuiBox from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiDivider from '@mui/material/Divider'
import MuiIconButton from '@mui/material/IconButton'
import MuiLink from '@mui/material/Link'
import MuiStack from '@mui/material/Stack'
import MuiTooltip from '@mui/material/Tooltip'
import MuiTypography from '@mui/material/Typography'

import DifficultyTag from './DifficultyTag'
import { FrontendMentorIcon } from './FrontendMentorIcon'
import ListOfLanguagesTag from './ListOfLanguagesTag'

import { Link } from 'wouter'

function Card({ data }) {
  const {
    id,
    title,
    difficulty,
    languages,
    images: { desktop_preview },
    source_code,
    try_challenge,
  } = data

  return (
    <MuiBox>
      <MuiCard
        variant="outlined"
        sx={{
          minWidth: 200,
          border: 'none',
          borderRadius: 4,
          transition: 'all 250ms cubic-bezier(0.2, 0, 0.2, 1) 0ms',
          ':hover': { transform: 'translateY(-3px)' },
        }}
      >
        <MuiBox sx={{ position: 'relative' }}>
          <Link to={`/c/${id}`} style={{ textDecoration: 'none' }}>
            <MuiCardMedia
              component="img"
              image={desktop_preview}
              sx={{
                padding: '6px',
                borderRadius: '16px',
              }}
            />
          </Link>

          <MuiBox
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              position: 'absolute',
              bottom: -6,
              left: 0,
            }}
          >
            <MuiStack direction="row" justifyContent="space-around" spacing={1} sx={{ width: '100%' }}>
              <ListOfLanguagesTag languages={languages} />
              <DifficultyTag difficulty={difficulty} />
            </MuiStack>
          </MuiBox>
        </MuiBox>

        <MuiCardContent>
          <Link to={`/c/${id}`} style={{ textDecoration: 'none' }}>
            <MuiTypography variant="subtitle1" component="h1" sx={{ color: 'text.primary', fontWeight: 900 }} gutterBottom>
              {title}
            </MuiTypography>
          </Link>
        </MuiCardContent>

        <MuiDivider variant="middle" />

        <MuiCardActions disableSpacing>
          <MuiStack direction="row" justifyContent="flex-end" alignItems="center" spacing={1} sx={{ width: '100%' }}>
            <MuiTooltip title="View the source on GitHub" placement="top">
              <MuiLink href={source_code} target="_blank" rel="noopener" underline="none">
                <MuiIconButton aria-label="Github" sx={{ color: 'text.secondary' }}>
                  <MuiCodeIcon sx={{ fontSize: '1.25rem' }} />
                </MuiIconButton>
              </MuiLink>
            </MuiTooltip>

            <MuiTooltip title="See challenge in frontendmentor.io" placement="top">
              <MuiLink href={try_challenge} target="_blank" rel="noopener" underline="none">
                <MuiIconButton aria-label="Frontendmentor" sx={{ color: 'text.secondary' }}>
                  <FrontendMentorIcon sx={{ fontSize: '1.25rem' }} />
                </MuiIconButton>
              </MuiLink>
            </MuiTooltip>
          </MuiStack>
        </MuiCardActions>
      </MuiCard>
    </MuiBox>
  )
}

export default Card
