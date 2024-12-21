import { Stack } from '@mui/material'
import MuiTypography from '@mui/material/Typography'

import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}

export const Title = ({ children }: TitleProps) => {
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
