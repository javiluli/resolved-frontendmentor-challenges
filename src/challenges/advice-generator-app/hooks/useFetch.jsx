import { useEffect, useState } from 'react'

function useFetch(refetch) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (refetch !== null) {
      setLoading(true)
      fetch(`https://dummyjson.com/quotes/random`)
        .then(async (response) => response.json())
        .then((response) => {
          setData(response)
        })
        .catch((err) => {
          setData(null)
          setError(err)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [refetch])

  return { data, loading, error }
}

export default useFetch
