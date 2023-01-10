import MuiGrid from '@mui/material/Grid'

import iconFacebook from '../../../assets/images/icon-facebook.svg'
import iconInstagram from '../../../assets/images/icon-instagram.svg'
import iconTwitter from '../../../assets/images/icon-twitter.svg'
import iconYoutube from '../../../assets/images/icon-youtube.svg'
import { SocialMediaCard } from './SocialMediaCard'

const data = [
  {
    icon: iconFacebook,
    userName: '@nathanf',
    numberFollowers: '1987',
    numberFollowersToday: '12',
    socialMediaName: 'facebook',
    moreFollowers: true,
  },
  {
    icon: iconTwitter,
    userName: '@nathanf',
    numberFollowers: '1044',
    numberFollowersToday: '99',
    socialMediaName: 'twitter',
    moreFollowers: true,
  },
  {
    icon: iconInstagram,
    userName: '@realnathanf',
    numberFollowers: '11k',
    numberFollowersToday: '1099',
    socialMediaName: 'instagram',
    moreFollowers: true,
  },
  {
    icon: iconYoutube,
    userName: 'Nathan F.',
    numberFollowers: '1987',
    numberFollowersToday: '144',
    socialMediaName: 'youtube',
    moreFollowers: false,
  },
]

const PrimarySection = () => {
  return (
    <MuiGrid container spacing={4}>
      {data.map((item) => (
        <MuiGrid key={item.socialMediaName} item xs={12} sm={6} md={3}>
          <SocialMediaCard data={item} />
        </MuiGrid>
      ))}
    </MuiGrid>
  )
}

export default PrimarySection
