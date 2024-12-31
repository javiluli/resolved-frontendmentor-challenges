export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania'

type Currencies = {
  name: string
}

type Languages = {
  name: string
}

export type Country = {
  flag: string
  name: string
  population: number
  region: string
  capital?: string
  alpha3Code: string
  nativeName: string
  subregion: string
  topLevelDomain: string[]
  currencies?: Currencies[]
  languages: Languages[]
  borders?: string[]
  nameOfBorderCountries?: string[]
}
