import { MoveLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export const CountryPage = () => {
  return (
    <section className='pt-8'>
      <div className='mx-6 xl:max-w-[1200px] xl:mx-auto'>
        <div className='flex'>
          <Link
            to='/'
            className='flex items-center bg-white rounded-lg shadow-md py-2 px-6'
          >
            <MoveLeft className='mr-2' />
            Back
          </Link>
        </div>
      </div>
    </section>
  )
}
