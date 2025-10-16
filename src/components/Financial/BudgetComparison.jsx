import PropTypes from 'prop-types'
import { formatCurrency, formatPercent } from '../../utils/formatters'

const BudgetComparison = ({ kpis }) => {
  return (
    <div className="card-panel">
      <div className="card-panel__header">
        <div>
          <h3>Financial KPIs</h3>
          <span className="card-panel__subtitle">Performance against budget targets</span>
        </div>
      </div>
      <div className="kpi-grid">
        {kpis.map((kpi) => (
          <div key={kpi.id} className="kpi-card">
            <span className="kpi-card__label">{kpi.label}</span>
            <span className="kpi-card__value">
              {kpi.unit === '%'
                ? formatPercent(kpi.value, { maximumFractionDigits: 1, signDisplay: 'never' })
                : formatCurrency(kpi.value)}
            </span>
            <span className={`kpi-card__change kpi-card__change--${kpi.trend}`}>
              {kpi.trend === 'down' ? '▼' : '▲'}
              {formatPercent(kpi.changePercent, { maximumFractionDigits: 1 })}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

BudgetComparison.propTypes = {
  kpis: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      changePercent: PropTypes.number.isRequired,
      trend: PropTypes.oneOf(['up', 'down', 'stable']).isRequired,
      unit: PropTypes.string
    })
  ).isRequired
}

export default BudgetComparison
