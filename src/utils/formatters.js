export const formatNumber = (value) => {
  if (value === null || value === undefined) return '—'
  if (typeof value === 'number' && value >= 1000) {
    return value.toLocaleString('en-US')
  }
  return value
}

export const formatCompactNumber = (value) => {
  if (value === null || value === undefined) return '—'
  return Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(value)
}

export const formatCurrency = (value, { currency = 'USD', maximumFractionDigits = 0 } = {}) => {
  if (value === null || value === undefined) return '—'
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits
  }).format(value)
}

export const formatPercent = (value, { signDisplay = 'auto', maximumFractionDigits = 1 } = {}) => {
  if (value === null || value === undefined) return '—'
  return Intl.NumberFormat('en-US', {
    style: 'percent',
    maximumFractionDigits,
    signDisplay
  }).format(value / 100)
}

export const formatChange = (value) => {
  if (value === null || value === undefined) return '0%'
  const sign = value > 0 ? '+' : ''
  return `${sign}${value.toFixed(1)}%`
}

export const getInitials = (name = '') => {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase())
    .slice(0, 2)
    .join('')
}
