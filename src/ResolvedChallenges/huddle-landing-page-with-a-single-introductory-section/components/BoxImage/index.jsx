// MUI
import Muibox from '@mui/material/Box'

const BoxImage = ({ img }) => {
  return (
    <Muibox
      sx={{
        width: '100%',
      }}
      component="img"
      alt="Image"
      src={img}
    />
  )
}

export default BoxImage
