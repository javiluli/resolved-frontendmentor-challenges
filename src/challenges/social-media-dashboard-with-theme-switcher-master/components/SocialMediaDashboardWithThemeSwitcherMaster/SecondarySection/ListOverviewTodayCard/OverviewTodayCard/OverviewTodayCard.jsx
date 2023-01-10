import MuiBox from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

import iconDown from '../../../../../assets/images/icon-down.svg'
import iconUp from '../../../../../assets/images/icon-up.svg'

const OverviewTodayCard = ({ socialMediaName, icon, data }) => {
  const { title, counter, percentage } = data

  return (
    <MuiCard sx={{ width: '100%' }} elevation={0}>
      <MuiCardContent sx={{ px: 4, py: 3, '&:last-child': { px: 4, py: 3 } }}>
        <MuiStack spacing={3}>
          <MuiStack direction="row" justifyContent="space-between" alignItems="center">
            <MuiTypography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700 }}>
              {title}
            </MuiTypography>
            <MuiCardMedia component="img" image={icon} alt={`Icon social media - ${socialMediaName}`} sx={{ width: 20, height: 20 }} />
          </MuiStack>

          <MuiStack direction="row" justifyContent="space-between" alignItems="center">
            <MuiTypography variant="h4" component="h1" sx={{ textAlign: 'center', fontWeight: 700 }}>
              {counter}
            </MuiTypography>

            <MuiStack direction="row" justifyContent="center" alignItems="center" spacing={0.5}>
              <MuiBox
                component="img"
                src={Math.sign(percentage) >= 0 ? iconUp : iconDown}
                alt="The house from the offer."
                sx={{
                  width: 10,
                }}
              />

              <MuiTypography
                variant="caption"
                sx={{
                  color: Math.sign(percentage) >= 0 ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)',
                  textAlign: 'center',
                  fontWeight: 700,
                }}
              >
                {percentage}
              </MuiTypography>
            </MuiStack>
          </MuiStack>
        </MuiStack>
      </MuiCardContent>
    </MuiCard>
  )
}

export default OverviewTodayCard
