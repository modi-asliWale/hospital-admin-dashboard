import PropTypes from 'prop-types'
import StatBadge from '../common/StatBadge'

const StaffOverview = ({ stats }) => {
  return (
    <div className="staff-overview">
      {stats.map((item) => (
        <div key={item.label} className="staff-overview__item">
          <div className="staff-overview__label">{item.label}</div>
          <div className="staff-overview__value">{item.value}</div>
          <StatBadge label={item.helper.label} value={item.helper.value} status={item.helper.status} />
        </div>
      ))}
    </div>
  )
}

StaffOverview.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      helper: PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        status: PropTypes.oneOf(['good', 'warning', 'critical', 'stable']).isRequired
      }).isRequired
    })
  ).isRequired
}

export default StaffOverview
