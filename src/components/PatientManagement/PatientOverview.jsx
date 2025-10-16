import PropTypes from 'prop-types'
import StatBadge from '../common/StatBadge'

const PatientOverview = ({ metrics }) => {
  return (
    <div className="patient-overview">
      {metrics.map((metric) => (
        <div key={metric.label} className="patient-overview__item">
          <div className="patient-overview__label">{metric.label}</div>
          <div className="patient-overview__value">{metric.value}</div>
          <StatBadge label={metric.focus.label} value={metric.focus.value} status={metric.focus.status} />
        </div>
      ))}
    </div>
  )
}

PatientOverview.propTypes = {
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      focus: PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        status: PropTypes.oneOf(['good', 'warning', 'critical', 'stable']).isRequired
      }).isRequired
    })
  ).isRequired
}

export default PatientOverview
