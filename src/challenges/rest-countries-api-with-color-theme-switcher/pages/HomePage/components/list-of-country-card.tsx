import MuiFade from '@mui/material/Fade'
import MuiGrid from '@mui/material/Grid2'

import useInfiniteScroll from '../../../hooks/useInfiniteScroll'
import { Country } from '../../../types'
import { CountryCard } from './country-card'

interface ListOfCountryCardProps {
  countries: Country[]
}

export function ListOfCountryCard({ countries }: ListOfCountryCardProps) {
  const { visibleCountries, lastCountryElementRef } = useInfiniteScroll(countries)

  return (
    <MuiGrid container spacing={{ mobile: 4, desktop: 10 }}>
      {visibleCountries.map((country, index) => (
        <MuiGrid
          size={{ mobile: 12, desktop: 3 }}
          ref={index === visibleCountries.length - 1 ? lastCountryElementRef : null}
          key={country.alpha3Code}
        >
          <MuiFade in timeout={500}>
            <div>
              <CountryCard
                image={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            </div>
          </MuiFade>
        </MuiGrid>
      ))}
    </MuiGrid>
  )
}
