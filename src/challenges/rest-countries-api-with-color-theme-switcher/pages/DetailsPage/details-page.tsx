import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'

import MuiKeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded'
import MuiBox from '@mui/material/Box'
import MuiButton from '@mui/material/Button'
import MuiContainer from '@mui/material/Container'
import MuiGrid from '@mui/material/Grid2'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'

import { ChallegeContainer } from '../../components/layouts'
import { Header } from '../../components/ui/header'
import { InfoTypography } from '../../components/ui/info-typography'
import { useContextController } from '../../context'
import { Country } from '../../types'
import { agregarComas } from '../../utility'
import ImageComponent from './components/image-component'
import ListOfBorderCountries from './components/list-of-border-countries'

function DetailsPage() {
  const { countryName } = useParams()

  const { state } = useContextController()
  const { listOfCountries } = state

  const country = useMemo<Country | null>(() => {
    return listOfCountries?.find((item) => item.name === countryName) ?? null
  }, [listOfCountries, countryName])

  return (
    <ChallegeContainer>
      <MuiStack>
        <Header />

        <MuiContainer maxWidth="desktop">
          <MuiStack spacing={8} sx={{ marginTop: 6, marginBottom: 8 }}>
            <MuiBox>
              <MuiButton component={Link} to={'..'} variant="contained" startIcon={<MuiKeyboardBackspaceRoundedIcon />}>
                Back
              </MuiButton>
            </MuiBox>

            {country && (
              <MuiGrid container direction={{ mobile: 'column', desktop: 'row' }} spacing={{ mobile: 4, desktop: 12 }}>
                <MuiGrid size={{ mobile: 12, desktop: 5 }}>
                  <ImageComponent src={country.flag} alt={`${country.name} flag`} />
                </MuiGrid>

                <MuiGrid size={{ mobile: 12, desktop: 7 }}>
                  <MuiStack spacing={4}>
                    <MuiTypography variant="h5" component="h1" sx={{ fontWeight: 'weight.bold' }}>
                      {countryName}
                    </MuiTypography>

                    <MuiGrid container direction={{ mobile: 'column', desktop: 'row' }} spacing={{ mobile: 6, desktop: 12 }}>
                      <MuiGrid size={{ mobile: 12, desktop: 6 }}>
                        <MuiStack spacing={1.5}>
                          <InfoTypography label="Native Name" value={country.nativeName} />
                          <InfoTypography label="Population" value={agregarComas(country.population)} />
                          <InfoTypography label="Region" value={country.region} />
                          <InfoTypography label="Sub Region" value={country.subregion} />
                          <InfoTypography label="Capital" value={country.capital} />
                        </MuiStack>
                      </MuiGrid>
                      <MuiGrid size={{ mobile: 12, desktop: 6 }}>
                        <MuiStack spacing={1.5}>
                          <InfoTypography label="Top Level Domain" value={country.topLevelDomain.map((item) => item).join(', ')} />
                          <InfoTypography label="Currencies" value={country.currencies?.map((currencie) => currencie.name).join(', ')} />
                          <InfoTypography label="Languages" value={country.languages.map((language) => language.name).join(', ')} />
                        </MuiStack>
                      </MuiGrid>
                    </MuiGrid>

                    <MuiStack direction={{ mobile: 'column', desktop: 'row' }} spacing={2}>
                      <MuiTypography sx={{ minWidth: 'fit-content' }}>Border Countries</MuiTypography>
                      <MuiStack direction="row" useFlexGap spacing={2} sx={{ flexWrap: 'wrap' }}>
                        {country.nameOfBorderCountries ? <ListOfBorderCountries list={country.nameOfBorderCountries} /> : null}
                      </MuiStack>
                    </MuiStack>
                  </MuiStack>
                </MuiGrid>
              </MuiGrid>
            )}
          </MuiStack>
        </MuiContainer>
      </MuiStack>
    </ChallegeContainer>
  )
}

export default DetailsPage
