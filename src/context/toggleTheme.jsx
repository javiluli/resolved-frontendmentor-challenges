import { ThemeProvider, createTheme, useTheme } from '@mui/material'
import { createContext, useMemo, useState } from 'react'

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light',
})

const themeObj = {
  light: {
    palette: {
      type: 'light',
      primary: {
        main: '#3f54a3',
        light: '#67bece',
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.6)',
      },
      background: {
        paper: '#fff',
        default: '#fff',
      },
    },
  },

  dark: {
    palette: {
      type: 'dark',
      primary: {
        main: '#1b82f9',
      },
      text: {
        primary: '#fff',
        secondary: 'rgba(255, 255, 255, 0.7)',
      },
      background: {
        paper: 'hsl(0, 0%, 10%)',
        default: 'hsl(0, 0%, 6%)',
      },
    },
  },
}

function ColorContextProvider({ children }) {
  const [mode, setMode] = useState('light')
  const theme = useTheme()

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
      mode,
    }),
    [mode]
  )

  const customTheme = useMemo(
    () =>
      createTheme({
        ...themeObj[mode],

        components: {
          MuiTypography: {
            styleOverrides: {
              h1: {
                fontSize: '2.125rem',
                [theme.breakpoints.up('sm')]: {
                  fontSize: '3rem',
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '3.75rem;',
                },
                [theme.breakpoints.up('lg')]: {
                  fontSize: '6rem;',
                },
              },
            },
          },
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={customTheme}> {children} </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ColorContextProvider
