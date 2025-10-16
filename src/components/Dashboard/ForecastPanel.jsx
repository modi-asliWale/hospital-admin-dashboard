import PropTypes from 'prop-types'
import Chart from '../common/Chart'

const ForecastPanel = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Expected Admissions',
        data: data.expectedAdmissions,
        borderColor: '#0d6efd',
        backgroundColor: 'rgba(13, 110, 253, 0.08)',
        tension: 0.35,
        fill: true
      },
      {
        label: 'Projected Occupancy %',
        data: data.projectedOccupancy,
        borderColor: '#198754',
        backgroundColor: 'rgba(25, 135, 84, 0.12)',
        tension: 0.35,
        fill: true,
        yAxisID: 'y1'
      }
    ]
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 240,
        position: 'left'
      },
      y1: {
        beginAtZero: true,
        suggestedMax: 100,
        position: 'right',
        grid: {
          drawOnChartArea: false
        }
      }
    }
  }

  return (
    <div className="card-panel">
      <div className="card-panel__header">
        <div>
          <h3>Six-Month Forecast</h3>
          <span className="card-panel__subtitle">Projected demand & occupancy</span>
        </div>
      </div>
      <Chart type="line" data={chartData} options={options} height={280} />
    </div>
  )
}

ForecastPanel.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    expectedAdmissions: PropTypes.arrayOf(PropTypes.number).isRequired,
    projectedOccupancy: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired
}

export default ForecastPanel
