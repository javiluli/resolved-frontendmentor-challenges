import Avatar from '@mui/material/Avatar'
import MuiBox from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

import iconDown from '../../../assets/images/icon-down.svg'
import iconUp from '../../../assets/images/icon-up.svg'

const SOCIAL_MEDIA_NAME = ['facebook', 'instagram', 'twitter']
const SOCIAL_MEDIA_COLOR = {
  facebook: ' hsl(208, 92%, 53%)',
  twitter: 'hsl(203, 89%, 53%)',
  instagram: 'linear-gradient(90deg, hsl(37, 97%, 70%) 0%, hsl(329, 70%, 58%) 100%)',
  youtube: 'hsl(348, 97%, 39%)',
}

const CardFollowers = ({ data }) => {
  const { icon, userName, numberFollowers, numberFollowersToday, socialMediaName, moreFollowers } = data

  const socialMedia = SOCIAL_MEDIA_NAME.includes(socialMediaName) ? 'FOLLOWERS' : 'SUBSCRIBERS'

  return (
    <Card sx={{ width: '100%' }} elevation={0}>
      <MuiBox
        sx={{
          display: 'block',
          width: '100%',
          height: 4,
          background: SOCIAL_MEDIA_COLOR[socialMediaName],
        }}
      />
      <CardHeader
        avatar={
          <Avatar aria-label="social-media" sx={{ width: 20, height: 20, bgcolor: 'transparent', borderRadius: 0 }}>
            <CardMedia component="img" image={icon} alt={`Icon social media - ${socialMediaName}`} />
          </Avatar>
        }
        title={
          <MuiTypography variant="caption" component="span" sx={{ fontWeight: 700 }}>
            {userName}
          </MuiTypography>
        }
        sx={{ justifyContent: 'center' }}
      />
      <CardContent>
        <MuiTypography variant="h3" component="h1" sx={{ textAlign: 'center', fontWeight: 700 }}>
          {numberFollowers}
        </MuiTypography>
        <MuiTypography variant="overline" component="p" gutterBottom sx={{ textAlign: 'center', letterSpacing: 4 }}>
          {socialMedia}
        </MuiTypography>

        <MuiStack direction="row" justifyContent="center" alignItems="center" spacing={0.5}>
          <MuiBox
            component="img"
            src={moreFollowers ? iconUp : iconDown}
            alt="The house from the offer."
            sx={{
              width: 10,
            }}
          />

          <MuiTypography
            variant="caption"
            sx={{
              color: moreFollowers ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)',
              textAlign: 'center',
              fontWeight: 700,
            }}
          >
            {numberFollowersToday} Today
          </MuiTypography>
        </MuiStack>
      </CardContent>
    </Card>
  )
}

export default CardFollowers
