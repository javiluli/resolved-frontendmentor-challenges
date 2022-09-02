// Others
import { useState } from 'react'
// MUI
import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'
import MuiTextField from '@mui/material/TextField'
import MuiIconButton from '@mui/material/IconButton'
import MuiInputAdornment from '@mui/material/InputAdornment'
// MUI icons
import MuiArrowIcon from '@mui/icons-material/ArrowForwardIosRounded'
import MuiErrorIcon from '@mui/icons-material/ErrorRounded'

const Form = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState()
  // regex para validar un email
  const regex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim

  const handleClick = () => {
    if (!regex.test(value)) {
      return setError('Please provider a valid email')
    }
    setError()
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <MuiBox>
      <MuiStack sx={{ position: 'relative' }} direction="row" spacing={2}>
        <MuiTextField
          fullWidth
          id="inpt-email"
          placeholder="Email Address"
          onChange={handleChange}
          helperText={error}
          error={!!error}
          InputProps={{
            startAdornment: (
              <MuiInputAdornment position="start">
                {error && <MuiErrorIcon sx={{ color: 'error.main' }} />}
              </MuiInputAdornment>
            ),
          }}
        />

        <MuiBox sx={{ position: 'absolute', top: 0, right: 0 }}>
          <MuiIconButton
            sx={{ padding: '14px 1em', color: '#fff' }}
            aria-label="arrow"
            value={value}
            onClick={handleClick}
          >
            <MuiArrowIcon />
          </MuiIconButton>
        </MuiBox>
      </MuiStack>
    </MuiBox>
  )
}

export default Form
