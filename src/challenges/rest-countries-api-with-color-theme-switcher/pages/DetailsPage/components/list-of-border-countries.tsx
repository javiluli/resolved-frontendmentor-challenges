import MuiBox from '@mui/material/Box'
import MuiChip from '@mui/material/Chip'

interface ListOfBorderCountriesProps {
  list: string[]
}

function ListOfBorderCountries({ list }: ListOfBorderCountriesProps) {
  return list.map((item) => (
    <MuiBox key={item}>
      <MuiChip
        label={item.toLowerCase()}
        sx={{
          height: 28,
          px: 1,
          backgroundColor: 'background.paper',
          borderRadius: 1,
          boxShadow: '0 0 6px hsla(200, 15%, 8%, 0.15)',
          textTransform: 'capitalize',
        }}
      />
    </MuiBox>
  ))
}

export default ListOfBorderCountries
