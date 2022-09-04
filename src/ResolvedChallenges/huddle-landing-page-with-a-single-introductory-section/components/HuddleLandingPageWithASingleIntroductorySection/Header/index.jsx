// MUI
import MuiBox from '@mui/material/Box'
// components
import BoxImage from '../../BoxImage'
// Images
import logo from '../../../images/logo.svg'

const Header = () => {
  return <MuiBox sx={{ width: 150 }}>{<BoxImage img={logo} />}</MuiBox>
}

export default Header
