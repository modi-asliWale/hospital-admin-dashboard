import PropTypes from 'prop-types'

const StaffRatio = ({ ratios }) => {
  return (
    <div className="card-panel">
      <div className="card-panel__header">
        <div>
          <h3>Staff to Patient Ratios</h3>
          <span className="card-panel__subtitle">Benchmark target 1:5 for inpatient units</span>
        </div>
      </div>
      <ul className="ratio-list">
        {ratios.map((ratio) => (
          <li key={ratio.unit}>
            <div className="ratio-list__header">
              <span>{ratio.unit}</span>
              <span>{ratio.ratio}</span>
            </div>
            <div className="progress">
              <div
                className={`progress-bar ${ratio.status === 'alert' ? 'bg-warning' : 'bg-success'}`}
                role="progressbar"
                style={{ width: `${Math.min(ratio.progress, 100)}%` }}
                aria-valuenow={ratio.progress}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
            <small className="ratio-list__helper">{ratio.helper}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}

StaffRatio.propTypes = {
  ratios: PropTypes.arrayOf(
    PropTypes.shape({
      unit: PropTypes.string.isRequired,
      ratio: PropTypes.string.isRequired,
      helper: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['ok', 'alert']).isRequired,
      progress: PropTypes.number.isRequired
    })
  ).isRequired
}

export default StaffRatio
