import MuiStack from '@mui/material/Stack'
import PropTypes from 'prop-types'
import { theme } from '../../themes'

export function ChallengeContainer({
  children,
  justifyContent = 'center',
  alignItems = 'center',
  minHeight = '100vh',
  padding = 16,
  backgroundColor,
}) {
  const { palette, functions } = theme
  const { pxToRem } = functions

  const defaultBackgroundColor = palette.background.default

  return (
    <MuiStack
      justifyContent={justifyContent}
      alignItems={alignItems}
      sx={{
        minHeight,
        padding: `${pxToRem(padding)} ${pxToRem(padding)}`,
        backgroundColor: backgroundColor || defaultBackgroundColor,
      }}
    >
      {children}
    </MuiStack>
  )
}

// Typechecking props of the ChallengeContainer
ChallengeContainer.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.number,
  backgroundColor: PropTypes.string,
}
