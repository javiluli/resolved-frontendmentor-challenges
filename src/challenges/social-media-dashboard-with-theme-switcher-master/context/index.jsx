import PropTypes from 'prop-types'

import { createContext, useContext, useMemo, useReducer } from 'react'

const MaterialUI = createContext()

MaterialUI.displayName = 'MaterialUIContext'

function reducer(state, action) {
  const REDUCER_OPTIONS = {
    LIGHTMODE: { ...state, lightMode: action.value },
  }

  return REDUCER_OPTIONS[action.type] || state
}

// Material Dashboard 2 React context provider
function MaterialUIControllerProvider({ children }) {
  const initialState = {
    lightMode: false,
  }

  const [controller, dispatch] = useReducer(reducer, initialState)

  const value = useMemo(() => [controller, dispatch], [controller, dispatch])

  return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>
}

function useMaterialUIController() {
  const context = useContext(MaterialUI)

  if (!context) {
    throw new Error('useMaterialUIController should be used inside the MaterialUIControllerProvider.')
  }

  return context
}

// Typechecking props for the MaterialUIControllerProvider
MaterialUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

// Context module functions
const setLightMode = (dispatch, value) => dispatch({ type: 'LIGHTMODE', value })

export { MaterialUIControllerProvider, useMaterialUIController, setLightMode }
