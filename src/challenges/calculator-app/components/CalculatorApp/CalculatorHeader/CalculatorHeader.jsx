import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

import { useMaterialUIController } from '../../../context'
import { Switch3Themes } from './Switch3Themes'

const CalculatorHeader = () => {
  const [controller] = useMaterialUIController()
  const { theme } = controller

  return (
    <MuiStack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ width: '100%' }}>
      <MuiTypography variant="h4" sx={{ color: theme === 0 ? 'text.secondary' : 'text.primary' }}>
        calc
      </MuiTypography>

      <Switch3Themes />
    </MuiStack>
  )
}

export default CalculatorHeader
