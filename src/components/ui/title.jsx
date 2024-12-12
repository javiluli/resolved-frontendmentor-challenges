import { Stack } from '@mui/material'
import MuiTypography from '@mui/material/Typography'

// eslint-disable-next-line react/prop-types
export const Title = ({ children }) => {
  return (
    <Stack>
      <MuiTypography
        component="h1"
        variant="h6"
        sx={{
          width: 'fit-content',
          background: 'linear-gradient(90deg, #6abecd 5%, #3e54a3 35%, #cf6390 65%, #aad742 95%)',
          color: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {children}
      </MuiTypography>
    </Stack>
  )
}
