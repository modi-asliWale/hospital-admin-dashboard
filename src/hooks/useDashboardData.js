import { useEffect, useState } from 'react'
import { fetchDashboardSnapshot } from '../services/dashboardService'

export const useDashboardData = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    fetchDashboardSnapshot()
      .then((snapshot) => {
        if (isMounted) {
          setData(snapshot)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err)
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  return {
    data,
    loading,
    error
  }
}
