/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import MuiChip from '@mui/material/Chip'

const DifficultyTag = ({ difficulty }) => {
  const { description, level } = difficulty

  return (
    <MuiChip
      label={`${description}`}
      variant="filled"
      size="small"
      sx={{ bgcolor: `difficultyTags.${description}`, borderColor: `difficultyTags.${description}` }}
    />
  )
}

export default DifficultyTag
