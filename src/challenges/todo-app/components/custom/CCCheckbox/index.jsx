import { forwardRef } from 'react'

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types'

// Custom styles for CCCheckboxRoot
import CCCheckboxRootRoot from './CCCheckboxRoot'

// Material Dashboard 2 React contexts
import { useMaterialUIController } from '../../../context'

const CCCheckboxRoot = forwardRef(({ color, fontWeight, children, ...rest }, ref) => {
  const [controller] = useMaterialUIController()
  const { darkMode } = controller

  return (
    <CCCheckboxRootRoot
      {...rest}
      ref={ref}
      ownerState={{
        fontWeight,
        darkMode,
      }}
    >
      {children}
    </CCCheckboxRootRoot>
  )
})

// Setting default values for the props of CCCheckboxRoot
CCCheckboxRoot.defaultProps = {
  color: 'text',
  fontWeight: false,
}

// Typechecking props for the CCCheckboxRoot
CCCheckboxRoot.propTypes = {
  color: PropTypes.oneOf(['inherit', 'primary', 'light', 'dark', 'text', 'white']),
  fontWeight: PropTypes.oneOf([false, 'regular', 'bold']),
  children: PropTypes.node.isRequired,
}

export default CCCheckboxRoot
