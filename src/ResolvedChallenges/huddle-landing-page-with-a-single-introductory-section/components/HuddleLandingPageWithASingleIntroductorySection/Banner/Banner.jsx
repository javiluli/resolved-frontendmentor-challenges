import MuiBox from '@mui/material/Box'

import imgIllustrationMockups from '../../../assets/images/illustration-mockups.svg'

const Banner = () => {
  return (
    <MuiBox
      sx={{
        width: '100%',
      }}
      component="img"
      alt="Image"
      src={imgIllustrationMockups}
    />
  )
}

export default Banner
