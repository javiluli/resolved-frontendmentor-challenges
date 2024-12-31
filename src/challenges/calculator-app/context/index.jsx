import PropTypes from 'prop-types'

import { createContext, useContext, useMemo, useReducer } from 'react'

const MaterialUI = createContext()

MaterialUI.displayName = 'MaterialUIContext'

function reducer(state, action) {
  const REDUCER_OPTIONS = {
    THEME: { ...state, theme: action.value },
    CALCULATE_OPERATIONS: { ...state, calculateOperations: action.value },
    OPERATOR: { ...state, operator: action.value },
    RESULT: { ...state, result: action.value },
    ERROR_IN_OPERATION: { ...state, errorInOperation: action.value },
  }

  return REDUCER_OPTIONS[action.type] || state
}

// Material Dashboard 2 React context provider
function MaterialUIControllerProvider({ children }) {
  const initialState = {
    theme: 0,
    calculateOperations: [],
    operator: null,
    result: null,
    errorInOperation: null,
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
const setTheme = (dispatch, value) => dispatch({ type: 'THEME', value })
const setCalculateOperations = (dispatch, value) => dispatch({ type: 'CALCULATE_OPERATIONS', value })
const setOperator = (dispatch, value) => dispatch({ type: 'OPERATOR', value })
const setResult = (dispatch, value) => dispatch({ type: 'RESULT', value })
const setErrorInOperation = (dispatch, value) => dispatch({ type: 'ERROR_IN_OPERATION', value })

export {
  MaterialUIControllerProvider,
  useMaterialUIController,
  setTheme,
  setCalculateOperations,
  setOperator,
  setResult,
  setErrorInOperation,
}
