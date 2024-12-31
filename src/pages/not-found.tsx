import MuiBox from '@mui/material/Box'
import MuiButton from '@mui/material/Button'
import MuiContainer from '@mui/material/Container'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

export function NotFoundPage() {
  return (
    <MuiBox>
      <MuiContainer sx={{ padding: '4em 1em 1em', backgroundColor: 'background.default' }} component="main">
        <MuiStack spacing={6}>
          <MuiTypography variant="h3" sx={{ color: 'text.primary' }}>
            Error 404 - Not found
          </MuiTypography>

          <MuiButton variant="contained" sx={{ my: 2, bgcolor: '#467dff' }} onClick={() => (window.location.href = '/')}>
            Volver al inicio
          </MuiButton>
        </MuiStack>
      </MuiContainer>
    </MuiBox>
  )
}
