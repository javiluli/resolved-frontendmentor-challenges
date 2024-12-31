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
  mode: 'light',

  common: {
    white: 'hsl(0, 0%, 100%)',
    black: 'hsl(209, 23%, 22%)',
  },

  primary: {
    main: 'hsl(0, 0%, 100%)',
    contrastText: 'hsl(200, 15%, 8%)',
  },

  text: {
    primary: 'hsl(200, 15%, 8%)',
  },

  background: {
    paper: 'hsl(0, 0%, 100%)',
    default: ' hsl(0, 0%, 98%)',
  },
}

export default colors
