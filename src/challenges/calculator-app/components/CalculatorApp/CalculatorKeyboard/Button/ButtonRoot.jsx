import MuiButton from '@mui/material/Button'
import { styled } from '@mui/material/styles'

export default styled(MuiButton)(({ theme, ownerState }) => {
  const { palette, functions } = theme
  const { variant } = ownerState

  const { keysColors, text } = palette
  const { pxToRem } = functions

  const normalStyles = () => {
    return {
      color: text.primary,
      backgroundColor: keysColors.keyBackground__3,
      boxShadow: `0 ${pxToRem(4)} 0 ${keysColors.keyShadow_3}`,

      '&:hover': {
        backgroundColor: keysColors.keyBackground__3_hover,
      },

      '&:active': {
        boxShadow: 'none',
        transform: `translateY(${pxToRem(4)})`,
      },
    }
  }

  const resetStyles = () => {
    return {
      color: text.secondary,
      backgroundColor: keysColors.keyBackground__1,
      boxShadow: `0 ${pxToRem(4)} 0 ${keysColors.keyShadow__1}`,

      '&:hover': {
        backgroundColor: keysColors.keyBackground__1_hover,
      },

      '&:active': {
        boxShadow: 'none',
        transform: `translateY(${pxToRem(4)})`,
      },
    }
  }

  const equalStyles = () => {
    return {
      color: text.secondary,
      backgroundColor: keysColors.keyBackground__2,
      boxShadow: `0 ${pxToRem(4)} 0 ${keysColors.keyShadow__2}`,

      '&:hover': {
        backgroundColor: keysColors.keyBackground__2_hover,
      },

      '&:active': {
        boxShadow: 'none',
        transform: `translateY(${pxToRem(4)})`,
      },
    }
  }

  return {
    ...(variant === 'normal' && normalStyles()),
    ...(variant === 'reset' && resetStyles()),
    ...(variant === 'equal' && equalStyles()),
  }
})
