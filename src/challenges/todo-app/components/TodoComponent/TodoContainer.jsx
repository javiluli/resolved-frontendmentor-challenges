import MuiStack from '@mui/material/Stack'

export function TodoContainer({ children }) {
  return (
    <MuiStack direction="row" justifyContent="space-between" alignItems="center">
      {children}
    </MuiStack>
  )
}
