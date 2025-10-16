import PropTypes from 'prop-types'
import Chart from '../common/Chart'
import { formatCurrency } from '../../utils/formatters'

const FinancialSummary = ({ data }) => {
  const doughnutData = {
    labels: data.payorMix.map((item) => item.label),
    datasets: [
      {
        data: data.payorMix.map((item) => item.value),
        backgroundColor: ['#0d6efd', '#20c997', '#ffc107', '#e83e8c', '#6c757d'],
        borderWidth: 0
      }
    ]
  }

  const revenue = data.revenue[data.revenue.length - 1]
  const expenses = data.expenses[data.expenses.length - 1]
  const operatingMargin = revenue - expenses

  return (
    <div className="card-panel">
      <div className="card-panel__header">
        <div>
          <h3>Financial Performance</h3>
          <span className="card-panel__subtitle">Current month snapshot</span>
        </div>
        <div className="financial-highlights">
          <div>
            <span className="label">Revenue</span>
            <span className="value">{formatCurrency(revenue * 1_000_000)}</span>
          </div>
          <div>
            <span className="label">Expenses</span>
            <span className="value">{formatCurrency(expenses * 1_000_000)}</span>
          </div>
          <div>
            <span className="label">Operating Margin</span>
            <span className="value">{formatCurrency(operatingMargin * 1_000_000)}</span>
          </div>
        </div>
      </div>
      <Chart type="doughnut" data={doughnutData} height={260} />
    </div>
  )
}

FinancialSummary.propTypes = {
  data: PropTypes.shape({
    payorMix: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      })
    ).isRequired,
    revenue: PropTypes.arrayOf(PropTypes.number).isRequired,
    expenses: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired
}

export default FinancialSummary
