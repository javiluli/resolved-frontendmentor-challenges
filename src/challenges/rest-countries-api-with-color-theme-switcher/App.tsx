import { Route, Routes } from 'react-router-dom'

import { ThemeProvider } from './components/providers/theme-provider'
import { DetailsPage, HomePage } from './pages'

import dataJson from './data/data.json'
import { useEffect } from 'react'
import { Country } from './types'
import { useMaterialUIController } from './context'

const App = () => {
  const { setListOfCountries } = useMaterialUIController()

  useEffect(() => {
    const countryMap = new Map<string, string>()

    // Crear un mapa de código de país a nombre para facilitar el acceso
    dataJson.forEach((country) => {
      countryMap.set(country.alpha3Code, country.name)
    })

    // Mapear datos y agregar los nombres de los países fronterizos
    const data: Country[] = dataJson.map((country) => {
      const { flag, name, population, region, capital, alpha3Code, nativeName, subregion, topLevelDomain, currencies, languages, borders } =
        country

      const nameOfBorderCountries = borders ? (borders.map((border) => countryMap.get(border)).filter(Boolean) as string[]) : []

      return {
        flag,
        name,
        population,
        region,
        capital,
        alpha3Code,
        nativeName,
        subregion,
        topLevelDomain,
        currencies,
        languages,
        borders,
        nameOfBorderCountries,
      }
    })

    setListOfCountries(data)
  }, [setListOfCountries])

  return (
    <ThemeProvider>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/:countryName" element={<DetailsPage />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
