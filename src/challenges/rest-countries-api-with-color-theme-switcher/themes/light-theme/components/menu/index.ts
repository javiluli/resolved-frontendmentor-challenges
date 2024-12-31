import pxToRem from '../../functions/pxToRem'

const menu = {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    root: {
      '& .MuiMenuItem-root:first-child': {
        paddingTop: `${pxToRem(16)}`,
      },

      '& .MuiMenuItem-root:last-child': {
        paddingBottom: `${pxToRem(16)}`,
      },
    },

    paper: {
      marginTop: pxToRem(5),
    },
  },
}

export default menu
