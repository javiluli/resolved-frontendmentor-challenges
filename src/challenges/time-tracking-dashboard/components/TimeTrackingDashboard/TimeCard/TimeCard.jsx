import MuiMoreHorizIcon from '@mui/icons-material/MoreHoriz'
import MuiBox from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardContent from '@mui/material/CardContent'
import MuiIconButton from '@mui/material/IconButton'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import { useEffect, useState } from 'react'

const TimeCard = ({ data }) => {
  const { title, time, lastWeek, color, icon } = data

  const [count, setCount] = useState('0')
  const number = time
  const duration = '1'

  useEffect(() => {
    let start = 0
    // first three numbers from props
    const end = parseInt(number.substring(0, 3))
    // if zero, return
    if (start === end) return

    // find duration per increment
    let totalMilSecDur = parseFloat(duration)
    let incrementTime = (totalMilSecDur / end) * 1000

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1
      setCount(String(start) + number.substring(3))
      if (start === end) clearInterval(timer)
    }, incrementTime)

    // dependency array
  }, [number, duration])

  return (
    <MuiCard
      sx={{
        position: 'relative',
        pt: 5,
        maxWidth: 330,
        width: '100%',
        bgcolor: color,
        borderRadius: 5,
      }}
    >
      <MuiBox
        component="img"
        sx={{
          position: 'absolute',
          top: -2,
          right: 15,
          width: '100%',
          maxWidth: { xs: 65, md: 65 },
        }}
        alt="The house from the offer."
        src={icon}
      />

      <MuiBox
        sx={{
          position: 'relative',
          bgcolor: 'hsl(235, 46%, 20%)',
          borderRadius: 5,
          '&:hover': {
            backgroundColor: 'hsl(235, 46%, 35%)',
            cursor: 'pointer',
          },
        }}
      >
        <MuiCardActions sx={{ px: 4, pt: 2 }}>
          <MuiStack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
            <MuiTypography color="text.primary">{title}</MuiTypography>

            <MuiIconButton aria-label="menu-options-">
              <MuiMoreHorizIcon sx={{ color: 'text.secondary' }} />
            </MuiIconButton>
          </MuiStack>
        </MuiCardActions>

        <MuiCardContent sx={{ px: 4, py: 0 }}>
          <MuiStack
            direction={{ xs: 'row', lg: 'column' }}
            justifyContent={{ xs: 'space-between', lg: 'flex-start' }}
            alignItems={{ xs: 'center', lg: 'normal' }}
            sx={{ width: '100%' }}
          >
            <MuiTypography variant="h4" color="text.primary" gutterBottom sx={{ fontWeight: 300 }}>
              {count}hrs
            </MuiTypography>
            <MuiTypography color="text.secondary">Lask Week - {lastWeek}hrs</MuiTypography>
          </MuiStack>
        </MuiCardContent>
      </MuiBox>
    </MuiCard>
  )
}

export default TimeCard
