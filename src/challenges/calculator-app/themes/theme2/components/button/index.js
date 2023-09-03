// Material Dashboard 2 React Button Styles
import contained from './contained'
import root from './root'

const button = {
  defaultProps: {
    disableRipple: false,
  },
  styleOverrides: {
    root: { ...root },
    contained: { ...contained.base },
  },
}

export default button
