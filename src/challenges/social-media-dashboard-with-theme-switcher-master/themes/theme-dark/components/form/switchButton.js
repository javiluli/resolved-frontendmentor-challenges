import colors from '../../base/colors'
import linearGradient from '../../functions/linearGradient'

const { gradients, background } = colors

const switchButton = {
  styleOverrides: {
    root: {
      width: '68px',
      height: '48px',
    },

    switchBase: {
      padding: 15,
      '&.Mui-checked': {
        paddingLeft: 15,
        '& + .MuiSwitch-track': {
          backgroundImage: linearGradient(gradients.primary.main, gradients.primary.state),
          opacity: 1,
        },
      },
    },

    thumb: {
      width: '18px',
      height: '18px',
      boxShadow: 'none',
      background: background.default,
    },

    track: {
      background: background.custom.toggle,
      borderRadius: '9999px',
      opacity: 0.5,
    },
  },
}

export default switchButton
