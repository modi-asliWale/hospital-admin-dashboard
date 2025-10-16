import PropTypes from 'prop-types'
import StatBadge from '../common/StatBadge'

const QuickStats = ({ stats }) => {
  return (
    <div className="quick-stats">
      {stats.map((item) => (
        <StatBadge key={item.label} {...item} />
      ))}
    </div>
  )
}

QuickStats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default QuickStats
