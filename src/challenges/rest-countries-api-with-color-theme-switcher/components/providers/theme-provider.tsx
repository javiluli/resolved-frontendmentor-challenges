import { ReactNode } from 'react'

import { ThemeProvider as MUIThemeProvider, Theme } from '@mui/material'

import { useContextController } from '../../context'
import darkTheme from '../../themes/dark-theme'
import lightTheme from '../../themes/light-theme'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  const {
    state: { darkMode },
  } = useContextController()

  const theme: Theme = darkMode ? darkTheme : lightTheme

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
}
