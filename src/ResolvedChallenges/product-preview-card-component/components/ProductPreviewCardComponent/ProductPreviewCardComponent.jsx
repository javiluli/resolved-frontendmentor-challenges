import MuiBox from '@mui/system/Box'
import MuiButton from '@mui/material/Button'
import MuiCard from '@mui/material/Card'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiTypography from '@mui/material/Typography'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import img__productDesktop from '../../images/image-product-desktop.jpg'
import img__productMobile from '../../images/image-product-mobile.jpg'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const ProductPreviewCardComponent = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  // variables responsives
  const display = matches ? 'flex' : 'block'
  const maxWidth = matches ? 550 : 350
  const img = matches ? img__productDesktop : img__productMobile
  const imgWidth = matches ? '50%' : '100%'

  return (
    <MuiCard
      sx={{
        display: display,
        maxWidth: maxWidth,
        backgroundColor: 'background.paper',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '0.75em',
      }}
    >
      <MuiCardMedia component="img" image={img} sx={{ minWidth: imgWidth }} />
      <MuiBox sx={{ display: 'flex', flexDirection: 'column', padding: '1.5em 2em' }}>
        <MuiCardContent sx={{ flex: '1 0 auto', padding: '0' }}>
          <MuiTypography sx={{ textTransform: 'uppercase', letterSpacing: 5 }} color="text.secondary" variant="caption">
            perfume
          </MuiTypography>
          <MuiTypography variant="body1" color="text.primary" component="h1" gutterBottom>
            Gabrielle Essence Eau De Parfum
          </MuiTypography>
          <MuiTypography sx={{ marginBottom: 1.5 }} variant="subtitle1" color="text.secondary" component="p">
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </MuiTypography>
          <MuiTypography sx={{ marginRight: 2 }} variant="subtitle2" color="primary.main" component="span">
            $149.99
          </MuiTypography>

          <MuiTypography sx={{ textDecoration: 'line-through' }} variant="caption" color="text.secondary" component="span">
            $169.99
          </MuiTypography>
        </MuiCardContent>

        <MuiCardActions sx={{ padding: '0.5em 0' }}>
          <MuiButton variant="contained" size="large" startIcon={<ShoppingCartOutlinedIcon />}>
            Add to cart
          </MuiButton>
        </MuiCardActions>
      </MuiBox>
    </MuiCard>
  )
}

export default ProductPreviewCardComponent
