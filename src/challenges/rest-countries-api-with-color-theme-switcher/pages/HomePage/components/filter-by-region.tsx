import { useMemo } from 'react'

import MuiClearIcon from '@mui/icons-material/Clear'
import MuiFormControl from '@mui/material/FormControl'
import MuiIconButton from '@mui/material/IconButton'
import MuiMenuItem from '@mui/material/MenuItem'
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select'

import { useMaterialUIController } from '../../../context'
import { Region } from '../../../types'

const regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

export function FilterByRegion() {
  const { state, setFilteredRegion, setClearFilteredRegion } = useMaterialUIController()
  const { filteredRegion } = state

  const handleChange = (event: SelectChangeEvent<typeof filteredRegion>) => {
    const {
      target: { value },
    } = event

    setFilteredRegion(value as Region)
  }

  const IconClear = useMemo(() => {
    return (
      filteredRegion &&
      (() => (
        <MuiIconButton disableRipple onClick={setClearFilteredRegion} sx={{ color: 'text.primary' }}>
          {<MuiClearIcon />}
        </MuiIconButton>
      ))
    )
  }, [filteredRegion, setClearFilteredRegion])

  return (
    <MuiFormControl sx={{ width: '100%', maxWidth: { mobile: 190, desktop: 210 } }}>
      <MuiSelect
        sx={{ bgcolor: 'background.paper' }}
        displayEmpty
        value={filteredRegion || ''}
        onChange={handleChange}
        IconComponent={IconClear}
        renderValue={(selected) => (selected ? selected : 'Filter by Region')}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {regions.map((regio) => (
          <MuiMenuItem key={regio} value={regio}>
            {regio}
          </MuiMenuItem>
        ))}
      </MuiSelect>
    </MuiFormControl>
  )
}
