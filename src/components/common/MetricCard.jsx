import PropTypes from 'prop-types'
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'
import { formatChange, formatNumber } from '../../utils/formatters'

const MetricCard = ({
  title,
  value,
  unit,
  changePercent,
  trend = 'up',
  target,
  icon: Icon,
  variant = 'primary',
  subtitle
}) => {
  const showCurrency = unit === 'M' || unit === 'K'

  const displayValue = (() => {
    if (showCurrency && typeof value === 'number') {
      return `$${value.toFixed(2)}${unit}`
    }
    if (typeof value === 'number') {
      return formatNumber(value)
    }
    return value
  })()

  const targetLabel = (() => {
    if (!target) return null
    if (showCurrency && typeof target === 'number') {
      return `Target: $${Number(target).toFixed(2)}${unit}`
    }
    return `Target: ${target}${unit || ''}`
  })()

  const changeLabel = typeof changePercent === 'number' ? formatChange(changePercent) : null

  return (
    <div className={`metric-card metric-card--${variant}`}>
      <div className="metric-card__header">
        <div className="metric-card__icon">{Icon ? <Icon size={22} /> : null}</div>
        <div className="metric-card__meta">
          <span className="metric-card__title">{title}</span>
          {subtitle && <span className="metric-card__subtitle">{subtitle}</span>}
        </div>
      </div>
      <div className="metric-card__body">
        <span className="metric-card__value">
          {displayValue}
          {!showCurrency && unit ? <span className="metric-card__unit">{unit}</span> : null}
        </span>
        {changeLabel ? (
          <div className={`metric-card__change metric-card__change--${trend}`}>
            {trend === 'down' ? <FiArrowDownRight size={16} /> : <FiArrowUpRight size={16} />}
            <span>{changeLabel}</span>
          </div>
        ) : null}
        {targetLabel ? <span className="metric-card__target">{targetLabel}</span> : null}
      </div>
    </div>
  )
}

MetricCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  unit: PropTypes.string,
  changePercent: PropTypes.number,
  trend: PropTypes.oneOf(['up', 'down', 'stable']),
  target: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.elementType,
  variant: PropTypes.string,
  subtitle: PropTypes.string
}

export default MetricCard
