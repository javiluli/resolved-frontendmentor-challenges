// Others
import { useState } from 'react'
// MUI
import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiTypography from '@mui/material/Typography'
// Components
import CardHeader from './CardHeader'
import CardHeaderShare from './CardHeaderShare'
// Images
import drawers from '../../images/drawers.jpg'

const ArticlePreviewComponent = () => {
  const [share, setShare] = useState(false)

  return (
    <MuiCard
      sx={{
        maxWidth: 300,
        backgroundColor: 'background.paper',
        borderRadius: '0.5em',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <MuiCardContent sx={{ padding: 0 }}>
        <MuiCardMedia component="img" height="180" image={drawers} alt="Image" />
      </MuiCardContent>

      <MuiCardContent sx={{ padding: '2em 1.75em 0' }}>
        <MuiTypography variant="h1" color="text.primary" gutterBottom>
          Shift the overall look and feel by adding these wonderful touches to furniture in your home
        </MuiTypography>
        <MuiTypography variant="subtitle1" color="text.secondary" gutterBottom>
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips
          to help you make any room feel complete.
        </MuiTypography>
      </MuiCardContent>

      {!share ? <CardHeader onShare={setShare} /> : <CardHeaderShare onShare={setShare} />}
    </MuiCard>
  )
}

export default ArticlePreviewComponent
