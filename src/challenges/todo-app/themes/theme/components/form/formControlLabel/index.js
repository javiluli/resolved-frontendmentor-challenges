const formControlLabel = {
  styleOverrides: {
    root: {
      display: 'block',
      //   minHeight: pxToRem(24),
      //   marginBottom: pxToRem(2),
    },

    label: {
      display: 'inline-block',
      //   fontSize: size.sm,
      //   fontWeight: fontWeightBold,
      //   color: dark.main,
      lineHeight: 1,
      //   transform: `translateY(${pxToRem(1)})`,
      //   marginLeft: pxToRem(4),

      '&.Mui-disabled': {
        // color: dark.main,
        color: 'red',
      },
    },
  },
}

export default formControlLabel
