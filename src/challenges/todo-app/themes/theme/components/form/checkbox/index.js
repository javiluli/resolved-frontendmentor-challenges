import colors from '../../../base/colors'
import pxToRem from '../../../functions/pxToRem'

const { transparent } = colors

const checkbox = {
  styleOverrides: {
    root: {
      width: pxToRem(8),
      height: pxToRem(8),
      color: transparent.main,
      marginRight: 16,

      '& .MuiSvgIcon-root': {
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: pxToRem(10),
        height: pxToRem(10),
        color: transparent.main,
      },

      '&:hover': {
        background: `linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 100%)) padding-box,
                     linear-gradient(140deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box`,
        borderRadius: pxToRem(9999),
        border: `1px solid ${transparent.main}`,
      },
    },

    colorPrimary: {
      color: transparent.main,
      borderRadius: pxToRem(9999),
      border: '1px solid hsl(233, 11%, 84%)',

      '&.Mui-checked': {
        backgroundImage: 'linear-gradient(140deg, hsl(192, 100%, 67%) 0%, hsl(280, 87%, 65%) 100%)',
      },
    },
  },
}

export default checkbox
