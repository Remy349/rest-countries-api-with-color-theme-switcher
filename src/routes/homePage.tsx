import { ChevronRight, Search } from 'lucide-react'
import { CardLoading } from '../components/cards/CardLoading'
import { useCountry } from '../hooks/useCountry'
import { useEffect, useState } from 'react'
import { TCountry } from '../types/types'
import { regions } from '../utils/region'
import { RenderCountries } from '../components/RenderCountries'

export const HomePage = () => {
  const [isDropdownClose, setIsDropdownClose] = useState(true)
  const [searchCountry, setSearchCountry] = useState('')
  const [searchCountryByRegion, setSearchCountryByRegion] = useState('')
  const [filteredCountries, setFilteredCountries] = useState<TCountry[]>([])
  const { countries, isLoading } = useCountry()

  const handleToggleDropdown = () => {
    setIsDropdownClose((prev) => !prev)
  }

  useEffect(() => {
    const getFilterCountries = () => {
      const filtered = countries.filter(
        (country) =>
          country.name.toLowerCase().includes(searchCountry.toLowerCase()) &&
          (country.region === searchCountryByRegion ||
            searchCountryByRegion === ''),
      )

      setFilteredCountries(filtered)
    }

    getFilterCountries()
  }, [searchCountry, searchCountryByRegion, countries])

  return (
    <section className='pt-8 pb-16'>
      <div className='mx-6 xl:max-w-[1200px] xl:mx-auto'>
        <div className='mb-12 flex flex-col gap-y-6 md:flex-row md:justify-between md:items-center'>
          <div className='flex items-center py-4 px-6 bg-white rounded-lg shadow-md md:w-[400px] lg:w-[500px] dark:bg-dark-blue'>
            <Search className='mr-2 dark:text-white' />
            <input
              className='outline-none w-full dark:bg-dark-blue dark:text-white'
              type='text'
              placeholder='Search for a country...'
              autoComplete='off'
              value={searchCountry}
              onChange={(e) => setSearchCountry(e.target.value)}
            />
          </div>
          <div className='relative'>
            <div
              className='flex items-center justify-between px-6 bg-white dark:bg-dark-blue dark:text-white shadow-md rounded-lg py-4 md:cursor-pointer md:w-[240px]'
              onClick={handleToggleDropdown}
            >
              <p>
                {searchCountryByRegion === ''
                  ? 'Filter by Region'
                  : searchCountryByRegion}
              </p>
              <ChevronRight
                className={`${
                  !isDropdownClose ? 'rotate-90' : 'rotate-0'
                } duration-200`}
              />
            </div>
            <div
              className='bg-white shadow-md rounded-lg dark:bg-dark-blue dark:text-white px-6 py-4 absolute left-0 top-16 w-full z-40'
              hidden={isDropdownClose}
            >
              <ul className='flex flex-col gap-y-2'>
                {regions.map((region, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSearchCountryByRegion(region.name)
                      handleToggleDropdown()
                    }}
                    className='md:cursor-pointer'
                  >
                    {region.name === '' ? 'All' : region.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {[...Array(4)].map((_, index) => (
              <CardLoading key={index} />
            ))}
          </div>
        ) : (
          <RenderCountries filteredCountries={filteredCountries} />
        )}
      </div>
    </section>
  )
}
