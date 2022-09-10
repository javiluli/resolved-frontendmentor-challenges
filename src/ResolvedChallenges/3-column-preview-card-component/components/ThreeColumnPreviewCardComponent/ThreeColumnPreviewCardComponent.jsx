// MUI
import MuiBox from '@mui/material/Box'
import MuiGrid from '@mui/material/Grid'
// Component from challengers
import ColumnCard from './ColumnCard'
// Images icons
import iconSedans from '../../images/icon-sedans.svg'
import iconSuvs from '../../images/icon-suvs.svg'
import iconLuxury from '../../images/icon-luxury.svg'

const dataComponent = [
  {
    icon: iconSedans,
    title: 'Sedans',
    paragraph: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    color: 'hsl(31, 77%, 52%)',
  },
  {
    icon: iconSuvs,
    title: 'SUVs',
    paragraph:
      '  Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    color: 'hsl(184, 100%, 22%)',
  },
  {
    icon: iconLuxury,
    title: 'Luxury',
    paragraph:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    color: 'hsl(179, 100%, 13%)',
  },
]

const ThreeColumnPreviewCardComponent = () => {
  return (
    <MuiBox sx={{ py: 4 }}>
      <MuiGrid container sx={{ justifyContent: 'center' }}>
        {dataComponent.map(({ icon, title, paragraph, color }) => (
          <MuiGrid item>
            <ColumnCard icon={icon} title={title} paragraph={paragraph} color={color} />
          </MuiGrid>
        ))}
      </MuiGrid>
    </MuiBox>
  )
}

export default ThreeColumnPreviewCardComponent
