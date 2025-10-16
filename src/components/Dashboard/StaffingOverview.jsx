import PropTypes from 'prop-types'
import Chart from '../common/Chart'

const StaffingOverview = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Doctors',
        data: data.doctors,
        backgroundColor: 'rgba(13, 110, 253, 0.8)',
        borderRadius: 8
      },
      {
        label: 'Nurses',
        data: data.nurses,
        backgroundColor: 'rgba(32, 201, 151, 0.8)',
        borderRadius: 8
      }
    ]
  }

  const options = {
    scales: {
      x: {
        stacked: true
      },
      y: {
        beginAtZero: true,
        stacked: true
      }
    }
  }

  return (
    <div className="card-panel">
      <div className="card-panel__header">
        <div>
          <h3>Staff Allocation by Department</h3>
          <span className="card-panel__subtitle">Current on-duty staffing levels</span>
        </div>
      </div>
      <Chart type="bar" data={chartData} options={options} height={300} />
    </div>
  )
}

StaffingOverview.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    doctors: PropTypes.arrayOf(PropTypes.number).isRequired,
    nurses: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired
}

export default StaffingOverview
