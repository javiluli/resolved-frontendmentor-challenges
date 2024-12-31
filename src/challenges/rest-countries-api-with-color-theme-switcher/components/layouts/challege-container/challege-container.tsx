import PropTypes from 'prop-types'

import { ReactNode } from 'react'

import MuiStack from '@mui/material/Stack'

function ChallegeContainer({ children }: { children: ReactNode }) {
  return (
    <MuiStack
      spacing={4}
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      {children}
    </MuiStack>
  )
}

// Typechecking props of the ChallegeContainer
ChallegeContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ChallegeContainer
