import MuiBox from '@mui/material/Box'
import MuiGrid from '@mui/material/Grid'

import { ERROR_MESSAGE, MATHEMATICAL_OPERATORS } from '../../../constant'
import borders from '../../../themes/theme1/base/borders'
import Button from './Button'

import { evaluate, format, number, string } from 'mathjs'
import { setCalculateOperations, setResult, useMaterialUIController, setErrorInOperation } from '../../../context'
import { ZeroDivisionError } from '../../../error'

const { borderRadius } = borders

// https://codesandbox.io/s/94p0lkz0r4?from-embed=&file=/src/App.js:568-578

const CalculatorKeyboard = () => {
  const [controller, dispatch] = useMaterialUIController()

  const { calculateOperations } = controller

  const handleResult = (reult) => setResult(dispatch, reult)
  const handleCalculateOperations = (calculateOperations) => setCalculateOperations(dispatch, calculateOperations)
  const handleErrorInOperation = (error) => setErrorInOperation(dispatch, error)

  const deleteLastNumber = () => {
    calculateOperations.pop()
    handleCalculateOperations(calculateOperations)
    handleErrorInOperation(null)
  }

  const handleReset = () => {
    handleCalculateOperations([])
    handleResult(null)
    handleErrorInOperation(null)
  }

  const handleOperatingResult = () => {
    let result = calculateOperations.join('')

    if (result) {
      try {
        result = evaluate(result)
        result = format(result, { precision: 16 })
        result = number(result)

        if (result === Infinity) {
          throw new ZeroDivisionError(ERROR_MESSAGE.ERROR_DIVIDIR_POR_CERO)
        }

        handleCalculateOperations(string(result).split('')) // se vulve a dejar como un array
        handleResult(result)
        handleErrorInOperation(null)
      } catch (error) {
        if (error instanceof SyntaxError) {
          handleErrorInOperation(ERROR_MESSAGE.ERROR_SINTAXIS)
        }

        if (error instanceof ZeroDivisionError) {
          handleErrorInOperation(error.message)
        }

        // se mantiene la estructura de la oepracion inicial en caso de error
        handleCalculateOperations(calculateOperations)
      }
    }
  }

  const handleNumber = (e) => {
    handleCalculateOperations([...calculateOperations, e.target.value])
    handleErrorInOperation(null)
  }

  return (
    <MuiBox sx={{ flexGrow: 1, p: 3, bgcolor: 'background.keypad', borderRadius: borderRadius.lg }}>
      <MuiGrid container spacing={2}>
        {/* | 7 | 8 | 9 | DEL | */}
        <MuiGrid container item spacing={2}>
          <MuiGrid item mobile={3}>
            <Button data-testid="btn-7" variant="normal" value={7} onClick={handleNumber} fullWidth>
              7
            </Button>
          </MuiGrid>
          <MuiGrid item mobile={3}>
            <Button data-testid="btn-8" variant="normal" value={8} onClick={handleNumber} fullWidth>
              8
            </Button>
          </MuiGrid>
          <MuiGrid item mobile={3}>
            <Button data-testid="btn-9" variant="normal" value={9} onClick={handleNumber} fullWidth>
              9
            </Button>
          </MuiGrid>
          <MuiGrid item mobile={3}>
            <Button data-testid="btn-del" variant="reset" onClick={deleteLastNumber} fullWidth>
              DEL
            </Button>
          </MuiGrid>
        </MuiGrid>

        {/* | 4 | 5 | 6 | + | */}
        <MuiGrid container item spacing={2}>
          <MuiGrid item mobile={3}>
            <Button data-testid="btn-4" variant="normal" value={4} onClick={handleNumber} fullWidth>
              4
            </Button>
          </MuiGrid>
          <MuiGrid item mobile={3}>
            <Button data-testid="btn-5" variant="normal" value={5} onClick={handleNumber} fullWidth>
              5
            </Button>
          </MuiGrid>
          <MuiGrid item mobile={3}>
            <Button data-testid="btn-6" variant="normal" value={6} onClick={handleNumber} fullWidth>
              6
            </Button>
          </MuiGrid>
          <MuiGrid item mobile={3}>
            <Button data-testid="btn-add" variant="normal" value={MATHEMATICAL_OPERATORS.ADD} onClick={handleNumber} fullWidth>
              &#43;
            </Button>
          </MuiGrid>
        </MuiGrid>

        {/* | 1 | 2 | 3 | - | */}
        <MuiGrid container item spacing={2}>
          <MuiGrid item mobile={3}>
            <Button data-testid="btn-1" variant="normal" value={1} onClick={handleNumber} fullWidth>
              1
            </Button>
          </MuiGrid>
          <MuiGrid item mobile={3}>
            <Button data-testid="btn-2" variant="normal" value={2} onClick={handleNumber} fullWidth>
              2
            </Button>
          </MuiGrid>
          <MuiGrid item mobile={3}>
            <Button data-testid="btn-3" variant="normal" value={3} onClick={handleNumber} fullWidth>
              3
            </Button>
          </MuiGrid>
          <MuiGrid item mobile={3}>
            <Button data-testid="btn-subtract" variant="normal" value={MATHEMATICAL_OPERATORS.SUBTRACT} onClick={handleNumber} fullWidth>
              &#8722;
            </Button>
          </MuiGrid>
        </MuiGrid>

        {/* | . | 0 | / | x | */}
        <MuiGrid container item spacing={2}>
          <MuiGrid item mobile={3}>
            <Button data-testid="btn-dot" variant="normal" value={'.'} onClick={handleNumber} fullWidth>
              &#8729;
            </Button>
          </MuiGrid>
          <MuiGrid item mobile={3}>
            <Button data-testid="btn-0" variant="normal" value={0} onClick={handleNumber} fullWidth>
              0
            </Button>
          </MuiGrid>
          <MuiGrid item mobile={3}>
            <Button data-testid="btn-divide" variant="normal" value={MATHEMATICAL_OPERATORS.DIVIDE} onClick={handleNumber} fullWidth>
              &#247;
            </Button>
          </MuiGrid>
          <MuiGrid item mobile={3}>
            <Button data-testid="btn-multiply" variant="normal" value={MATHEMATICAL_OPERATORS.MULTIPLY} onClick={handleNumber} fullWidth>
              &#215;
            </Button>
          </MuiGrid>
        </MuiGrid>

        {/* | RESET |   =   | */}
        <MuiGrid container item spacing={2}>
          <MuiGrid item mobile={6}>
            <Button data-testid="btn-reset" variant="reset" onClick={handleReset} fullWidth>
              RESET
            </Button>
          </MuiGrid>
          <MuiGrid item mobile={6}>
            <Button data-testid="btn-equal" variant="equal" onClick={handleOperatingResult} fullWidth>
              &#61;
            </Button>
          </MuiGrid>
        </MuiGrid>
      </MuiGrid>
    </MuiBox>
  )
}

export default CalculatorKeyboard
