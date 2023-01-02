import CodeIcon from '@mui/icons-material/Code'
import MuiBox from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiDivider from '@mui/material/Divider'
import MuiGrid from '@mui/material/Grid'
import MuiIconButton from '@mui/material/IconButton'
import MuiLink from '@mui/material/Link'
import MuiStack from '@mui/material/Stack'
import SvgIcon from '@mui/material/SvgIcon'
import MuiTooltip from '@mui/material/Tooltip'
import MuiTypography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

import DifficultyTag from './DifficultyTag'
import ListOfLanguagesTag from './ListOfLanguagesTag'

const CodeSandboxIcon = (props) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props}>
      <path d="M2.667 8l13.938-8 13.943 8 0.12 15.932-14.063 8.068-13.938-8zM5.453 11.307v6.344l4.458 2.479v4.688l5.297 3.063v-11.031zM27.771 11.307l-9.755 5.542v11.031l5.292-3.063v-4.682l4.464-2.484zM6.844 8.802l9.74 5.526 9.76-5.573-5.161-2.932-4.547 2.594-4.573-2.625z" />
    </SvgIcon>
  )
}

const FrontendMentorIcon = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M12.1706 1.2719a.732.732 0 00-.7186.732v13.914a.732.732 0 00.732.732.732.732 0 00.7318-.732V2.004a.732.732 0 00-.7452-.732zm11.0741 4.1685a.7339.7339 0 00-.2764.063L16.686 8.307a.7329.7329 0 000 1.3361l6.2823 2.8134a.7378.7378 0 00.2993.0648.732.732 0 00.2973-1.401l-4.786-2.1443 4.786-2.1366a.7339.7339 0 00.3698-.9664.7339.7339 0 00-.69-.4327zm-22.499 5.032a.7316.7316 0 00-.7223.9149c1.736 6.677 7.7748 11.341 14.6822 11.341a.732.732 0 000-1.464 13.7055 13.7055 0 01-13.266-10.2449.7316.7316 0 00-.6939-.547z" />
    </SvgIcon>
  )
}

const Card = ({ data }) => {
  const {
    slug,
    frontendmentor: {
      title,
      description,
      languages,
      difficulty,
      images: { desktop_preview },
      try_challenge,
    },
    source_code,
    editables: { codesandbox },
  } = data

  return (
    <MuiBox>
      <MuiCard
        variant="outlined"
        sx={{
          minWidth: 200,
          border: 'none',
          borderRadius: 4,
          boxShadow: '0px 0px 2px 0px rgba(17, 12, 46, 0.2)',
          transition: 'all 250ms cubic-bezier(0.2, 0, 0.2, 1) 0ms',
          ':hover': { boxShadow: '0px 0px 20px 0px rgba(17, 12, 46, 0.1)', transform: 'translateY(-3px)' },
        }}
      >
        <Link to={`/c/${slug}`} style={{ textDecoration: 'none' }}>
          <MuiCardMedia component="img" image={desktop_preview} />
        </Link>

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

          <Link to={`/c/${slug}`} style={{ textDecoration: 'none' }}>
            <MuiTypography variant="h6" component="h1" sx={{ color: 'text.primary', fontWeight: 900 }} gutterBottom>
              {title}
            </MuiTypography>
          </Link>
          <MuiTypography variant="body2" sx={{ color: 'text.secondary' }} gutterBottom>
            {description}
          </MuiTypography>
        </MuiCardContent>

        <MuiDivider variant="middle" sx={{ my: 0.75 }} />

        <MuiCardActions disableSpacing>
          <MuiStack direction="row" justifyContent="flex-end" alignItems="center" spacing={1} sx={{ width: '100%' }}>
            <MuiTooltip title="View the source on GitHub" placement="top">
              <MuiLink href={source_code} target="_blank" rel="noopener" underline="none">
                <MuiIconButton aria-label="Github" sx={{ color: 'text.secondary' }}>
                  <CodeIcon sx={{ fontSize: '1.25rem' }} />
                </MuiIconButton>
              </MuiLink>
            </MuiTooltip>

            <MuiTooltip title="Edit in CodeSandbox" placement="top">
              <MuiLink href={codesandbox} target="_blank" rel="noopener" underline="none">
                <MuiIconButton aria-label="CodeSandbox" sx={{ color: 'text.secondary' }}>
                  <CodeSandboxIcon sx={{ fontSize: '1rem' }} />
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
