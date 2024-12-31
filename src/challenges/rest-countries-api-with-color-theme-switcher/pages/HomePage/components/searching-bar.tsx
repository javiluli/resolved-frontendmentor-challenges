import MuiSearchIcon from '@mui/icons-material/Search'
import MuiBox from '@mui/material/Box'
import MuiInputAdornment from '@mui/material/InputAdornment'
import MuiTextField from '@mui/material/TextField'

import { useEffect, useState } from 'react'
import { useMaterialUIController } from '../../../context'
import { useDebounce } from '../../../hooks/useDebounce'

export function SearchingBar() {
  const [inputValue, setInputValue] = useState('')
  const debouncedSearchTerm = useDebounce(inputValue, 500)

  const { setSearchCountry } = useMaterialUIController()

  useEffect(() => {
    if (!debouncedSearchTerm) {
      setSearchCountry(null)
      return
    }
    setSearchCountry(debouncedSearchTerm)
  }, [debouncedSearchTerm, setSearchCountry])

  return (
    <MuiBox
      sx={{
        width: '100%',
        maxWidth: { desktop: 500 },
      }}
    >
      <MuiTextField
        id="Searching-bar"
        placeholder="Search for a country..."
        onChange={(e) => setInputValue(e.target.value)}
        InputProps={{
          startAdornment: (
            <MuiInputAdornment position="start">
              <MuiSearchIcon />
            </MuiInputAdornment>
          ),
        }}
        variant="outlined"
        fullWidth
      />
    </MuiBox>
  )
}
