import PropTypes from 'prop-types'
import MetricCard from '../common/MetricCard'

const SummaryCards = ({ metrics }) => {
  return (
    <div className="summary-cards">
      {metrics.map((metric) => (
        <MetricCard key={metric.id} {...metric} />
      ))}
    </div>
  )
}

SummaryCards.propTypes = {
  metrics: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default SummaryCards
