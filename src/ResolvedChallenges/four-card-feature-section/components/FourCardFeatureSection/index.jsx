// MUI
import MuiBox from '@mui/material/Box'
import MuiGrid from '@mui/material/Grid'
import MuiStack from '@mui/material/Stack'
import MuiContainer from '@mui/material/Container'
import MuiTypography from '@mui/material/Typography'
// Components
import Card from '../Card'
// Images
import supervisor from '../../images/icon-supervisor.svg'
import builder from '../../images/icon-team-builder.svg'
import karma from '../../images/icon-karma.svg'
import calculator from '../../images/icon-calculator.svg'

const cardsData = [
  {
    title: 'Supervisor',
    text: 'Monitors activity to identify project roadblocks',
    image: supervisor,
    borderColor: 'hsl(180, 62%, 55%)',
  },
  {
    title: 'Team Builder',
    text: 'Scans our talent network to create the optimal team for your project',
    image: builder,
    borderColor: 'hsl(0, 78%, 62%)',
  },
  {
    title: 'Karma',
    text: 'Regularly evaluates our talent to ensure quality',
    image: karma,
    borderColor: 'hsl(34, 97%, 64%)',
  },
  {
    title: 'Calculator',
    text: 'Uses data from past projects to provide better delivery estimates',
    image: calculator,
    borderColor: 'hsl(212, 86%, 64%)',
  },
]

const FourCardFeatureSection = () => {
  return (
    <MuiContainer>
      <MuiStack sx={{ padding: ' 0 0 4em' }} direction="column" alignItems="center">
        <MuiBox sx={{ maxWidth: '35em' }}>
          <MuiTypography
            sx={{ color: 'text.primary', textAlign: 'center', fontWeight: 200 }}
            variant="h1"
            component="h1"
            gutterBottom
          >
            Reliable, efficient delivery
          </MuiTypography>
          <MuiTypography
            sx={{ marginBottom: '1em', color: 'text.primary', textAlign: 'center', fontWeight: 600 }}
            variant="h1"
            gutterBottom
          >
            Powered by Technology
          </MuiTypography>
          <MuiTypography sx={{ color: 'text.secondary', textAlign: 'center' }} variant="subtitle1" gutterBottom>
            Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is
            successful
          </MuiTypography>
        </MuiBox>
      </MuiStack>

      <MuiGrid container spacing={4} direction="row" justifyContent="center" alignItems="center">
        <MuiGrid item container xs={12} md={4} justifyContent="center">
          <Card
            title={cardsData[0].title}
            text={cardsData[0].text}
            image={cardsData[0].image}
            borderColor={cardsData[0].borderColor}
          />
        </MuiGrid>

        <MuiGrid item container xs={12} md={4} spacing={4}>
          <MuiGrid item container xs={12} justifyContent="center">
            <Card
              title={cardsData[1].title}
              text={cardsData[1].text}
              image={cardsData[1].image}
              borderColor={cardsData[1].borderColor}
            />
          </MuiGrid>
          <MuiGrid item container xs={12} justifyContent="center">
            <Card
              title={cardsData[2].title}
              text={cardsData[2].text}
              image={cardsData[2].image}
              borderColor={cardsData[2].borderColor}
            />
          </MuiGrid>
        </MuiGrid>

        <MuiGrid item container xs={12} md={4} justifyContent="center">
          <Card
            title={cardsData[3].title}
            text={cardsData[3].text}
            image={cardsData[3].image}
            borderColor={cardsData[3].borderColor}
          />
        </MuiGrid>
      </MuiGrid>
    </MuiContainer>
  )
}

export default FourCardFeatureSection
