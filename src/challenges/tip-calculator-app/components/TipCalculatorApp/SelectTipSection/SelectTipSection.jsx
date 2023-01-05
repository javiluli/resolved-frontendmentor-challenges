import MuiBox from '@mui/material/Box'
import MuiButton from '@mui/material/Button'
import MuiGrid from '@mui/material/Grid'
import MuiTextField from '@mui/material/TextField'
import MuiTypography from '@mui/material/Typography'

const tips = ['5', '10', '15', '25', '50']

function SelectTipSection({ tip, onSetTip, customTip, onSetCustomTip }) {
  const handleSelectTip = (value) => {
    onSetTip(value)
    onSetCustomTip('')
  }

  const handleChangeCustomTip = (value) => {
    validateValue(value)
  }

  const validateValue = (value) => {
    const regex = /^[0-9]+$/
    if (value === '' || regex.test(value)) {
      onSetTip(value)
      onSetCustomTip(value)
    }
  }

  return (
    <MuiBox>
      <MuiTypography variant="subtitle2" gutterBottom>
        Select Tip %
      </MuiTypography>

      <MuiGrid container spacing={2}>
        {tips.map((item) => (
          <MuiGrid key={item} item xs={6} sm={4}>
            <MuiButton
              name="tip"
              value={item}
              variant="contained"
              fullWidth
              sx={{
                // si NO hay un tip custom (0 o blanco) y si el valor del item es igual al valor asignado
                bgcolor: !customTip && item === tip && 'hsl(172, 67%, 45%)',
              }}
              onClick={(e) => {
                handleSelectTip(e.target.value)
              }}
            >
              {`${item}%`}
            </MuiButton>
          </MuiGrid>
        ))}

        <MuiGrid item xs={6} sm={4}>
          <MuiTextField
            name="tip"
            size="small"
            placeholder="Custom"
            value={customTip}
            fullWidth
            sx={{
              input: { textAlign: 'center' },
            }}
            onClick={() => {
              onSetTip(0)
            }}
            onChange={(e) => {
              handleChangeCustomTip(e.target.value)
            }}
          />
        </MuiGrid>
      </MuiGrid>
    </MuiBox>
  )
}

export default SelectTipSection
