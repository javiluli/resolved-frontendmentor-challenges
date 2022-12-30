import MuiBox from '@mui/material/Box'
import MuiDivider from '@mui/material/Divider'
import MuiPaper from '@mui/material/Paper'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

import { ListOfBar } from './ListOfBar'

const Body = () => {
  return (
    <MuiPaper elevation={1} sx={{ px: 3, py: 3, pb: 4, backgroundColor: 'background.main', borderRadius: 4 }}>
      <MuiStack justifyContent="space-between" spacing={2}>
        <MuiStack>
          <MuiTypography variant="h5" color="custom.brown.dark" sx={{ fontWeight: 700 }} gutterBottom>
            Spending - Last 7 days
          </MuiTypography>
        </MuiStack>

        <ListOfBar />

        <MuiDivider />

        <MuiStack direction="row" justifyContent="space-between" alignItems="flex-end">
          <MuiBox>
            <MuiTypography variant="body2" color="custom.brown.main">
              Total this month
            </MuiTypography>

            <MuiTypography variant="h4" color="custom.brown.dark" sx={{ fontWeight: 700 }}>
              $478.33
            </MuiTypography>
          </MuiBox>

          <MuiBox>
            <MuiTypography color="custom.brown.dark" textAlign="right" sx={{ fontWeight: 700 }}>
              +2.4%
            </MuiTypography>

            <MuiTypography variant="body2" color="custom.brown.main" textAlign="right">
              from last month
            </MuiTypography>
          </MuiBox>
        </MuiStack>
      </MuiStack>
    </MuiPaper>
  )
}

export default Body
