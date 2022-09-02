// MUI
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardHeader from '@mui/material/CardHeader'
import MuiCardMedia from '@mui/material/CardMedia'
import Avatar from '@mui/material/Avatar'

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
        <MuiStack direction="row" justifyContent="center" alignItems="center"></MuiStack>

        <MuiTypography sx={{ color: 'text.primary', padding: ' 0 0.75em' }} variant="body2" component="p">
          &ldquo; {comment} &rdquo;
        </MuiTypography>
      </MuiCardContent>
    </MuiCard>
  )
}

export default CommentsSection
