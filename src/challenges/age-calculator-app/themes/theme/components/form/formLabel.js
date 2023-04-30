import colors from '../../base/colors'
import typography from '../../base/typography'

const { neutralColors } = colors
const { size } = typography

const formLabel = {
  styleOverrides: {
    root: {
      color: neutralColors.smokey_grey,
      fontSize: size.xs,
      letterSpacing: 3,
      marginBottom: 6,
    },
  },
}

export default formLabel
