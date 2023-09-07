import MuiChip from '@mui/material/Chip'

const DifficultyTag = ({ difficulty }) => {
  const { description, level } = difficulty

  return (
    <MuiChip
      label={`${level} | ${description}`}
      variant="filled"
      size="small"
      sx={{ bgcolor: `difficultyTags.${description}`, borderColor: `difficultyTags.${description}` }}
    />
  )
}

export default DifficultyTag
