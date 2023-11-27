import { formatNumberWithComma } from '../../utils/helper'

type TCardCountryProps = {
  flag: string
  name: string
  population: number
  region: string
  capital: string
}

export const CardCountry = ({
  name,
  capital,
  region,
  population,
  flag,
}: TCardCountryProps) => {
  return (
    <article className='rounded-lg overflow-auto shadow-md bg-white md:hover:-translate-y-3 md:hover:duration-200 dark:bg-dark-blue dark:text-white'>
      <img
        className='h-[12rem] w-full object-cover object-center'
        src={flag}
        alt={name}
      />
      <div className='pt-6 pb-12 px-6'>
        <h3 className='font-extrabold text-2xl mb-4 line-clamp-1'>{name}</h3>
        <div className='grid gap-y-2'>
          <p className='text-lg'>
            <span className='font-semibold'>Population: </span>
            {formatNumberWithComma(population)}
          </p>
          <p className='text-lg'>
            <span className='font-semibold'>Region: </span>
            {region}
          </p>
          <p className='text-lg'>
            <span className='font-semibold'>Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </article>
  )
}
