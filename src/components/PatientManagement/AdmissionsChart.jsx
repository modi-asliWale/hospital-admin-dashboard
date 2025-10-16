import PropTypes from 'prop-types'
import Chart from '../common/Chart'

const AdmissionsChart = ({ history, forecast }) => {
  const combinedLabels = [...history.labels, ...forecast.labels]
  const chartData = {
    labels: combinedLabels,
    datasets: [
      {
        label: 'Admissions (actual)',
        data: [...history.admissions, ...Array(forecast.labels.length).fill(null)],
        borderColor: '#0d6efd',
        backgroundColor: 'rgba(13, 110, 253, 0.1)',
        tension: 0.35,
        fill: true
      },
      {
        label: 'Forecast admissions',
        data: [
          ...Array(history.labels.length).fill(null),
          ...forecast.expectedAdmissions
        ],
        borderColor: '#6f42c1',
        borderDash: [6, 4],
        pointStyle: 'rectRounded'
      }
    ]
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  return (
    <div className="card-panel">
      <div className="card-panel__header">
        <div>
          <h3>Admissions Trend & Forecast</h3>
          <span className="card-panel__subtitle">Historical and projected admissions load</span>
        </div>
      </div>
      <Chart type="line" data={chartData} options={options} height={320} />
    </div>
  )
}

AdmissionsChart.propTypes = {
  history: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    admissions: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired,
  forecast: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    expectedAdmissions: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired
}

export default AdmissionsChart
