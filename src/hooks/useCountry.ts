import { useEffect, useState } from 'react'
import { TCountry } from '../types/types'

export const useCountry = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [countries, setCountries] = useState<TCountry[]>([])

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

  return { countries, isLoading }
}
