import { Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-white border-b dark:bg-dark-blue dark:border-dark-blue'>
      <nav className='flex items-center justify-between mx-6 h-16 xl:max-w-[1200px] xl:mx-auto'>
        <Link
          to='/'
          className='font-extrabold text-base md:text-2xl dark:text-white'
        >
          Where in the world?
        </Link>
        <button
          type='button'
          onClick={handleDarkMode}
          className='flex items-center dark:text-white'
        >
          {darkMode ? <Sun className='mr-2' /> : <Moon className='mr-2' />}
          Dark Mode
        </button>
      </nav>
    </header>
  )
}
