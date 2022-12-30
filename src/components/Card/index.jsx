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

const StackBlitzIcon = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M10.797 14.182H3.635L16.728 0l-3.525 9.818h7.162L7.272 24l3.524-9.818Z" />
    </SvgIcon>
  )
}

const Card = ({ data }) => {
  const { slug, title, challenge_description, preview_image, languages, difficulty, source_code, codesandbox, stackblitz } = data

  return (
    <MuiBox>
      <MuiCard variant="outlined" sx={{ borderRadius: 4 }}>
        <Link to={`/c/${slug}`} style={{ textDecoration: 'none' }}>
          <MuiCardMedia component="img" image={preview_image} />
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
            {challenge_description}
          </MuiTypography>
        </MuiCardContent>

        <MuiDivider variant="middle" />

        <MuiCardActions disableSpacing>
          <MuiStack direction="row" justifyContent="flex-end" alignItems="center" spacing={1} sx={{ width: '100%' }}>
            <MuiLink href={source_code} target="_blank" rel="noopener" underline="none">
              <MuiIconButton aria-label="Github" sx={{ color: 'text.secondary' }}>
                <CodeIcon sx={{ fontSize: '1.25rem' }} />
              </MuiIconButton>
            </MuiLink>

            <MuiLink href={codesandbox} target="_blank" rel="noopener" underline="none">
              <MuiIconButton aria-label="CodeSandbox" sx={{ color: 'text.secondary' }}>
                <CodeSandboxIcon sx={{ fontSize: '1rem' }} />
              </MuiIconButton>
            </MuiLink>

            <MuiLink href={stackblitz} target="_blank" rel="noopener" underline="none">
              <MuiIconButton aria-label="StackBlitz" sx={{ color: 'text.secondary' }}>
                <StackBlitzIcon sx={{ fontSize: '1.25rem' }} />
              </MuiIconButton>
            </MuiLink>
          </MuiStack>
        </MuiCardActions>
      </MuiCard>
    </MuiBox>
  )
}

export default Card
