import {
  admissionsTrend,
  alerts,
  auditLog,
  bedOccupancy,
  complianceTasks,
  departmentPerformance,
  departmentalGoals,
  financialHighlights,
  financialPerformance,
  notifications,
  patientDemographics,
  patients,
  performanceBenchmarks,
  predictiveForecast,
  reports,
  resourceUtilization,
  staffing,
  staffingByDepartment,
  summaryMetrics,
  quickStats
} from '../data/dashboard'

const clone = (data) =>
  typeof structuredClone === 'function'
    ? structuredClone(data)
    : JSON.parse(JSON.stringify(data))

const withDelay = (data, delay = 250) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(clone(data)), delay)
  })

export const fetchDashboardSnapshot = () =>
  withDelay(
    {
      summaryMetrics,
      quickStats,
      admissionsTrend,
      staffingByDepartment,
      financialPerformance,
      bedOccupancy,
      alerts,
      departmentPerformance,
      performanceBenchmarks,
      predictiveForecast
    },
    320
  )

export const fetchPatients = () => withDelay(patients, 280)

export const fetchStaffRoster = () => withDelay(staffing, 280)

export const fetchFinancialHighlights = () =>
  withDelay(
    {
      financialHighlights,
      financialPerformance
    },
    300
  )

export const fetchReports = () =>
  withDelay(
    {
      reports,
      auditLog,
      complianceTasks,
      departmentalGoals
    },
    260
  )

export const fetchNotifications = () => withDelay(notifications, 150)

export const fetchDemographics = () =>
  withDelay(
    {
      patientDemographics,
      resourceUtilization
    },
    240
  )
