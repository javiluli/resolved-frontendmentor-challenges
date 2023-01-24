import MuiContainer from '@mui/material/Container'
import MuiGrid from '@mui/material/Grid'
import MuiStack from '@mui/material/Stack'

import data from '../../data'
import { ProfileCard } from './ProfileCard'
import { TimeCard } from './TimeCard'

const TimeTrackingDashboard = () => {
  return (
    <MuiContainer sx={{ maxWidth: { xl: 'lg' }, my: 4 }}>
      <MuiStack alignItems="center" spacing={2}>
        <MuiGrid
          container
          direction={{ xs: 'column', lg: 'row' }}
          justifyContent={{ xs: 'center', lg: 'flex-start' }}
          alignItems={{ xs: 'center', lg: 'normal' }}
          spacing={4}
        >
          <MuiGrid item xs={3}>
            <ProfileCard name="Jeremy Robson" />
          </MuiGrid>

          <MuiGrid item container xs direction="row" justifyContent="center" alignItems="center" spacing={4}>
            {data.map((element, index) => (
              <MuiGrid item key={index} xs={12} lg={4}>
                <MuiStack alignItems="center">
                  <TimeCard data={element} />
                </MuiStack>
              </MuiGrid>
            ))}
          </MuiGrid>
        </MuiGrid>
      </MuiStack>
    </MuiContainer>
  )
}

export default TimeTrackingDashboard
