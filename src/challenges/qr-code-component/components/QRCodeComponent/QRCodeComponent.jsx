import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiTypography from '@mui/material/Typography'

import imgQRCode from '../../assets/images/qr-code.svg'
import { BoxAnimation } from './BoxAnimation'

const QRCodeComponent = () => {
  return (
    <MuiCard
      elevation={1}
      sx={{
        maxWidth: 300,
        padding: '1em',
        backgroundColor: 'background.paper',
        borderRadius: '2em',
      }}
    >
      <MuiCardContent
        sx={{
          position: 'relative',
          padding: '1em',
          backgroundColor: 'primary.main',
          borderRadius: '1.35em',
          overflow: 'hidden',
        }}
      >
        <MuiCardMedia sx={{ position: 'relative', zIndex: 100 }} component="img" image={imgQRCode} />

        <BoxAnimation top={-40} left={-90} width={240} height={240} time={8} />
        <BoxAnimation top={170} left={150} width={190} height={190} time={12} />
      </MuiCardContent>
      <MuiCardContent>
        <MuiTypography sx={{ textAlign: 'center', fontWeight: 700 }} variant="h6" color="text.primary">
          Inprove your front-end skills by building projects
        </MuiTypography>
        <MuiTypography sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </MuiTypography>
      </MuiCardContent>
    </MuiCard>
  )
}

export default QRCodeComponent
