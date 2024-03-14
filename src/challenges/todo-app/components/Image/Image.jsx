import MuiBox from '@mui/material/Box'

function Image({ src }) {
  return (
    <MuiBox
      component="img"
      sx={{
        height: 24,
        width: 24,
        maxHeight: { xs: 24, md: 24 },
        maxWidth: { xs: 24, md: 24 },
      }}
      src={src}
      alt="Icon sun"
    />
  )
}

export default Image
