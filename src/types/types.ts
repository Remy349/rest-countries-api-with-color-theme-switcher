export type TCountry = {
  name: string
  population: number
  region: string
  capital: string
  alpha3Code: string
  subregion: string
  nativeName: string
  topLevelDomain: string[]
  currencies?: [{ name: string }]
  languages: [{ name: string }]
  borders?: string[]
  flags: { png: string }
}
