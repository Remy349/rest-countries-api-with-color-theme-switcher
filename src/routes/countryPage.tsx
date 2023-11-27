import { MoveLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useCountry } from '../hooks/useCountry'
import { TCountry } from '../types/types'
import { convertToUrlFormat, formatNumberWithComma } from '../utils/helper'
import { useEffect } from 'react'

export const CountryPage = () => {
  const {
    countries,
    removeCurrentCountry,
    getCurrentCountry,
    storeCurrentCountry,
  } = useCountry()
  const country: TCountry = getCurrentCountry()
  const { countryName } = useParams()

  const handleStoreCurrentCountry = (country: TCountry) => () => {
    storeCurrentCountry(country)
  }

  useEffect(() => {}, [countryName])

  return (
    <section className='pt-8 pb-16'>
      <div className='mx-6 xl:max-w-[1200px] xl:mx-auto'>
        <div className='flex'>
          <Link
            onClick={removeCurrentCountry}
            to='/'
            className='flex items-center bg-white rounded-lg shadow-md py-2 px-6'
          >
            <MoveLeft className='mr-2' />
            Back
          </Link>
        </div>
        <div className='mt-16 grid gap-y-12 lg:grid-cols-2 lg:items-center lg:gap-x-16'>
          <img
            src={country.flags.png}
            alt={country.name}
            className='rounded-lg w-full h-[12rem] object-cover object-center md:h-[26rem] xl:h-[30rem]'
          />
          <div>
            <h3 className='font-extrabold text-3xl mb-8'>{country.name}</h3>
            <div className='flex flex-col gap-y-12 md:flex-row md:justify-between items-start'>
              <div className='grid gap-y-4'>
                <p className='text-lg'>
                  <span className='font-semibold'>Native Name: </span>
                  {country.nativeName}
                </p>
                <p className='text-lg'>
                  <span className='font-semibold'>Population: </span>
                  {formatNumberWithComma(country.population)}
                </p>
                <p className='text-lg'>
                  <span className='font-semibold'>Region: </span>
                  {country.region}
                </p>
                <p className='text-lg'>
                  <span className='font-semibold'>Sub Region: </span>
                  {country.subregion}
                </p>
                <p className='text-lg'>
                  <span className='font-semibold'>Capital: </span>
                  {country.capital}
                </p>
              </div>
              <div className='grid gap-y-4'>
                <p className='text-lg'>
                  <span className='font-semibold'>Top Level Domain: </span>
                  {country.topLevelDomain.map((tld) => `${tld}, `)}
                </p>
                <p className='text-lg'>
                  <span className='font-semibold'>Currencies: </span>
                  {country.currencies?.map((currency) => `${currency.name}, `)}
                </p>
                <p className='text-lg'>
                  <span className='font-semibold'>Languages: </span>
                  {country.languages.map((language) => `${language.name}, `)}
                </p>
              </div>
            </div>
            <div className='mt-12 flex flex-col gap-y-4'>
              <p className='text-xl font-semibold'>Border Countries:</p>
              <div className='flex items-center gap-3 flex-wrap'>
                {countries
                  .filter((c) => country.borders?.includes(c.alpha3Code))
                  .map((c, index) => (
                    <Link
                      key={index}
                      to={`/countries/${convertToUrlFormat(c.name)}`}
                      className='bg-white rounded-lg shadow-md py-2 px-6'
                      onClick={handleStoreCurrentCountry(c)}
                    >
                      {c.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
