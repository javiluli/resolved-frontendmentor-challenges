import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

import { OTHER_MESSAGE } from '../../../constant'
import { useMaterialUIController } from '../../../context'
import borders from '../../../themes/theme1/base/borders'

const { borderRadius } = borders

const CalculatorScreen = () => {
  const [controller] = useMaterialUIController()
  const { theme, errorInOperation, calculateOperations } = controller

  return (
    <MuiStack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
      <MuiBox sx={{ width: '100%', px: 2, py: 3, bgcolor: 'background.screen', borderRadius: borderRadius.lg }}>
        <MuiTypography
          data-testid="screen-result"
          align="right"
          variant="h3"
          sx={{ color: theme === 0 ? 'text.secondary' : 'text.primary' }}
        >
          {calculateOperations.length > 0 ? calculateOperations : OTHER_MESSAGE.CALCULATOR}
        </MuiTypography>

        <MuiTypography
          data-testid="screen-error-message"
          align="right"
          variant="body2"
          sx={{ color: theme === 0 ? 'text.secondary' : 'text.primary' }}
        >
          {errorInOperation ?? ''}
        </MuiTypography>
      </MuiBox>
    </MuiStack>
  )
}

export default CalculatorScreen
