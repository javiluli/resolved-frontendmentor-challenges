import { ThemeProvider } from '@mui/material'
import PropTypes from 'prop-types'
import { createContext, useMemo, useState } from 'react'

import { dark, light } from '../themes'

const ThemeOptions = {
  LIGHT: 'light',
  DARK: 'dark',
}

export const MaterialUI = createContext({
  toggleThemeMode: () => {},
  mode: ThemeOptions.LIGHT,
})

MaterialUI.displayName = 'MaterialUIContext'

export const MaterialUIControllerProvider = ({ children }) => {
  const [mode, setMode] = useState(ThemeOptions.LIGHT)

  const colorMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === ThemeOptions.LIGHT ? ThemeOptions.DARK : ThemeOptions.LIGHT))
      },
      mode,
    }),
    [mode]
  )

  const theme = mode === ThemeOptions.LIGHT ? light : dark

  return (
    <MaterialUI.Provider value={colorMode}>
      <ThemeProvider theme={theme}> {children} </ThemeProvider>
    </MaterialUI.Provider>
  )
}

// Typechecking props for the MaterialUIControllerProvider
MaterialUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
