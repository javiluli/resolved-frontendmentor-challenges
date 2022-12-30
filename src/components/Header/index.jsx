// MUI
import DrawerMenu from '@/components/DrawerMenu'
import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'

const Header = () => {
  return (
    <MuiStack sx={{ position: 'fixed', t: 0, l: 0, p: 2 }} component="header">
      <MuiBox>
        <DrawerMenu />
      </MuiBox>
    </MuiStack>
  )
}
export default Header
