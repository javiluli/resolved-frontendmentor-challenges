import MuiBox from '@mui/material/Box'

import imgLogo from '../../../assets/images/logo.svg'

const Header = () => {
  return (
    <MuiBox
      sx={{
        width: '100%',
      }}
      component="img"
      alt="Image"
      src={imgLogo}
    />
  )
}

export default Header
