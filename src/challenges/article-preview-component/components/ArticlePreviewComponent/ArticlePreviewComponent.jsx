import { useState } from 'react'

import MuiAvatar from '@mui/material/Avatar'
import MuiBox from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardHeader from '@mui/material/CardHeader'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiIconButton from '@mui/material/IconButton'
import MuiPopover from '@mui/material/Popover'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import imgAvatarMichelle from '../../assets/images/avatar-michelle.jpg'
import drawers from '../../assets/images/drawers.jpg'
import iconFacebook from '../../assets/images/icon-facebook.svg'
import iconPinterest from '../../assets/images/icon-pinterest.svg'
import iconShare from '../../assets/images/icon-share.svg'
import iconTwitter from '../../assets/images/icon-twitter.svg'

const ArticlePreviewComponent = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <MuiBox sx={{ m: 4 }}>
      <MuiCard elevation={1} sx={{ maxWidth: matches ? 320 : 650, borderRadius: '1rem' }}>
        <MuiStack direction={matches ? 'column' : 'row'}>
          <MuiBox>
            <MuiCardMedia component="img" height={matches ? 170 : '100%'} image={drawers} alt="Image" />
          </MuiBox>
          <MuiBox>
            <MuiCardContent sx={{ padding: '2em 1.75em 0' }}>
              <MuiTypography variant="body1" component="h1" sx={{ fontWeight: 700 }} gutterBottom>
                Shift the overall look and feel by adding these wonderful touches to furniture in your home
              </MuiTypography>
              <MuiTypography variant="subtitle2" color="text.secondary" gutterBottom>
                Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple
                tips to help you make any room feel complete.
              </MuiTypography>
            </MuiCardContent>
            <MuiStack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: '1.75em' }}>
              <MuiCardHeader
                avatar={
                  <MuiAvatar aria-label="profile">
                    <MuiCardMedia component="img" image={imgAvatarMichelle} alt="Image avatar Michelle" />
                  </MuiAvatar>
                }
                title="Michelle Appleton"
                subheader="28 Jun 2020"
                sx={{ padding: 0, fontWeight: 700 }}
              />

              <MuiCardActions sx={{ py: 3 }}>
                <MuiBox sx={{ backgroundColor: 'background.default', borderRadius: '100%' }}>
                  <MuiIconButton onClick={handleClick}>
                    <MuiCardMedia sx={{ width: '18px' }} component="img" image={iconShare} alt="Image" />
                  </MuiIconButton>
                </MuiBox>

                <MuiPopover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  elevation={1}
                  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                  transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                  <MuiStack
                    sx={{ width: '100%', padding: '0.75em 2em ', backgroundColor: 'primary.main', borderRadius: '0.65em' }}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <MuiStack direction="row" spacing={2}>
                      <MuiTypography
                        variant="caption"
                        color="primary.light"
                        component="span"
                        sx={{ textTransform: 'uppercase', letterSpacing: '4px' }}
                      >
                        Share
                      </MuiTypography>
                      <MuiCardMedia component="img" image={iconFacebook} alt="Image icon Facebook" sx={{ width: '16px', height: '16px' }} />
                      <MuiCardMedia component="img" image={iconTwitter} alt="Image icon Twitter" sx={{ width: '16px', height: '16px' }} />
                      <MuiCardMedia
                        component="img"
                        image={iconPinterest}
                        alt="Image icon Pinterest"
                        sx={{ width: '16px', height: '16px' }}
                      />
                    </MuiStack>
                  </MuiStack>
                </MuiPopover>
              </MuiCardActions>
            </MuiStack>
          </MuiBox>
        </MuiStack>
      </MuiCard>
    </MuiBox>
  )
}

export default ArticlePreviewComponent
