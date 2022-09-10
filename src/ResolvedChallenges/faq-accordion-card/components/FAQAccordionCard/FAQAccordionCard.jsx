// MUI
import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiGrid from '@mui/material/Grid'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
// MUI hooks
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
// Components
import Accordion from './Accordion'
// Images
import bgPatternDesktop from '../../images/bg-pattern-desktop.svg'
import illustrationWomanOnlineDesktop from '../../images/illustration-woman-online-desktop.svg'
import illustrationWomanOnlineMobile from '../../images/illustration-woman-online-mobile.svg'

const FAQAccordionCard = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  const widthCardResponsive = matches ? 650 : 340

  return (
    <MuiStack
      justifyContent="center"
      alignItems="center"
      sx={{ width: '100%', height: '100vh', background: 'linear-gradient(180deg, rgba(175,103,233,1) 0%, rgba(101,101,231,1) 100%)' }}
    >
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
              image={matches ? illustrationWomanOnlineDesktop : illustrationWomanOnlineMobile}
              alt="image"
            />
            <MuiCardMedia
              component="img"
              sx={{ position: 'absolute', top: matches ? 30 : -170, padding: '0 2em', zIndex: 100 }}
              image={bgPatternDesktop}
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
    </MuiStack>
  )
}

export default FAQAccordionCard
