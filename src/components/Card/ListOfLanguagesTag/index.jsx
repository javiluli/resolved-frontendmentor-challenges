// MUI
import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'
// Components
import LanguagesTag from './LanguagesTag'

const ListOfLanguagesTag = ({ languages }) => {
  return (
    <MuiBox sx={{ mb: 1 }}>
      <MuiStack direction="row" justifyContent="space-between" spacing={1}>
        {languages.map(({ language, color }, index) => (
          <LanguagesTag key={index} language={language} color={color} />
        ))}
      </MuiStack>
    </MuiBox>
  )
}

export default ListOfLanguagesTag
