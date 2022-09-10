// MUI
import MuiBox from '@mui/material/Box'
// Images
import illustrationMockups from '../../../images/illustration-mockups.svg'

const Banner = () => {
  return (
    <MuiBox>
      <MuiBox
        sx={{
          width: '100%',
        }}
        component="img"
        alt="Image"
        src={illustrationMockups}
      />
    </MuiBox>
  )
}

export default Banner
