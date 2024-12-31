import PropTypes from 'prop-types'

import { ReactNode, createContext, useCallback, useContext, useMemo, useReducer } from 'react'

import { Country, Region } from '../types'

interface State {
  darkMode: boolean
  listOfCountries: Country[] | null
  filteredRegion: Region | undefined
  searchCountry: string | null
}

type Action =
  | { type: 'SET_DARK_MODE'; value: boolean }
  | { type: 'SET_LIST_OF_COUNTRIES'; value: Country[] | null }
  | { type: 'SET_FILTERED_REGION'; value: Region | undefined }
  | { type: 'SET_SEARCH_COUNTRY'; value: string | null }

interface ContextValue {
  state: State
  setDarkMode: (value: boolean) => void
  setListOfCountries: (value: Country[] | null) => void
  setFilteredRegion: (value: Region | undefined) => void
  setClearFilteredRegion: () => void
  setSearchCountry: (value: string | null) => void
}

const MaterialUIContext = createContext<ContextValue | undefined>(undefined)

MaterialUIContext.displayName = 'MaterialUIContext'

function reducer(state: State, action: Action): State {
  const REDUCER_OPTIONS: { [key: string]: State } = {
    SET_DARK_MODE: { ...state, darkMode: action.value as boolean },
    SET_LIST_OF_COUNTRIES: { ...state, listOfCountries: action.value as Country[] | null },
    SET_FILTERED_REGION: { ...state, filteredRegion: action.value as Region | undefined },
    SET_SEARCH_COUNTRY: { ...state, searchCountry: action.value as string | null },
  }
  return REDUCER_OPTIONS[action.type] || state
}

interface MaterialUIControllerProviderProps {
  children: ReactNode
}

export const MaterialUIControllerProvider = ({ children }: MaterialUIControllerProviderProps) => {
  const initialState: State = {
    darkMode: false,
    listOfCountries: null,
    filteredRegion: undefined,
    searchCountry: null,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const setDarkMode = useCallback((value: boolean) => {
    dispatch({ type: 'SET_DARK_MODE', value })
  }, [])

  const setListOfCountries = useCallback((value: Country[] | null) => {
    dispatch({ type: 'SET_LIST_OF_COUNTRIES', value })
  }, [])

  const setFilteredRegion = useCallback((value: Region | undefined) => {
    dispatch({ type: 'SET_FILTERED_REGION', value })
  }, [])

  const setClearFilteredRegion = useCallback(() => {
    dispatch({ type: 'SET_FILTERED_REGION', value: undefined })
  }, [])

  const setSearchCountry = useCallback((value: string | null) => {
    dispatch({ type: 'SET_SEARCH_COUNTRY', value })
  }, [])

  const value = useMemo(
    () => ({ state, setDarkMode, setListOfCountries, setFilteredRegion, setClearFilteredRegion, setSearchCountry }),
    [state, setDarkMode, setListOfCountries, setFilteredRegion, setClearFilteredRegion, setSearchCountry],
  )
  return <MaterialUIContext.Provider value={value}>{children}</MaterialUIContext.Provider>
}

// Hook to use the MaterialUIController context
// eslint-disable-next-line react-refresh/only-export-components
export const useMaterialUIController = (): ContextValue => {
  const context = useContext(MaterialUIContext)

  if (!context) {
    throw new Error('useMaterialUIController must be used within a MaterialUIControllerProvider')
  }

  return context
}

// Typechecking props for the MaterialUIControllerProvider
MaterialUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
