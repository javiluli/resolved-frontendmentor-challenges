// MUI
import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiTypography from '@mui/material/Typography'
import MuiCardActions from '@mui/material/CardActions'
import MuiIconButton from '@mui/material/IconButton'
// Images icons
import iconFacebook from '../../../images/icon-facebook.svg'
import iconTwitter from '../../../images/icon-twitter.svg'
import iconPinterest from '../../../images/icon-pinterest.svg'
import iconShareWhite from '../../../images/icon-share-white.svg'

const CardHeaderShare = ({ onShare }) => {
  return (
    <MuiCardActions
      sx={{
        width: '100%',
        height: '4em',
        padding: '1em 1.75em ',
        justifyContent: 'space-between',
        backgroundColor: 'primary.main',
      }}
    >
      <MuiStack sx={{ width: '100%' }} direction="row" justifyContent="space-between" alignItems="center">
        <MuiStack direction="row" spacing={1.5}>
          <MuiTypography sx={{ textTransform: 'uppercase', letterSpacing: '4px' }} variant="caption" color="primary.light" component="span">
            Share
          </MuiTypography>
          <MuiCardMedia sx={{ width: '18px', height: '18px' }} component="img" image={iconFacebook} alt="Image" />
          <MuiCardMedia sx={{ width: '18px', height: '18px' }} component="img" image={iconTwitter} alt="Image" />
          <MuiCardMedia sx={{ width: '18px', height: '18px' }} component="img" image={iconPinterest} alt="Image" />
        </MuiStack>

        <MuiBox sx={{ backgroundColor: 'primary.light', borderRadius: '100%' }}>
          <MuiIconButton onClick={() => onShare(false)}>
            <MuiCardMedia sx={{ width: '18px', padding: '2px' }} component="img" image={iconShareWhite} alt="Image" />
          </MuiIconButton>
        </MuiBox>
      </MuiStack>
    </MuiCardActions>
  )
}

export default CardHeaderShare