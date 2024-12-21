import colors from '../../base/colors'

const { background } = colors

const cardActionArea = {
  defaultProps: {
    disableRipple: true,
  },

  styleOverrides: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: 0,
      color: background.default,
      backgroundColor: background.default,

      '&:hover': {
        backgroundColor: background.default,
      },

      '&:active': {
        backgroundColor: background.default,
      },
      variants: [],
    },
  },
}

export default cardActionArea
