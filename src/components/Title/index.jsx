import { Box, Divider, Stack } from '@mui/material'
import MuiTypography from '@mui/material/Typography'

const Title = () => {
  return (
    <Stack>
      <MuiTypography component="h1" variant="h4" sx={{ color: 'text.primary', fontWeight: 900 }}>
        Resolved frontendmentor.io challenges
      </MuiTypography>

      <Box
        sx={{
          display: 'block',
          width: '100%',
          height: '1px',
          marginTop: 1,
          background:
            'linear-gradient(90deg, rgba(106,190,205,1) 5%, rgba(62,84,163,1) 35%, rgba(207,99,144,1) 65%, rgba(170,215,66,1) 95%)',
        }}
      />
    </Stack>
  )
}

export default Title
