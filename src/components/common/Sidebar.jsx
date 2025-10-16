import { NavLink } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { SIDEBAR_LINKS } from '../../utils/constants'

const Sidebar = ({ isCollapsed }) => {
  return (
    <aside className={`dashboard-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-brand">
        <span className="sidebar-brand__logo">MC</span>
        {!isCollapsed ? (
          <div className="sidebar-brand__meta">
            <span className="sidebar-brand__name">MetroCare</span>
            <span className="sidebar-brand__tagline">Hospital Network</span>
          </div>
        ) : null}
      </div>
      <nav className="sidebar-nav">
        {SIDEBAR_LINKS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `sidebar-nav__link ${isActive ? 'sidebar-nav__link--active' : ''}`
            }
          >
            <Icon size={18} />
            {!isCollapsed ? <span>{label}</span> : null}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button type="button" className="sidebar-logout">
          <FiLogOut size={18} />
          {!isCollapsed ? <span>Logout</span> : null}
        </button>
        {!isCollapsed ? (
          <div className="sidebar-footer__helper">
            <span>System status: Normal</span>
            <span className="text-muted">Updated 2m ago</span>
          </div>
        ) : null}
      </div>
    </aside>
  )
}

export default Sidebar
