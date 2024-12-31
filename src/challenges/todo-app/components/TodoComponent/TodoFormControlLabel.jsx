import { FormControlLabel } from '@mui/material'
import MuiStack from '@mui/material/Stack'

import CCCheckboxRoot from '../custom/CCCheckbox'

export function TodoActions({ children }) {
  return (
    <FormControlLabel
      control={
        <CCCheckboxRoot
          key={id}
          defaultChecked={isCompleted}
          checkedIcon={<IconCheck />}
          color="primary"
          onChange={() => handleChangeCompleted(id)}
        />
      }
      label={
        <Typography component={!isCompleted ? 'span' : 'del'} sx={{ lineHeight: 0 }}>
          {todoText}
        </Typography>
      }
      inputProps={{
        'aria-label': 'Checkbox A',
      }}
      sx={{ paddingX: 2, paddingY: 1, margin: 0 }}
    />
  )
}
