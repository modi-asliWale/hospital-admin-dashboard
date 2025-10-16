import SummaryCards from '../components/Dashboard/SummaryCards'
import QuickStats from '../components/Dashboard/QuickStats'
import AdmissionsTrend from '../components/Dashboard/AdmissionsTrend'
import StaffingOverview from '../components/Dashboard/StaffingOverview'
import FinancialSummary from '../components/Dashboard/FinancialSummary'
import AlertsPanel from '../components/Dashboard/AlertsPanel'
import DepartmentPerformance from '../components/Dashboard/DepartmentPerformance'
import ForecastPanel from '../components/Dashboard/ForecastPanel'
import BenchmarkPanel from '../components/Dashboard/BenchmarkPanel'
import { useDashboardData } from '../hooks/useDashboardData'

const Home = () => {
  const { data, loading } = useDashboardData()

  if (loading || !data) {
    return (
      <div className="page-loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading dashboard...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="page-section">
      <SummaryCards metrics={data.summaryMetrics} />
      <QuickStats stats={data.quickStats} />

      <div className="grid grid--2">
        <AdmissionsTrend data={data.admissionsTrend} />
        <StaffingOverview data={data.staffingByDepartment} />
      </div>

      <div className="grid grid--2">
        <FinancialSummary data={data.financialPerformance} />
        <AlertsPanel alerts={data.alerts} />
      </div>

      <div className="grid grid--2">
        <ForecastPanel data={data.predictiveForecast} />
        <BenchmarkPanel items={data.performanceBenchmarks} />
      </div>

      <DepartmentPerformance departments={data.departmentPerformance} />
    </div>
  )
}

export default Home
