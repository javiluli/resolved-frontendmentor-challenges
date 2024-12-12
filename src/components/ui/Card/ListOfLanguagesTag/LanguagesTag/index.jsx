/* eslint-disable react/prop-types */
import MuiChip from '@mui/material/Chip'

const LanguagesTag = ({ language }) => {
  return (
    <MuiChip
      label={language}
      variant="outlined"
      size="small"
      // sx={{ color: `languagesTags.${language}`, borderColor: `languagesTags.${language}` }}
      sx={{ bgcolor: `languagesTags.${language}`, borderColor: `languagesTags.${language}` }}
    />
  )
}

export default LanguagesTag
