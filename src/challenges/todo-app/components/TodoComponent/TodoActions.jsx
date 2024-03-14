import MuiStack from '@mui/material/Stack'

export function TodoActions({ children }) {
  return (
    <>
      <IconButton aria-label="delete">
        <CrossIcon />
      </IconButton>
    </>
  )
}
