import MuiGrid from '@mui/material/Grid'

import iconFacebook from '../../../../assets/images/icon-facebook.svg'
import iconInstagram from '../../../../assets/images/icon-instagram.svg'
import iconTwitter from '../../../../assets/images/icon-twitter.svg'
import iconYoutube from '../../../../assets/images/icon-youtube.svg'
import { OverviewTodayCard } from './OverviewTodayCard'

const data = [
  {
    socialMediaName: 'facebook',
    icon: iconFacebook,
    visits: {
      title: 'Page Views',
      counter: '87',
      percentage: '-2',
    },
    likes: {
      title: 'Likes',
      counter: '52',
      percentage: '-2',
    },
  },
  {
    socialMediaName: 'twitter',
    icon: iconTwitter,
    visits: {
      title: 'Retweets',
      counter: '117',
      percentage: '+303',
    },
    likes: {
      title: 'Likes',
      counter: '507',
      percentage: '+553',
    },
  },
  {
    socialMediaName: 'instagram',
    icon: iconInstagram,
    visits: {
      title: 'Profile Views',
      counter: '52k',
      percentage: '+1375',
    },
    likes: {
      title: 'Likes',
      counter: '5462',
      percentage: '+2257',
    },
  },
  {
    socialMediaName: 'youtube',
    icon: iconYoutube,
    visits: {
      title: 'Total Views',
      counter: '1407',
      percentage: '-12',
    },
    likes: {
      title: 'Likes',
      counter: '107',
      percentage: '-19',
    },
  },
]

const ListOverviewTodayCard = () => {
  return (
    <MuiGrid container spacing={4}>
      {data.map((item, index) => (
        <MuiGrid key={index} item container sm={12} md={6} spacing={4}>
          <MuiGrid item xs={12} sm={6}>
            <OverviewTodayCard socialMediaName={item.socialMediaName} icon={item.icon} data={item.visits} />
          </MuiGrid>

          <MuiGrid item xs={12} sm={6}>
            <OverviewTodayCard socialMediaName={item.socialMediaName} icon={item.icon} data={item.likes} />
          </MuiGrid>
        </MuiGrid>
      ))}
    </MuiGrid>
  )
}

export default ListOverviewTodayCard
