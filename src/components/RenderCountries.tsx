import { Link } from 'react-router-dom'
import { TCountry } from '../types/types'
import { CardCountry } from './cards/CardCountry'
import { convertToUrlFormat } from '../utils/helper'

type TRenderCountriesProps = {
  filteredCountries: TCountry[]
}

export const RenderCountries = ({
  filteredCountries,
}: TRenderCountriesProps) => {
  return (
    <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {filteredCountries.map((country, index) => (
        <Link to={`/countries/${convertToUrlFormat(country.name)}`} key={index}>
          <CardCountry
            flag={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital}
            name={country.name}
          />
        </Link>
      ))}
    </div>
  )
}
