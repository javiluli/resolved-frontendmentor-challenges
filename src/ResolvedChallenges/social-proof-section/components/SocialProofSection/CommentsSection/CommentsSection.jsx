import Avatar from '@mui/material/Avatar'
import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardHeader from '@mui/material/CardHeader'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiTypography from '@mui/material/Typography'

const CommentsSection = ({ avatar, name, comment }) => {
  return (
    <MuiCard sx={{ backgroundColor: 'primary.main' }}>
      <MuiCardHeader
        avatar={
          <Avatar aria-label="recipe">
            <MuiCardMedia component="img" image={avatar} alt="image" />
          </Avatar>
        }
        title={name}
        subheader="Verified Buyer"
      />

      <MuiCardContent>
        <MuiTypography variant="body1" sx={{ padding: '0.5rem 1rem' }}>
          &ldquo; {comment} &rdquo;
        </MuiTypography>
      </MuiCardContent>
    </MuiCard>
  )
}

export default CommentsSection
