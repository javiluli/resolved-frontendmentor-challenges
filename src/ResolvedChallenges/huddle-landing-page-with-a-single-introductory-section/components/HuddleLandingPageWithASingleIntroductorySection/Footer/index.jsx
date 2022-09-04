import MuiStack from '@mui/material/Stack'
import MuiIconButton from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  return (
    <MuiStack direction="row" justifyContent="center" spacing={2}>
      <MuiIconButton sx={{ color: 'common.white', border: '1px solid hsl(0, 0%, 100%)' }} aria-label="Facebook">
        <FacebookIcon fontSize="small" />
      </MuiIconButton>

      <MuiIconButton sx={{ color: 'common.white', border: '1px solid hsl(0, 0%, 100%)' }} aria-label="Twitter">
        <TwitterIcon fontSize="small" />
      </MuiIconButton>

      <MuiIconButton sx={{ color: 'common.white', border: '1px solid hsl(0, 0%, 100%)' }} aria-label="Instagram">
        <InstagramIcon fontSize="small" />
      </MuiIconButton>
    </MuiStack>
  )
}

export default Footer
