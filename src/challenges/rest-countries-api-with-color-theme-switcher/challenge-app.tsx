import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ThemeProvider } from './components/providers/theme-provider'
import { useContextController } from './context'
import dataJson from './data/data.json'
import { DetailsPage, HomePage } from './pages'
import { Country, Region } from './types'

export function ChallengeApp() {
  const { setListOfCountries } = useContextController()

  useEffect(() => {
    const countryMap = new Map<string, string>()

    dataJson.forEach((country) => {
      countryMap.set(country.alpha3Code, country.name)
    })

    const data: Country[] = dataJson.map((country) => {
      const { flag, name, population, region, capital, alpha3Code, nativeName, subregion, topLevelDomain, currencies, languages, borders } =
        country

      const nameOfBorderCountries = borders ? (borders.map((border) => countryMap.get(border)).filter(Boolean) as string[]) : []

      return {
        flag,
        name,
        population,
        region: region as Region,
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
