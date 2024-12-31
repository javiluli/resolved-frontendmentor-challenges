import { PaletteOptions } from '@mui/material'

interface CustomPaletteOptions extends PaletteOptions {
  text: {
    primary: string
  }

  background: {
    paper: string
    default: string
  }
}

const colors: CustomPaletteOptions = {
  mode: 'dark',

  common: {
    white: 'hsl(0, 0%, 100%)',
    black: 'hsl(209, 23%, 22%)',
  },

  primary: {
    main: 'hsl(209, 23%, 22%)',
    contrastText: 'hsl(0, 0%, 100%)',
  },

  text: {
    primary: 'hsl(0, 0%, 100%)',
  },

  background: {
    paper: 'hsl(209, 23%, 22%)',
    default: 'hsl(207, 26%, 17%)',
  },
}

export default colors
