import PropTypes from 'prop-types'
import { ALERT_VARIANTS } from '../../utils/constants'

const AlertsPanel = ({ alerts }) => {
  return (
    <div className="card-panel">
      <div className="card-panel__header">
        <div>
          <h3>Alerts & Notifications</h3>
          <span className="card-panel__subtitle">Real-time threshold monitoring</span>
        </div>
      </div>
      <ul className="alerts-list">
        {alerts.map((alert) => (
          <li key={alert.id} className={`alerts-list__item alerts-list__item--${ALERT_VARIANTS[alert.type] || 'info'}`}>
            <div className="alerts-list__title">{alert.title}</div>
            <div className="alerts-list__description">{alert.description}</div>
            <div className="alerts-list__meta">
              <span>{alert.metric}</span>
              <span>{alert.timestamp}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

AlertsPanel.propTypes = {
  alerts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      metric: PropTypes.string,
      timestamp: PropTypes.string,
      type: PropTypes.string
    })
  ).isRequired
}

export default AlertsPanel
