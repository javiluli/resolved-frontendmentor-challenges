import MuiBox from '@mui/material/Box'

interface ImageComponentProps {
  src: string
  alt: string
}

function ImageComponent({ src, alt }: ImageComponentProps) {
  return (
    <MuiBox
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: '100%',
        height: 'auto',
      }}
    />
  )
}

export default ImageComponent
