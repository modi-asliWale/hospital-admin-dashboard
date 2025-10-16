import PropTypes from 'prop-types'
import Table from '../common/Table'

const StaffRoster = ({ staff }) => {
  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Role', dataIndex: 'role' },
    { title: 'Department', dataIndex: 'department' },
    { title: 'Shift', dataIndex: 'shift' },
    { title: 'Availability', dataIndex: 'availability' },
    {
      title: 'Patients Assigned',
      dataIndex: 'patientsAssigned'
    }
  ]

  return (
    <div className="card-panel">
      <div className="card-panel__header">
        <div>
          <h3>Staff Roster</h3>
          <span className="card-panel__subtitle">Current shift assignments</span>
        </div>
      </div>
      <Table columns={columns} data={staff} />
    </div>
  )
}

StaffRoster.propTypes = {
  staff: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default StaffRoster
