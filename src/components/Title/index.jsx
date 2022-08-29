import MuiTypography from '@mui/material/Typography'

const Title = () => {
  return (
    <MuiTypography component="h1" variant="h1" sx={{ textAlign: 'center', fontWeight: 900 }} gutterBottom>
      Resolved
      <MuiTypography
        variant="inheit"
        component="span"
        sx={{
          display: 'block',
          background: 'linear-gradient(to right, #67bece, #3f54a3)',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        }}
      >
        frontendmentor.io
      </MuiTypography>
      challenges
    </MuiTypography>
  )
}

export default Title
