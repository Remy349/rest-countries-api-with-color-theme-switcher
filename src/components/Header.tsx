import { Link } from 'react-router-dom'
import { Moon } from 'lucide-react'

export const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-white border-b'>
      <nav className='flex items-center justify-between mx-6 h-16 xl:max-w-[1200px] xl:mx-auto'>
        <Link to='/' className='font-extrabold text-base'>
          Where in the world?
        </Link>
        <button type='button' className='flex items-center'>
          <Moon className='mr-2' />
          Dark Mode
        </button>
      </nav>
    </header>
  )
}
