// CSS and custom theme
import './styles.css'
import theme from './theme'
// MUI
import MuiBox from '@mui/material/Box'
import MuiGrid from '@mui/material/Grid'
// Component from challengers
import Card from './components/Card'
// Commom components
import MainChallengeContainer from '@/components/MainChallengeContainer'
// Images
import img__iconSedans from './images/icon-sedans.svg'
import img__iconSuvs from './images/icon-suvs.svg'
import img__iconLuxury from './images/icon-luxury.svg'

const dataComponent = [
  {
    icon: img__iconSedans,
    title: 'Sedans',
    paragraph:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    color: 'hsl(31, 77%, 52%)',
  },
  {
    icon: img__iconSuvs,
    title: 'SUVs',
    paragraph:
      '  Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    color: 'hsl(184, 100%, 22%)',
  },
  {
    icon: img__iconLuxury,
    title: 'Luxury',
    paragraph:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    color: 'hsl(179, 100%, 13%)',
  },
]

const Index = () => {
  return (
    <MainChallengeContainer theme={theme}>
      <MuiBox>
        <MuiGrid container sx={{ justifyContent: 'center' }}>
          {dataComponent.map(({ icon, title, paragraph, color }) => (
            <MuiGrid item>
              <Card icon={icon} title={title} paragraph={paragraph} color={color} />
            </MuiGrid>
          ))}
        </MuiGrid>
      </MuiBox>
    </MainChallengeContainer>
  )
}

export default Index
