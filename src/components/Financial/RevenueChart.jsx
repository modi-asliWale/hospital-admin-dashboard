import PropTypes from 'prop-types'
import Chart from '../common/Chart'

const RevenueChart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Revenue',
        data: data.revenue,
        borderColor: '#0d6efd',
        backgroundColor: 'rgba(13, 110, 253, 0.15)',
        tension: 0.35,
        fill: true
      },
      {
        label: 'Expenses',
        data: data.expenses,
        borderColor: '#dc3545',
        backgroundColor: 'rgba(220, 53, 69, 0.12)',
        tension: 0.35,
        fill: true
      }
    ]
  }

  return (
    <div className="card-panel">
      <div className="card-panel__header">
        <div>
          <h3>Revenue vs Expenses</h3>
          <span className="card-panel__subtitle">Trailing 7 months</span>
        </div>
      </div>
      <Chart type="line" data={chartData} height={320} />
    </div>
  )
}

RevenueChart.propTypes = {
  data: PropTypes.shape({
    months: PropTypes.arrayOf(PropTypes.string).isRequired,
    revenue: PropTypes.arrayOf(PropTypes.number).isRequired,
    expenses: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired
}

export default RevenueChart
