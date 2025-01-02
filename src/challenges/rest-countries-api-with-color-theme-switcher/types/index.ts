export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Antarctic = 'Antarctic',
  'Antarctic Ocean' = 'Antarctic Ocean',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
  Polar = 'Polar',
}

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
  region: Region
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
