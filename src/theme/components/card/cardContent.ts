import pxToRem from '../../functions/pxToRem'

const cardContent = {
  styleOverrides: {
    root: {
      paddingTop: pxToRem(24),
      paddingBotton: 0,
      paddingLeft: 0,
      paddingRight: 0,
      marginLeft: '0 !important',

      '&:last-child': {
        paddingBottom: 0,
      },
    },
  },
}

export default cardContent
