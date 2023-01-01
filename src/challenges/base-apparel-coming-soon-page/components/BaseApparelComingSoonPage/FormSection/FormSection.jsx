import MuiArrowIcon from '@mui/icons-material/ArrowForwardIosRounded'
import MuiErrorIcon from '@mui/icons-material/ErrorRounded'
import MuiBox from '@mui/material/Box'
import MuiIconButton from '@mui/material/IconButton'
import MuiInputAdornment from '@mui/material/InputAdornment'
import MuiStack from '@mui/material/Stack'
import MuiTextField from '@mui/material/TextField'
import { useState } from 'react'

const Form = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)
  // regex para validar un email
  const regexValidEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim

  const handleClick = () => {
    if (!regexValidEmail.test(value)) {
      return setError('Please provider a valid email')
    }
    setError(null)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <MuiBox sx={{ width: '100%' }}>
      <MuiStack sx={{ position: 'relative' }} direction="row" spacing={2}>
        <MuiTextField
          id="inpt-email"
          placeholder="Email Address"
          onChange={handleChange}
          helperText={error}
          error={!!error}
          InputProps={{
            endAdornment: (
              <MuiInputAdornment position="end">{error && <MuiErrorIcon sx={{ marginRight: 9, color: 'error.main' }} />}</MuiInputAdornment>
            ),
          }}
          fullWidth
        />

        <MuiBox sx={{ position: 'absolute', top: 0, right: 0 }}>
          <MuiIconButton sx={{ padding: '15px 1em', color: '#fff' }} aria-label="arrow" value={value} onClick={handleClick}>
            <MuiArrowIcon />
          </MuiIconButton>
        </MuiBox>
      </MuiStack>
    </MuiBox>
  )
}

export default Form
