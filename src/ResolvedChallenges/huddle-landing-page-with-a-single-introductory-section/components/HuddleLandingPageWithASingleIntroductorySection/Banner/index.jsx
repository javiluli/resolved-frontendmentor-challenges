// MUI
import MuiBox from '@mui/material/Box'
// components
import BoxImage from '../../BoxImage'
// Images
import illustrationMockups from '../../../images/illustration-mockups.svg'

const Banner = () => {
  return (
    <MuiBox>
      <BoxImage img={illustrationMockups} />
    </MuiBox>
  )
}

export default Banner
