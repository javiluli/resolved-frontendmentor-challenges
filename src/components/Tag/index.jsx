import MuiTypography from '@mui/material/Typography'

const Tag = ({ children, color }) => {
  return (
    <MuiTypography
      align="center"
      sx={{ px: 0.85, py: 0.65, mr: 1, color: '#ffffff', backgroundColor: color, borderRadius: 1.5 }}
      variant="button"
      component="span"
    >
      {children}
    </MuiTypography>
  )
}

export default Tag
