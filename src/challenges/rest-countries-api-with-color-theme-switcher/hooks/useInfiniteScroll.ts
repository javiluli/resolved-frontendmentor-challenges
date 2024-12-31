import { useEffect, useRef, useState } from 'react'

import { Country } from '../types'

const useInfiniteScroll = (countries: Country[], batchSize: number = 12) => {
  const [visibleCountries, setVisibleCountries] = useState<Country[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)
  const lastCountryElementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreCountries()
      }
    })

    if (lastCountryElementRef.current) {
      observerRef.current.observe(lastCountryElementRef.current)
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCountries])

  const loadMoreCountries = () => {
    const nextCountries = countries.slice(visibleCountries.length, visibleCountries.length + batchSize)
    setVisibleCountries((prev) => [...prev, ...nextCountries])
  }

  useEffect(() => {
    setVisibleCountries(countries.slice(0, batchSize))
  }, [countries, batchSize])

  return { visibleCountries, lastCountryElementRef }
}

export default useInfiniteScroll
