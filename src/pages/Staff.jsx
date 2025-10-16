import { useEffect, useState } from 'react'
import StaffingOverview from '../components/Dashboard/StaffingOverview'
import StaffOverview from '../components/StaffManagement/StaffOverview'
import StaffRatio from '../components/StaffManagement/StaffRatio'
import StaffRoster from '../components/StaffManagement/StaffRoster'
import { fetchDashboardSnapshot, fetchStaffRoster } from '../services/dashboardService'

const Staff = () => {
  const [loading, setLoading] = useState(true)
  const [staffStats, setStaffStats] = useState([])
  const [ratioData, setRatioData] = useState([])
  const [staffingChart, setStaffingChart] = useState(null)
  const [staffRows, setStaffRows] = useState([])

  useEffect(() => {
    let isMounted = true

    Promise.all([fetchDashboardSnapshot(), fetchStaffRoster()]).then(([snapshot, staffData]) => {
      if (!isMounted) return

      const onDuty = staffData.filter((member) => member.availability !== 'Off Duty').length
      const nurses = staffData.filter((member) => member.role.toLowerCase().includes('nurse')).length
      const physicians = staffData.length - nurses

      setStaffStats([
        {
          label: 'Staff On Duty',
          value: onDuty,
          helper: { label: 'Total Staff', value: staffData.length, status: 'stable' }
        },
        {
          label: 'Physician Coverage',
          value: physicians,
          helper: { label: 'Specialists active', value: snapshot.staffingByDepartment.labels.length, status: 'good' }
        },
        {
          label: 'Nursing Coverage',
          value: nurses,
          helper: { label: 'Open shifts', value: '3', status: nurses < 10 ? 'warning' : 'good' }
        }
      ])

      setStaffingChart(snapshot.staffingByDepartment)

      setRatioData([
        {
          unit: 'Emergency',
          ratio: '1 : 4.6',
          helper: 'Target 1:5',
          status: 'ok',
          progress: 92
        },
        {
          unit: 'ICU',
          ratio: '1 : 2.8',
          helper: 'Additional respiratory therapist on-call',
          status: 'ok',
          progress: 86
        },
        {
          unit: 'Surgery',
          ratio: '1 : 3.4',
          helper: 'Monitor recovery staffing',
          status: 'ok',
          progress: 88
        },
        {
          unit: 'Outpatient',
          ratio: '1 : 6.1',
          helper: 'Float pool support recommended',
          status: 'alert',
          progress: 72
        }
      ])

      setStaffRows(staffData)
      setLoading(false)
    })

    return () => {
      isMounted = false
    }
  }, [])

  if (loading || !staffingChart) {
    return (
      <div className="page-loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading staff data...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="page-section">
      <h1 className="page-title">Staff Management</h1>
      <p className="page-subtitle">Live staffing coverage, workload, and capacity planning</p>

      <StaffOverview stats={staffStats} />

      <div className="grid grid--2">
        <StaffingOverview data={staffingChart} />
        <StaffRatio ratios={ratioData} />
      </div>

      <StaffRoster staff={staffRows} />
    </div>
  )
}

export default Staff
