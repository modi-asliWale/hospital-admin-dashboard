import { useEffect, useState } from 'react'
import AdmissionsChart from '../components/PatientManagement/AdmissionsChart'
import BedOccupancy from '../components/PatientManagement/BedOccupancy'
import PatientList from '../components/PatientManagement/PatientList'
import PatientOverview from '../components/PatientManagement/PatientOverview'
import { fetchDashboardSnapshot, fetchPatients } from '../services/dashboardService'

const Patients = () => {
  const [loading, setLoading] = useState(true)
  const [overviewMetrics, setOverviewMetrics] = useState([])
  const [occupancy, setOccupancy] = useState(null)
  const [trendData, setTrendData] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [patientRows, setPatientRows] = useState([])

  useEffect(() => {
    let isMounted = true

    Promise.all([fetchDashboardSnapshot(), fetchPatients()]).then(([snapshot, patientData]) => {
      if (!isMounted) return

      const losStat = snapshot.quickStats.find((item) => item.label === 'Avg Length of Stay')
      const waitTimeStat = snapshot.quickStats.find((item) => item.label === 'ED Wait Time')
      const readmissionStat = snapshot.quickStats.find((item) => item.label === 'Readmission Rate')

      const activePatients = snapshot.summaryMetrics.find((item) => item.id === 'patients')
      const bedMetric = snapshot.summaryMetrics.find((item) => item.id === 'bed-occupancy')

      setOverviewMetrics([
        {
          label: 'Active Patients',
          value: activePatients?.value || 0,
          focus: {
            label: losStat?.label || 'Average LOS',
            value: losStat?.value || '—',
            status: losStat?.status || 'stable'
          }
        },
        {
          label: 'Bed Occupancy',
          value: `${bedMetric?.value || 0}%`,
          focus: {
            label: 'Target',
            value: `${bedMetric?.target || 0}%`,
            status: bedMetric && bedMetric.value > bedMetric.target ? 'warning' : 'good'
          }
        },
        {
          label: 'Emergency Throughput',
          value: waitTimeStat?.value || '—',
          focus: {
            label: 'Readmission Rate',
            value: readmissionStat?.value || '—',
            status: readmissionStat?.status || 'stable'
          }
        }
      ])

      setOccupancy(snapshot.bedOccupancy)
      setTrendData(snapshot.admissionsTrend)
      setForecast(snapshot.predictiveForecast)
      setPatientRows(patientData)
      setLoading(false)
    })

    return () => {
      isMounted = false
    }
  }, [])

  if (loading || !occupancy || !trendData || !forecast) {
    return (
      <div className="page-loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading patient data...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="page-section">
      <h1 className="page-title">Patient Management</h1>
      <p className="page-subtitle">Real-time census, throughput, and forecasted demand</p>

      <PatientOverview metrics={overviewMetrics} />

      <div className="grid grid--2">
        <AdmissionsChart history={trendData} forecast={forecast} />
        <BedOccupancy occupancy={occupancy} />
      </div>

      <PatientList patients={patientRows} />
    </div>
  )
}

export default Patients
