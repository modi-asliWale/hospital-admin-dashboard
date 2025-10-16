import PropTypes from 'prop-types'
import Chart from '../common/Chart'

const AdmissionsTrend = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Admissions',
        data: data.admissions,
        borderColor: '#0d6efd',
        backgroundColor: 'rgba(13, 110, 253, 0.12)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Discharges',
        data: data.discharges,
        borderColor: '#20c997',
        backgroundColor: 'rgba(32, 201, 151, 0.12)',
        tension: 0.4,
        fill: true
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
          <h3>Admissions vs Discharges</h3>
          <span className="card-panel__subtitle">Rolling 7-month trend</span>
        </div>
      </div>
      <Chart type="line" data={chartData} options={options} height={300} />
    </div>
  )
}

AdmissionsTrend.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    admissions: PropTypes.arrayOf(PropTypes.number).isRequired,
    discharges: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired
}

export default AdmissionsTrend
