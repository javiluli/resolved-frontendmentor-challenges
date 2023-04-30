import colors from '../base/colors'

const { neutralColors } = colors

const iconButton = {
  styleOverrides: {
    root: {
      '&:hover': {
        backgroundColor: neutralColors.off_black,
      },
    },

    sizeLarge: {
      fontSize: `32px`,
    },
  },
}

export default iconButton
