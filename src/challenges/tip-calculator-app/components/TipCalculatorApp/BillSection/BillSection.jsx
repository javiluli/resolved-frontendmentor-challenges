import MuiAttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded'
import MuiBox from '@mui/material/Box'
import MuiInputAdornment from '@mui/material/InputAdornment'
import MuiTextField from '@mui/material/TextField'
import MuiTypography from '@mui/material/Typography'

function BillSection({ bill, onSetBill }) {
  const handleChange = (e) => {
    validateValue(e.target.value)
  }

  const validateValue = (value) => {
    const regex = /^[0-9]+$/
    if (value === '' || regex.test(value)) {
      onSetBill(value)
    }
  }

  return (
    <MuiBox>
      <MuiTypography variant="subtitle2" gutterBottom>
        Bill
      </MuiTypography>
      <MuiTextField
        name="bill"
        size="small"
        placeholder="0"
        value={bill}
        fullWidth
        sx={{
          input: { textAlign: 'right' },
        }}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <MuiInputAdornment position="start">
              <MuiAttachMoneyRoundedIcon sx={{ color: 'hsl(184, 14%, 56%)' }} />
            </MuiInputAdornment>
          ),
        }}
      />
    </MuiBox>
  )
}

export default BillSection
