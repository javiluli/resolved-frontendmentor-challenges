// MUI
import { styled } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import MuiCardContent from '@mui/material/CardContent'
import StarRoundedIcon from '@mui/icons-material/StarRounded'

const MuiCardResponsive = styled(MuiCard)(({ theme }) => ({
  width: '100%',

  [theme.breakpoints.up('lg')]: {
    width: 420,
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
    <MuiCardResponsive sx={{ backgroundColor: 'background.paper' }}>
      <MuiCardContentResponsive>
        <MuiStack direction="row" justifyContent="center" alignItems="center">
          <StarRoundedIcon sx={{ color: '#EC9643' }} />
          <StarRoundedIcon sx={{ color: '#EC9643' }} />
          <StarRoundedIcon sx={{ color: '#EC9643' }} />
          <StarRoundedIcon sx={{ color: '#EC9643' }} />
          <StarRoundedIcon sx={{ color: '#EC9643' }} />
        </MuiStack>

        <MuiTypography sx={{ color: 'primary.main', textAlign: 'center' }} variant="body1" component="p">
          {text}
        </MuiTypography>
      </MuiCardContentResponsive>
    </MuiCardResponsive>
  )
}

export default StatsSection
