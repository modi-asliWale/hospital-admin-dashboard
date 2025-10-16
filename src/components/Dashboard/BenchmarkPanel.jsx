import PropTypes from 'prop-types'

const BenchmarkPanel = ({ items }) => {
  return (
    <div className="card-panel">
      <div className="card-panel__header">
        <div>
          <h3>Performance Benchmarks</h3>
          <span className="card-panel__subtitle">Actuals vs organizational targets</span>
        </div>
      </div>
      <ul className="benchmark-list">
        {items.map((item) => (
          <li key={item.label}>
            <div className="benchmark-list__label">{item.label}</div>
            <div className="benchmark-list__values">
              <span className="benchmark-list__actual">Actual: {item.value}</span>
              <span className="benchmark-list__target">Target: {item.target}</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${Math.min((item.value / item.target) * 100, 100)}%` }}
                aria-valuenow={item.value}
                aria-valuemin="0"
                aria-valuemax={item.target}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

BenchmarkPanel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      target: PropTypes.number.isRequired
    })
  ).isRequired
}

export default BenchmarkPanel
