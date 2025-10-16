import PropTypes from 'prop-types'
import Table from '../common/Table'

const DepartmentPerformance = ({ departments }) => {
  const columns = [
    { title: 'Department', dataIndex: 'department' },
    {
      title: 'Occupancy',
      dataIndex: 'occupancy',
      render: (value) => `${value}%`
    },
    {
      title: 'Avg Wait Time',
      dataIndex: 'waitTime',
      render: (value) => `${value} min`
    },
    {
      title: 'Satisfaction',
      dataIndex: 'satisfaction',
      render: (value) => value.toFixed(1)
    },
    {
      title: 'Trend',
      dataIndex: 'trend',
      render: (value) => value.charAt(0).toUpperCase() + value.slice(1)
    }
  ]

  return (
    <div className="card-panel">
      <div className="card-panel__header">
        <div>
          <h3>Department Performance</h3>
          <span className="card-panel__subtitle">Operational KPIs by service line</span>
        </div>
      </div>
      <Table columns={columns} data={departments} />
    </div>
  )
}

DepartmentPerformance.propTypes = {
  departments: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DepartmentPerformance
