import { useTheme } from '@mui/material'
import MuiTypography from '@mui/material/Typography'

interface InfoTypographyProps {
  label: string
  value: string | undefined
}

export function InfoTypography({ label, value }: InfoTypographyProps) {
  const theme = useTheme()
  const { typography } = theme

  return (
    <MuiTypography variant="body2" gutterBottom>
      {label}:{' '}
      <MuiTypography variant="body2" component="span" sx={{ fontWeight: typography.fontWeightLight }}>
        {value}
      </MuiTypography>
    </MuiTypography>
  )
}
