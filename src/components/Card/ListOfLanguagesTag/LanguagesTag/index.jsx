import MuiBox from '@mui/material/Box'
import MuiTypography from '@mui/material/Typography'

const LanguagesTag = ({ language, color }) => {
  return (
    <MuiBox sx={{ border: `1px solid ${color}`, borderRadius: 1.5, overflow: 'hidden' }}>
      <MuiTypography align="center" sx={{ px: 0.85, py: 0.65, color: '#ffffff', backgroundColor: color }} variant="button" component="span">
        {language}
      </MuiTypography>
    </MuiBox>
  )
}

export default LanguagesTag
