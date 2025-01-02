import { useMemo } from 'react'

import MuiBox from '@mui/material/Box'
import MuiContainer from '@mui/material/Container'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

import { ChallegeContainer } from '../../components/layouts'
import { Header } from '../../components/ui/header'
import { useContextController } from '../../context'
import { Country } from '../../types'
import { FilterByRegion } from './components/filter-by-region'
import { ListOfCountryCard } from './components/list-of-country-card'
import { SearchingBar } from './components/searching-bar'
import HomeSkeleton from './home-page.skeleton'

function HomePage() {
  const { state } = useContextController()
  const { filteredRegion, searchCountry, listOfCountries } = state

  const countries = useMemo<Country[]>(() => {
    if (!listOfCountries) return []

    return listOfCountries.filter((country) => {
      const matchesRegion = !filteredRegion || country.region === filteredRegion
      const matchesSearch = !searchCountry || country.name.toLowerCase().includes(searchCountry.toLowerCase())
      return matchesRegion && matchesSearch
    })
  }, [listOfCountries, filteredRegion, searchCountry])

  if (!listOfCountries) {
    return <HomeSkeleton />
  }

  return (
    <ChallegeContainer>
      <Header />
      <MuiStack>
        <MuiContainer maxWidth="desktop">
          <MuiStack spacing={4} sx={{ marginBottom: 4 }}>
            <MuiStack direction={{ desktop: 'row' }} justifyContent={{ desktop: 'space-between' }} spacing={{ mobile: 2, desktop: 0 }}>
              <SearchingBar />
              <FilterByRegion />
            </MuiStack>

            <MuiBox sx={{ flexGrow: 1 }}>
              {countries.length > 0 ? (
                <ListOfCountryCard countries={countries} />
              ) : (
                <MuiTypography variant="h5">No results found.</MuiTypography>
              )}
            </MuiBox>
          </MuiStack>
        </MuiContainer>
      </MuiStack>
    </ChallegeContainer>
  )
}

export default HomePage
