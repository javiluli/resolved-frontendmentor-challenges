import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

const DifficultyTag = ({ difficulty }) => {
  const { description, level, color } = difficulty

  return (
    <MuiBox>
      <MuiStack direction="row" justifyContent="space-between" sx={{ border: `1px solid ${color}`, borderRadius: 1.5, overflow: 'hidden' }}>
        <MuiBox>
          <MuiTypography variant="subtitle2" component="span" sx={{ px: 0.85, py: 0.65, color: '#fff', backgroundColor: color }}>
            {level}
          </MuiTypography>
        </MuiBox>
        <MuiBox>
          <MuiTypography variant="subtitle2" component="span" sx={{ px: 0.85, py: 0.65, color: color }}>
            {description}
          </MuiTypography>
        </MuiBox>
      </MuiStack>
    </MuiBox>
  )
}

export default DifficultyTag
