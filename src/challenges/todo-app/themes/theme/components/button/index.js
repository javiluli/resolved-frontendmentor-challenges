// Material Dashboard 2 React Button Styles
import buttonText from './buttonText'
import root from './root'

const button = {
  defaultProps: {
    disableRipple: false,
  },
  styleOverrides: {
    root: { ...root },
    text: { ...buttonText.base },
  },
}

export default button
