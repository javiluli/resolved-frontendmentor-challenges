import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

import { ListOverviewTodayCard } from './ListOverviewTodayCard'

const SecondarySection = () => {
  return (
    <MuiStack spacing={2}>
      <MuiTypography variant="h5" sx={{ color: 'text.secondary', fontWeight: 700 }} gutterBottom>
        Overview - Today
      </MuiTypography>

      <MuiBox>
        <ListOverviewTodayCard />
      </MuiBox>
    </MuiStack>
  )
}

export default SecondarySection
