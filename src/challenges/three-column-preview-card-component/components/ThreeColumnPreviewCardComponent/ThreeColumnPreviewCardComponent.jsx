import MuiBox from '@mui/material/Box'
import MuiStack from '@mui/material/Stack'

import imgIconLuxury from '../../assets/images/icon-luxury.svg'
import imgIconSedans from '../../assets/images/icon-sedans.svg'
import imgIconSuvs from '../../assets/images/icon-suvs.svg'
import { PreviewCard } from './PreviewCard'

const dataComponent = [
  {
    icon: imgIconSedans,
    title: 'Sedans',
    paragraph: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    color: 'hsl(31, 77%, 52%)',
  },
  {
    icon: imgIconSuvs,
    title: 'SUVs',
    paragraph:
      '  Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    color: 'hsl(184, 100%, 22%)',
  },
  {
    icon: imgIconLuxury,
    title: 'Luxury',
    paragraph:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    color: 'hsl(179, 100%, 13%)',
  },
]

const ThreeColumnPreviewCardComponent = () => {
  return (
    <MuiBox sx={{ py: 4 }}>
      <MuiStack direction={{ sm: 'column', md: 'row' }}>
        {dataComponent.map(({ icon, title, paragraph, color }, index) => (
          <PreviewCard key={index} icon={icon} title={title} paragraph={paragraph} color={color} />
        ))}
      </MuiStack>
    </MuiBox>
  )
}

export default ThreeColumnPreviewCardComponent
