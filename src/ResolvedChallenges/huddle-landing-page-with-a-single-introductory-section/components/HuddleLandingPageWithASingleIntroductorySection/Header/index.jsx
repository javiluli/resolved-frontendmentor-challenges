// MUI
import MuiBox from '@mui/material/Box'
// Images
import logo from '../../../images/logo.svg'

const Header = () => {
  return (
    <MuiBox sx={{ width: 200 }}>
      <MuiBox
        sx={{
          width: '100%',
        }}
        component="img"
        alt="Image"
        src={logo}
      />
    </MuiBox>
  )
}

export default Header
