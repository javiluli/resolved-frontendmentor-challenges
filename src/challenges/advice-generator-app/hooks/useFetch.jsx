import { useEffect, useState } from 'react'

function useFetch() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/quotes?limit=100`)
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
  }, [])

  return { data, loading, error }
}

export default useFetch
