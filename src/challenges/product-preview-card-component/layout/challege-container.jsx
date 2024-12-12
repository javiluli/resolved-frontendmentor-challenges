import MuiStack from '@mui/material/Stack'

import { theme } from '../themes'

const { palette, functions } = theme

const { background } = palette
const { pxToRem } = functions

export function ChallegeContainer({ children }) {
  return (
    <MuiStack
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: '100vh',
        padding: `${pxToRem(16)} ${pxToRem(16)}`,
        backgroundColor: background.default,
      }}
    >
      {children}
    </MuiStack>
  )
}
