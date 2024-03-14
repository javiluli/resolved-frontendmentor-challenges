import colors from '../../base/colors'

const { primary, text } = colors

const buttonText = {
  base: {
    padding: 0,
    minWidth: 'auto',
    color: text.secondary,

    '&:hover': {
      color: text.primary,
    },
  },
}

export default buttonText
