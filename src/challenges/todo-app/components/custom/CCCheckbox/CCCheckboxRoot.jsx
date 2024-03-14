// @mui material components
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material/styles'

export default styled(Checkbox)(({ theme, ownerState }) => {
  console.log
  const { palette } = theme
  const { color, darkMode } = ownerState

  const { white } = palette

  // color value
  let colorValue = color === 'inherit' || !palette[color] ? 'inherit' : palette[color].main

  if (darkMode && (color === 'inherit' || !palette[color])) {
    colorValue = 'inherit'
  } else if (darkMode && color === 'dark') colorValue = white.main

  return {
    color: colorValue,
  }
})
