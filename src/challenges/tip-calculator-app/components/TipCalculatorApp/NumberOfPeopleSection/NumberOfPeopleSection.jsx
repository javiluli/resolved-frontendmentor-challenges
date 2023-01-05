import MuiPersonRoundedIcon from '@mui/icons-material/PersonRounded'
import MuiBox from '@mui/material/Box'
import MuiInputAdornment from '@mui/material/InputAdornment'
import MuiStack from '@mui/material/Stack'
import MuiTextField from '@mui/material/TextField'
import MuiTypography from '@mui/material/Typography'
import { useState } from 'react'

function NumberOfPeopleSection({ people, onSetPeople }) {
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    validateValue(e.target.value)
  }

  const validateValue = (value) => {
    const regex = /^[0-9]+$/
    if (parseInt(value) === 0) {
      return setError("Can't be zero")
    }

    if (value === '' || regex.test(value)) {
      onSetPeople(value)
    }
    setError(null)
  }

  return (
    <MuiBox>
      <MuiStack direction="row" justifyContent="space-between">
        <MuiTypography variant="subtitle2" gutterBottom>
          Number of People
        </MuiTypography>
        {error && (
          <MuiTypography variant="subtitle2" color="error" gutterBottom>
            Can't be zero
          </MuiTypography>
        )}
      </MuiStack>
      <MuiTextField
        name="people"
        size="small"
        fullWidth
        placeholder="0"
        value={people}
        error={!!error}
        sx={{
          input: { textAlign: 'right' },
        }}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <MuiInputAdornment position="start">
              <MuiPersonRoundedIcon sx={{ color: 'hsl(184, 14%, 56%)' }} />
            </MuiInputAdornment>
          ),
        }}
      />
    </MuiBox>
  )
}

export default NumberOfPeopleSection
