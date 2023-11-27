import { useEffect, useState } from 'react'
import { TCountry } from '../types/types'

export const useCountry = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [countries, setCountries] = useState<TCountry[]>([])

  const storeCurrentCountry = (country: TCountry) => {
    localStorage.setItem('currentCountry', JSON.stringify(country))
  }

  const removeCurrentCountry = () => {
    localStorage.removeItem('currentCountry')
  }

  const getCurrentCountry = () => {
    const country = localStorage.getItem('currentCountry')

    return JSON.parse(country ?? '')
  }

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch(`${window.location.origin}/data.json`)
        const data: TCountry[] = await res.json()

        setCountries(data)
      } finally {
        setIsLoading(false)
      }
    }

    getCountries()
  }, [])

  return {
    countries,
    isLoading,
    storeCurrentCountry,
    removeCurrentCountry,
    getCurrentCountry,
  }
}
