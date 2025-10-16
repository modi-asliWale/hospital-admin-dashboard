import PropTypes from 'prop-types'
import Chart from '../common/Chart'

const ExpenseBreakdown = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        label: 'Expense Allocation (%)',
        data: data.map((item) => item.value),
        backgroundColor: 'rgba(255, 193, 7, 0.8)',
        borderRadius: 10
      }
    ]
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }

  return (
    <div className="card-panel">
      <div className="card-panel__header">
        <div>
          <h3>Expense Breakdown</h3>
          <span className="card-panel__subtitle">Percentage of total operating spend</span>
        </div>
      </div>
      <Chart type="bar" data={chartData} options={options} height={280} />
    </div>
  )
}

ExpenseBreakdown.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired
}

export default ExpenseBreakdown
