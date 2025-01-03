import MuiCasinoIcon from '@mui/icons-material/Casino'
import MuiCard from '@mui/material/Card'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiIconButton from '@mui/material/IconButton'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import iconPatternDividerDesktop from '../../assets/images/pattern-divider-desktop.svg'
import iconPatternDividerMobile from '../../assets/images/pattern-divider-mobile.svg'
import useFetch from '../../hooks/useFetch'

const AdviceGeneratorApp = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  // obtenemos todas las quotes de la API (100 maximo segun la API)
  const { data: quote, refetch } = useFetch('https://dummyjson.com/quotes/random')

  return (
    <MuiCard elevation={1} sx={{ position: 'relative', maxWidth: 500, p: '2.5em 2.5em 4.5em', borderRadius: 4, overflow: 'visible' }}>
      <MuiStack spacing={3}>
        <MuiCardContent sx={{ p: 0 }}>
          <MuiTypography color="text.secondary" textAlign="center" sx={{ mb: 1, fontSize: '12px', letterSpacing: 2.5 }}>
            QUOTE #{quote?.id}
          </MuiTypography>

          <MuiTypography variant={matches ? 'h5' : 'h6'} textAlign="center" sx={{ fontWeight: 800 }} gutterBottom>
            <MuiTypography variant="inherit" component="span">
              &ldquo;
            </MuiTypography>
            {quote?.quote}
            <MuiTypography variant="inherit" component="span">
              &rdquo;
            </MuiTypography>
          </MuiTypography>
        </MuiCardContent>

        <MuiCardMedia
          component="img"
          width="100%"
          image={matches ? iconPatternDividerDesktop : iconPatternDividerMobile}
          alt="Pattern divider desktop"
        />

        <MuiCardActions sx={{ position: 'absolute', bottom: -20, left: '50%', p: 0, transform: 'translateX(-50%)' }}>
          <MuiIconButton aria-label="casino" onClick={refetch}>
            <MuiCasinoIcon fontSize="large" sx={{ p: 0.5 }} />
          </MuiIconButton>
        </MuiCardActions>
      </MuiStack>
    </MuiCard>
  )
}

export default AdviceGeneratorApp
