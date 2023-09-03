import MuiContainer from '@mui/material/Container'
import MuiStack from '@mui/material/Stack'

import { CalculatorHeader } from './CalculatorHeader'
import { CalculatorKeyboard } from './CalculatorKeyboard'
import { CalculatorScreen } from './CalculatorScreen'

const CalculatorApp = () => {
  return (
    <MuiContainer sx={{ my: 4, minWidth: 'tablet', maxWidth: { mobile: 'tablet', desktop: 'desktop' } }}>
      <MuiStack alignItems="center" sx={{ width: '100%' }}>
        <MuiStack spacing={2} sx={{ my: 4, maxWidth: { mobile: 'tablet', desktop: 460 } }}>
          <CalculatorHeader />

          <CalculatorScreen />

          <CalculatorKeyboard />
        </MuiStack>
      </MuiStack>
    </MuiContainer>
  )
}

export default CalculatorApp
