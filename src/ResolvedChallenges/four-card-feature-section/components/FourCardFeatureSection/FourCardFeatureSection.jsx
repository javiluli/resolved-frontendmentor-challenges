import MuiBox from '@mui/material/Box'
import MuiContainer from '@mui/material/Container'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

import calculator from '../../assets/images/icon-calculator.svg'
import karma from '../../assets/images/icon-karma.svg'
import supervisor from '../../assets/images/icon-supervisor.svg'
import builder from '../../assets/images/icon-team-builder.svg'
import { CardFeature } from './CardFeature'

const dataComponent = {
  SUPERVISOR: {
    title: 'Supervisor',
    text: 'Monitors activity to identify project roadblocks',
    image: supervisor,
    borderColor: 'hsl(180, 62%, 55%)',
  },
  BUILDER: {
    title: 'Team Builder',
    text: 'Scans our talent network to create the optimal team for your project',
    image: builder,
    borderColor: 'hsl(0, 78%, 62%)',
  },
  KARMA: {
    title: 'Karma',
    text: 'Regularly evaluates our talent to ensure quality',
    image: karma,
    borderColor: 'hsl(34, 97%, 64%)',
  },
  CALCULATOR: {
    title: 'Calculator',
    text: 'Uses data from past projects to provide better delivery estimates',
    image: calculator,
    borderColor: 'hsl(212, 86%, 64%)',
  },
}

const FourCardFeatureSection = () => {
  return (
    <MuiContainer sx={{ px: 2, py: 5 }}>
      <MuiStack sx={{ paddingBottom: 6 }} direction="column" alignItems="center">
        <MuiBox sx={{ maxWidth: '35em' }}>
          <MuiTypography variant="h4" component="h1" textAlign="center" color="text.primary" sx={{ fontWeight: 200 }} gutterBottom>
            Reliable, efficient delivery
          </MuiTypography>
          <MuiTypography variant="h4" color="text.primary" textAlign="center" sx={{ fontWeight: 600 }} gutterBottom>
            Powered by Technology
          </MuiTypography>
          <MuiTypography variant="subtitle1" color="text.secondary" textAlign="center" sx={{ fontWeight: 200 }} gutterBottom>
            Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
          </MuiTypography>
        </MuiBox>
      </MuiStack>

      <MuiStack direction={{ xs: 'column', lg: 'row' }} justifyContent="center" alignItems="center" spacing={4}>
        <CardFeature
          title={dataComponent.SUPERVISOR.title}
          text={dataComponent.SUPERVISOR.text}
          image={dataComponent.SUPERVISOR.image}
          borderColor={dataComponent.SUPERVISOR.borderColor}
        />

        <MuiStack spacing={4}>
          <MuiStack>
            <CardFeature
              title={dataComponent.BUILDER.title}
              text={dataComponent.BUILDER.text}
              image={dataComponent.BUILDER.image}
              borderColor={dataComponent.BUILDER.borderColor}
            />
          </MuiStack>
          <MuiStack>
            <CardFeature
              title={dataComponent.KARMA.title}
              text={dataComponent.KARMA.text}
              image={dataComponent.KARMA.image}
              borderColor={dataComponent.KARMA.borderColor}
            />
          </MuiStack>
        </MuiStack>

        <CardFeature
          title={dataComponent.CALCULATOR.title}
          text={dataComponent.CALCULATOR.text}
          image={dataComponent.CALCULATOR.image}
          borderColor={dataComponent.CALCULATOR.borderColor}
        />
      </MuiStack>
    </MuiContainer>
  )
}

export default FourCardFeatureSection
