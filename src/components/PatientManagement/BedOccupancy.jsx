import PropTypes from 'prop-types'

const BedOccupancy = ({ occupancy }) => {
  return (
    <div className="card-panel">
      <div className="card-panel__header">
        <div>
          <h3>Bed Occupancy by Unit</h3>
          <span className="card-panel__subtitle">Target occupancy {occupancy.target}%</span>
        </div>
        <div className="card-panel__meta-value">
          <span className="metric">{occupancy.overall}%</span>
          <span className="label">Overall occupancy</span>
        </div>
      </div>
      <ul className="occupancy-list">
        {occupancy.units.map((unit) => (
          <li key={unit.unit}>
            <div className="occupancy-list__header">
              <span>{unit.unit}</span>
              <span>{unit.occupancy}%</span>
            </div>
            <div className="progress">
              <div
                className={`progress-bar ${unit.occupancy > occupancy.target ? 'bg-danger' : 'bg-primary'}`}
                role="progressbar"
                style={{ width: `${unit.occupancy}%` }}
                aria-valuenow={unit.occupancy}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

BedOccupancy.propTypes = {
  occupancy: PropTypes.shape({
    overall: PropTypes.number.isRequired,
    target: PropTypes.number.isRequired,
    units: PropTypes.arrayOf(
      PropTypes.shape({
        unit: PropTypes.string.isRequired,
        occupancy: PropTypes.number.isRequired
      })
    ).isRequired
  }).isRequired
}

export default BedOccupancy
