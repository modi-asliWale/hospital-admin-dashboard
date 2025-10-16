import PropTypes from 'prop-types'
import Chart from '../common/Chart'

const CashFlowChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Cash Inflow',
        data: data.inflow,
        borderColor: '#198754',
        backgroundColor: 'rgba(25, 135, 84, 0.15)',
        tension: 0.35,
        fill: true
      },
      {
        label: 'Cash Outflow',
        data: data.outflow,
        borderColor: '#fd7e14',
        backgroundColor: 'rgba(253, 126, 20, 0.12)',
        tension: 0.35,
        fill: true
      }
    ]
  }

  return (
    <div className="card-panel">
      <div className="card-panel__header">
        <div>
          <h3>Cash Flow Projection</h3>
          <span className="card-panel__subtitle">Operating cash analysis</span>
        </div>
      </div>
      <Chart type="line" data={chartData} height={280} />
    </div>
  )
}

CashFlowChart.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    inflow: PropTypes.arrayOf(PropTypes.number).isRequired,
    outflow: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired
}

export default CashFlowChart
