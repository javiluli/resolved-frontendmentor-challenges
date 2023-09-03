import { forwardRef } from 'react'

import ButtonRoot from './ButtonRoot'

const Button = forwardRef(({ children, variant, ...rest }) => {
  return (
    <ButtonRoot variant={variant} ownerState={{ variant }} {...rest}>
      {children}
    </ButtonRoot>
  )
})

export default Button
