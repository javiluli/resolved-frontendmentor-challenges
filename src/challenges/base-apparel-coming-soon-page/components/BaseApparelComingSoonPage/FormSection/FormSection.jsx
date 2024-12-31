import { useState } from 'react'

import MuiArrowIcon from '@mui/icons-material/ArrowForwardIosRounded'
import MuiErrorIcon from '@mui/icons-material/ErrorRounded'
import MuiBox from '@mui/material/Box'
import MuiFormHelperText from '@mui/material/FormHelperText'
import MuiIconButton from '@mui/material/IconButton'
import MuiInputAdornment from '@mui/material/InputAdornment'
import MuiStack from '@mui/material/Stack'
import MuiTextField from '@mui/material/TextField'

import { ErrorMessage, Regex } from '../../../constants'

const Form = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  const handleClick = () => {
    if (!Regex.validateEmail.test(value)) {
      return setError(ErrorMessage.PROVIDE_VALID_EMAIL)
    }
    setError(null)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <MuiBox sx={{ width: '100%' }}>
      <MuiStack sx={{ position: 'relative' }} direction="row" spacing={2}>
        <MuiBox sx={{ width: '100%' }}>
          <MuiTextField
            data-testid="txt-email"
            placeholder="Email Address"
            value={value}
            onChange={handleChange}
            error={!!error}
            InputProps={{
              endAdornment: (
                <MuiInputAdornment position="end">
                  {error && <MuiErrorIcon sx={{ marginRight: 9, color: 'error.main' }} />}
                </MuiInputAdornment>
              ),
            }}
            fullWidth
          />
          <MuiFormHelperText data-testid="txt-email-helper-text" sx={{ marginLeft: 2 }}>
            {error}
          </MuiFormHelperText>
        </MuiBox>

        <MuiBox sx={{ position: 'absolute', top: 0, right: 0 }}>
          <MuiIconButton data-testid="btn-submit" aria-label="arrow" onClick={handleClick} sx={{ padding: '15px 1em', color: '#fff' }}>
            <MuiArrowIcon />
          </MuiIconButton>
        </MuiBox>
      </MuiStack>
    </MuiBox>
  )
}

export default Form
