import PropTypes from 'prop-types'
import Table from '../common/Table'

const PatientList = ({ patients }) => {
  const columns = [
    { title: 'Patient ID', dataIndex: 'id' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Status', dataIndex: 'status' },
    { title: 'Department', dataIndex: 'department' },
    { title: 'Attending Physician', dataIndex: 'attendingPhysician' },
    {
      title: 'Admission Date',
      dataIndex: 'admissionDate',
      render: (value) => new Date(value).toLocaleDateString()
    },
    {
      title: 'Length of Stay',
      dataIndex: 'lengthOfStay',
      render: (value) => `${value} days`
    },
    { title: 'Risk Level', dataIndex: 'riskLevel' }
  ]

  return (
    <div className="card-panel">
      <div className="card-panel__header">
        <div>
          <h3>Active Patient Census</h3>
          <span className="card-panel__subtitle">Tracked in the last 24 hours</span>
        </div>
      </div>
      <Table columns={columns} data={patients} />
    </div>
  )
}

PatientList.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PatientList
