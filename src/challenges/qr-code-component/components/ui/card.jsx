import MuiBox from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiTypography from '@mui/material/Typography'

import imgQRCode from '../../assets/images/image-qr-code.png'
import { theme } from '../../theme'

const { borders, functions } = theme
const { borderRadius } = borders
const { pxToRem } = functions

export function Card() {
  return (
    <MuiCard elevation={1} sx={{ width: pxToRem(300) }}>
      <MuiBox sx={{ borderRadius: borderRadius.lg, overflow: 'hidden' }}>
        <MuiCardMedia component="img" image={imgQRCode} />
      </MuiBox>

      <MuiCardContent>
        <MuiTypography variant="h1" color="text.primary" align="center" sx={{ mb: pxToRem(16) }}>
          Improve your front-end skills by building projects
        </MuiTypography>

        <MuiTypography variant="subtitle1" align="center" color="text.secondary">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </MuiTypography>
      </MuiCardContent>
    </MuiCard>
  )
}
