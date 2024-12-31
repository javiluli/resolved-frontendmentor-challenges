import pxToRem from '../../functions/pxToRem'

const cardContent = {
  styleOverrides: {
    root: {
      padding: `${pxToRem(20)} ${pxToRem(30)}`,

      '&:last-child': {
        paddingBottom: `${pxToRem(44)}`,
      },
    },
  },
}

export default cardContent
