import { useEffect, useState } from 'react'
import Table from '../components/common/Table'
import { fetchReports } from '../services/dashboardService'

const Reports = () => {
  const [loading, setLoading] = useState(true)
  const [reports, setReports] = useState([])
  const [compliance, setCompliance] = useState([])
  const [auditTrail, setAuditTrail] = useState([])

  useEffect(() => {
    let isMounted = true

    fetchReports().then((payload) => {
      if (!isMounted) return
      setReports(payload.reports)
      setCompliance(payload.complianceTasks)
      setAuditTrail(payload.auditLog)
      setLoading(false)
    })

    return () => {
      isMounted = false
    }
  }, [])

  if (loading) {
    return (
      <div className="page-loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading reports...</span>
        </div>
      </div>
    )
  }

  const reportColumns = [
    { title: 'Report ID', dataIndex: 'id' },
    { title: 'Title', dataIndex: 'title' },
    { title: 'Frequency', dataIndex: 'frequency' },
    { title: 'Format', dataIndex: 'format' },
    { title: 'Owner', dataIndex: 'owner' }
  ]

  const complianceColumns = [
    { title: 'Task', dataIndex: 'name' },
    { title: 'Owner', dataIndex: 'owner' },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      render: (value) => new Date(value).toLocaleDateString()
    },
    { title: 'Status', dataIndex: 'status' }
  ]

  const auditColumns = [
    { title: 'Event ID', dataIndex: 'id' },
    { title: 'User', dataIndex: 'user' },
    { title: 'Role', dataIndex: 'role' },
    { title: 'Action', dataIndex: 'action' },
    { title: 'Timestamp', dataIndex: 'timestamp' }
  ]

  return (
    <div className="page-section">
      <h1 className="page-title">Reports & Analytics</h1>
      <p className="page-subtitle">Scheduled reporting, compliance tasks, and audit activity</p>

      <Table columns={reportColumns} data={reports} />

      <div className="grid grid--2">
        <Table columns={complianceColumns} data={compliance} />
        <Table columns={auditColumns} data={auditTrail} />
      </div>
    </div>
  )
}

export default Reports
