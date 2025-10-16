import { useEffect, useState } from 'react'
import { fetchNotifications } from '../services/dashboardService'

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    fetchNotifications().then((items) => {
      if (isMounted) {
        setNotifications(items)
        setLoading(false)
      }
    })

    return () => {
      isMounted = false
    }
  }, [])

  const unreadCount = notifications.filter((item) => !item.read).length

  return {
    notifications,
    unreadCount,
    loading
  }
}
