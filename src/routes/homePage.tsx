import { Search } from 'lucide-react'
import { CardLoading } from '../components/cards/CardLoading'
import { Link } from 'react-router-dom'
import { CardCountry } from '../components/cards/CardCountry'
import { useCountry } from '../hooks/useCountry'
import { convertToUrlFormat } from '../utils/helper'

export const HomePage = () => {
  const { countries, isLoading } = useCountry()

  return (
    <section className='pt-8 pb-16'>
      <div className='mx-6'>
        <div className='mb-12'>
          <div className='flex items-center py-4 px-6 bg-white rounded-lg shadow-md'>
            <Search className='mr-2' />
            <input
              className='outline-none w-full'
              type='text'
              placeholder='Search for a country...'
              autoComplete='off'
            />
          </div>
        </div>
        {isLoading ? (
          <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
          </div>
        ) : (
          <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {countries.map((country, index) => (
              <Link
                to={`/countries/${convertToUrlFormat(country.name)}`}
                key={index}
              >
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
        )}
      </div>
    </section>
  )
}
