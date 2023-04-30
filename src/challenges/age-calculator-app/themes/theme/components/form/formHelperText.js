import colors from '../../base/colors'
import typography from '../../base/typography'

const { error, neutralColors } = colors
const { size } = typography

const formHelperText = {
  styleOverrides: {
    root: {
      color: neutralColors.smokey_grey,
      fontSize: size.xs,
      letterSpacing: 3,
      marginBottom: 6,

      '&.Mui-error': {
        margin: 0,
        color: error.main,
        fontSize: size.xxs,
        fontStyle: 'italic',
        fontWeight: 400,
        letterSpacing: 0,
      },
    },
  },
}

export default formHelperText
