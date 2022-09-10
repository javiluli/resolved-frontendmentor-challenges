import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiTypography from '@mui/material/Typography'
import BoxAnimation from './BoxAnimation'
import qrCode from '../../images/qr-code.svg'

const QRCodeComponent = () => {
  return (
    <MuiCard
      sx={{
        maxWidth: 340,
        padding: 2,
        backgroundColor: 'background.paper',
        borderRadius: 4,
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <MuiCardContent
        sx={{
          position: 'relative',
          padding: 6,
          backgroundColor: 'primary.main',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <MuiCardMedia sx={{ position: 'relative', zIndex: 1 }} component="img" image={qrCode} />

        <BoxAnimation top={-40} left={-90} width={240} height={240} time={9} />
        <BoxAnimation top={170} left={150} width={190} height={190} time={11} />
      </MuiCardContent>

      <MuiCardContent>
        <MuiTypography
          sx={{ textAlign: 'center', fontWeight: 700 }}
          variant="h5"
          component="h1"
          color="text.primary"
          gutterBottom
        >
          Inprove your front-end skills by building projects
        </MuiTypography>
        <MuiTypography
          sx={{ textAlign: 'center', fontWeight: 400 }}
          variant="subtitle1"
          component="p"
          color="text.secondary"
        >
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </MuiTypography>
      </MuiCardContent>
    </MuiCard>
  )
}

export default QRCodeComponent
