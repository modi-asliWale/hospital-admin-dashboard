import PropTypes from 'prop-types'

const statusClassMap = {
  good: 'stat-badge--good',
  warning: 'stat-badge--warning',
  critical: 'stat-badge--critical',
  stable: 'stat-badge--stable'
}

const StatBadge = ({ label, value, description, status = 'stable' }) => {
  return (
    <div className={`stat-badge ${statusClassMap[status] || ''}`}>
      <div className="stat-badge__label">{label}</div>
      <div className="stat-badge__value">{value}</div>
      {description ? <div className="stat-badge__description">{description}</div> : null}
    </div>
  )
}

StatBadge.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string,
  status: PropTypes.oneOf(['good', 'warning', 'critical', 'stable'])
}

export default StatBadge
