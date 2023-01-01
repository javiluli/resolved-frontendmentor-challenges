import MuiBox from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import iconStart from '../../../assets/images/icon-star.svg'

const MuiCardResponsive = styled(MuiCard)(({ theme }) => ({
  width: '100%',

  [theme.breakpoints.up('lg')]: {
    width: 430,
  },
}))

const MuiCardContentResponsive = styled(MuiCardContent)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
  },
}))

const StatsSection = ({ text }) => {
  return (
    <MuiCardResponsive>
      <MuiCardContentResponsive>
        <MuiStack direction="row" justifyContent="center" alignItems="center">
          <MuiBox component="img" sx={{ height: 18, width: 18, mx: 0.5 }} alt="Icon start" src={iconStart} />
          <MuiBox component="img" sx={{ height: 18, width: 18, mx: 0.5 }} alt="Icon start" src={iconStart} />
          <MuiBox component="img" sx={{ height: 18, width: 18, mx: 0.5 }} alt="Icon start" src={iconStart} />
          <MuiBox component="img" sx={{ height: 18, width: 18, mx: 0.5 }} alt="Icon start" src={iconStart} />
          <MuiBox component="img" sx={{ height: 18, width: 18, mx: 0.5 }} alt="Icon start" src={iconStart} />
        </MuiStack>

        <MuiTypography variant="body1" color="primary.main" textAlign="center" sx={{ fontWeight: 700 }}>
          {text}
        </MuiTypography>
      </MuiCardContentResponsive>
    </MuiCardResponsive>
  )
}

export default StatsSection
