import typography from '../../base/typography'
import pxToRem from '../../functions/pxToRem'

const { size, fontWeightRegular } = typography

const tab = {
  defaultProps: {
    disableRipple: true,
  },

  styleOverrides: {
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      flex: '1 1 auto',
      textAlign: 'center',
      maxWidth: '20px !important',
      minWidth: '20px !important',
      minHeight: '22px !important',
      fontSize: size.xxs,
      fontWeight: fontWeightRegular,
      textTransform: 'none',
      lineHeight: 'inherit',
      padding: `${pxToRem(8)} ${pxToRem(0)}`,
      opacity: '1 !important',
    },
  },
}

export default tab
