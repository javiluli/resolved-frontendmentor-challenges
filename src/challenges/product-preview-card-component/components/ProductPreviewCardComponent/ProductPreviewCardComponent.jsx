import IconShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MuiBox from '@mui/material/Box'
import MuiButton from '@mui/material/Button'
import MuiCard from '@mui/material/Card'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiTypography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiStack from '@mui/system/Stack'

import imgProductDesktop from '../../assets/images/image-product-desktop.jpg'
import imgProductMobile from '../../assets/images/image-product-mobile.jpg'

const ProductPreviewCardComponent = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  // variables responsives
  const display = matches ? 'flex' : 'block'
  const maxWidth = matches ? 550 : 350
  const imgProduct = matches ? imgProductDesktop : imgProductMobile
  const imgWidth = matches ? '50%' : '100%'

  return (
    <MuiBox sx={{ m: 4 }}>
      <MuiCard
        sx={{
          display: display,
          maxWidth: maxWidth,
          backgroundColor: 'background.paper',
          borderRadius: '1em',
        }}
        elevation={1}
      >
        <MuiCardMedia component="img" image={imgProduct} sx={{ minWidth: imgWidth }} />
        <MuiStack sx={{ padding: '1.5em 2em' }}>
          <MuiCardContent sx={{ flex: '1 0 auto', padding: '0' }}>
            <MuiTypography color="text.secondary" variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: 5 }}>
              perfume
            </MuiTypography>

            <MuiTypography variant="h4" component="h1" color="text.primary" sx={{ fontFamily: 'Fraunces' }} gutterBottom>
              Gabrielle Essence Eau De Parfum
            </MuiTypography>

            <MuiTypography variant="subtitle1" component="p" color="text.secondary" sx={{ fontSize: '0.75rem' }} gutterBottom>
              A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
            </MuiTypography>

            <MuiTypography variant="h5" component="p" color="primary.main" sx={{ fontFamily: 'Fraunces' }} gutterBottom>
              $149.99
              <MuiTypography
                variant="caption"
                component="span"
                color="text.secondary"
                sx={{ marginLeft: 2, textDecoration: 'line-through' }}
              >
                $169.99
              </MuiTypography>
            </MuiTypography>
          </MuiCardContent>

          <MuiCardActions sx={{ padding: '0.5em 0' }}>
            <MuiButton variant="contained" size="large" startIcon={<IconShoppingCartOutlinedIcon />}>
              Add to cart
            </MuiButton>
          </MuiCardActions>
        </MuiStack>
      </MuiCard>
    </MuiBox>
  )
}

export default ProductPreviewCardComponent
