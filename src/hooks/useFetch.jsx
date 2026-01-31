import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Create abort controller for this fetch
    const abortController = new AbortController()

    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(url, {
          signal: abortController.signal
        })
        setData(response.data)
        setError(null)
      } catch (err) {
        // Don't set error if request was aborted
        if (err.name !== 'AbortError') {
          setError(err.message)
          setData(null)
        }
      } finally {
        setLoading(false)
      }
    }

    if (url) {
      fetchData()
    }

    // Cleanup function to abort request on unmount or URL change
    return () => {
      abortController.abort()
    }
  }, [url])

  return { data, loading, error }
}

export default useFetch
