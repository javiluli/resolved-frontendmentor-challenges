// MUI
import { useTheme } from '@mui/material/styles'
import MuiGrid from '@mui/material/Grid'
import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiTypography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
// Components
import Accordion from '../Accordion'
// Images
import img__illustrationWomanOnlineDesktop from '../../images/illustration-woman-online-desktop.svg'
import img__illustrationWomanOnlineMobile from '../../images/illustration-woman-online-mobile.svg'
import img__bgPatternDesktop from '../../images/bg-pattern-desktop.svg'

const Card = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  const widthCardResponsive = matches ? 650 : 340

  return (
    <MuiCard
      sx={{
        width: widthCardResponsive,
        borderRadius: '1.5em',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        overflow: 'visible',
      }}
    >
      <MuiGrid container>
        <MuiGrid item xs={12} sm={6} sx={{ position: 'relative' }}>
          <MuiCardMedia
            component="img"
            sx={{ position: 'absolute', top: matches ? 50 : -140, padding: '0 2em', zIndex: 101 }}
            image={matches ? img__illustrationWomanOnlineDesktop : img__illustrationWomanOnlineMobile}
            alt="image"
          />
          <MuiCardMedia
            component="img"
            sx={{ position: 'absolute', top: matches ? 30 : -170, padding: '0 2em', zIndex: 100 }}
            image={img__bgPatternDesktop}
            alt="image"
          />
        </MuiGrid>

        <MuiGrid item xs={12} sm={6}>
          <MuiCardContent sx={{ marginTop: matches ? 0 : 12 }}>
            <MuiTypography sx={{ textAlign: matches ? 'left' : 'center' }} variant="subtitle1" component="h1">
              FAQ
            </MuiTypography>

            <Accordion />
          </MuiCardContent>
        </MuiGrid>
      </MuiGrid>
    </MuiCard>
  )
}

export default Card
