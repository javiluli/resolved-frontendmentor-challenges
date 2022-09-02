// MUI
import MuiBox from '@mui/material/Box'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardHeader from '@mui/material/CardHeader'
import MuiAvatar from '@mui/material/Avatar'
import MuiIconButton from '@mui/material/IconButton'
// Images
import img__avatarMichelle from '../../images/avatar-michelle.jpg'
import img__iconShare from '../../images/icon-share.svg'

const CardHeader = ({ onShare }) => {
  return (
    <MuiCardActions sx={{ width: '100%', height: '4em', padding: '1em 1.75em ', justifyContent: 'space-between' }}>
      <MuiCardHeader
        sx={{ padding: 0 }}
        avatar={
          <MuiAvatar aria-label="profile">
            <MuiCardMedia component="img" image={img__avatarMichelle} alt="Image" />
          </MuiAvatar>
        }
        title=" Michelle Appleton"
        subheader="28 Jun 2020"
      />

      <MuiBox sx={{ backgroundColor: 'background.default', borderRadius: '100%' }}>
        <MuiIconButton onClick={() => onShare(true)}>
          <MuiCardMedia sx={{ width: '18px', padding: '2px' }} component="img" image={img__iconShare} alt="Image" />
        </MuiIconButton>
      </MuiBox>
    </MuiCardActions>
  )
}

export default CardHeader
