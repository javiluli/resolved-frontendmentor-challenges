import MuiBox from '@mui/material/Box'
import MuiPaper from '@mui/material/Paper'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

import imgLogo from '../../../assets/images/logo.svg'

const Header = () => {
  return (
    <MuiPaper elevation={1} sx={{ px: 3, py: 2, backgroundColor: 'primary.main', borderRadius: 4 }}>
      <MuiStack direction="row" justifyContent="space-between">
        <MuiStack>
          <MuiTypography variant="body2" color="text.secondary" gutterBottom>
            My balance
          </MuiTypography>

          <MuiTypography variant="h5" sx={{ fontWeight: 700 }}>
            $921.48
          </MuiTypography>
        </MuiStack>

        <MuiBox component="img" sx={{ width: 50 }} alt="The house from the offer." src={imgLogo} />
      </MuiStack>
    </MuiPaper>
  )
}

export default Header
