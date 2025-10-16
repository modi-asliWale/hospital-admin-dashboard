import { useMemo, useState } from 'react'
import { FiBell, FiMenu, FiSearch } from 'react-icons/fi'
import { useAuth } from '../../hooks/useAuth'
import { useNotifications } from '../../hooks/useNotifications'
import { getInitials } from '../../utils/formatters'

const Header = ({ onToggleSidebar }) => {
  const { user } = useAuth()
  const { notifications, unreadCount } = useNotifications()
  const [searchQuery, setSearchQuery] = useState('')
  const [showNotifications, setShowNotifications] = useState(false)

  const greeting = useMemo(() => {
    const currentHour = new Date().getHours()
    if (currentHour < 12) return 'Good morning'
    if (currentHour < 18) return 'Good afternoon'
    return 'Good evening'
  }, [])

  const initials = useMemo(() => getInitials(user?.name), [user?.name])

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <button className="icon-button d-md-none" type="button" onClick={onToggleSidebar}>
          <FiMenu size={20} />
        </button>
        <div className="header-greeting">
          <span className="header-greeting__title">{greeting}, {user?.name?.split(' ')[0]}</span>
          <span className="header-greeting__subtitle">{user?.organization} dashboard overview</span>
        </div>
      </div>
      <div className="header-center">
        <div className="header-search">
          <FiSearch size={16} />
          <input
            type="search"
            placeholder="Search patients, staff, or reports"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="header-right">
        <div className="header-notifications">
          <button
            type="button"
            className="icon-button"
            onClick={() => setShowNotifications((prev) => !prev)}
          >
            <FiBell size={20} />
            {unreadCount > 0 ? <span className="notification-badge">{unreadCount}</span> : null}
          </button>
          {showNotifications ? (
            <div className="notification-dropdown">
              <div className="notification-dropdown__header">Latest alerts</div>
              <ul>
                {notifications.map((item) => (
                  <li key={item.id} className={`notification-item notification-item--${item.type}`}>
                    <div className="notification-item__title">{item.title}</div>
                    <div className="notification-item__message">{item.message}</div>
                    <span className="notification-item__time">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
        <div className="header-profile">
          <div className="header-profile__initials">{initials}</div>
          <div className="header-profile__meta">
            <span className="header-profile__name">{user?.name}</span>
            <span className="header-profile__role">{user?.role}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
