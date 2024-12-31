import IconShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MuiButton from '@mui/material/Button'
import MuiCard from '@mui/material/Card'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiGrid from '@mui/material/Grid'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import imgProductDesktop from '../assets/images/image-product-desktop.jpg'
import imgProductMobile from '../assets/images/image-product-mobile.jpg'
import { theme } from '../themes'

const { functions } = theme

const { pxToRem } = functions

export function ProductPreviewCardComponent() {
  const MuiTheme = useTheme()
  const matches = useMediaQuery(MuiTheme.breakpoints.up('md'))

  return (
    <MuiCard
      sx={{
        maxWidth: { xs: 350, md: 560 },
        backgroundColor: 'background.paper',
      }}
      elevation={1}
    >
      <MuiGrid container>
        <MuiGrid item sm={12} md={6}>
          <MuiCardMedia component="img" image={matches ? imgProductDesktop : imgProductMobile} />
        </MuiGrid>

        <MuiGrid item sm={12} md={6}>
          <MuiCardContent>
            <MuiStack
              justifyContent="space-between"
              sx={{
                height: '100%',
                padding: '1.5em 2em',
              }}
            >
              <MuiTypography
                variant="caption"
                sx={{
                  textTransform: 'uppercase',
                  letterSpacing: 5,
                  color: 'text.secondary',
                }}
              >
                perfume
              </MuiTypography>

              <MuiTypography
                variant="h4"
                component="h1"
                sx={{
                  fontFamily: 'Fraunces',
                  color: 'text.primary',
                }}
              >
                Gabrielle Essence Eau De Parfum
              </MuiTypography>

              <MuiTypography
                variant="subtitle1"
                sx={{
                  fontSize: pxToRem(12),
                  color: 'text.secondary',
                }}
              >
                A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </MuiTypography>

              <MuiStack direction="row" alignItems="center" spacing={2}>
                <MuiTypography
                  variant="h5"
                  sx={{
                    fontFamily: 'Fraunces',
                    color: 'primary.main',
                  }}
                >
                  $149.99
                </MuiTypography>

                <MuiTypography
                  variant="caption"
                  component="span"
                  sx={{
                    marginLeft: 2,
                    textDecoration: 'line-through',
                    color: 'text.secondary',
                  }}
                >
                  $169.99
                </MuiTypography>
              </MuiStack>

              <MuiButton variant="contained" size="large" fullWidth startIcon={<IconShoppingCartOutlinedIcon />}>
                Add to cart
              </MuiButton>
            </MuiStack>
          </MuiCardContent>
        </MuiGrid>
      </MuiGrid>
    </MuiCard>
  )
}
