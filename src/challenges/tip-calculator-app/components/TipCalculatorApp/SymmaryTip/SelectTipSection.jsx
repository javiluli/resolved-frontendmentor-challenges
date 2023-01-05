import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

function SymmaryTip({ tipAmount, total }) {
  return (
    <MuiStack spacing={5}>
      <MuiStack direction="row" justifyContent="space-between">
        <MuiBox>
          <MuiTypography color="primary.contrastText">Tip Amount</MuiTypography>
          <MuiTypography variant="body2" color="text.disabled">
            / Person
          </MuiTypography>
        </MuiBox>
        <MuiTypography variant="h4" color="text.secondary">
          ${tipAmount}
        </MuiTypography>
      </MuiStack>

      <MuiStack direction="row" justifyContent="space-between">
        <MuiBox>
          <MuiTypography color="primary.contrastText">Total</MuiTypography>
          <MuiTypography variant="body2" color="text.disabled">
            / Person
          </MuiTypography>
        </MuiBox>
        <MuiTypography variant="h4" color="text.secondary">
          ${total}
        </MuiTypography>
      </MuiStack>
    </MuiStack>
  )
}

export default SymmaryTip
