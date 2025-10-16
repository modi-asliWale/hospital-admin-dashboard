import { useEffect, useState } from 'react'
import DepartmentPerformance from '../components/Dashboard/DepartmentPerformance'
import { fetchDashboardSnapshot, fetchDemographics, fetchReports } from '../services/dashboardService'

const Departments = () => {
  const [loading, setLoading] = useState(true)
  const [departments, setDepartments] = useState([])
  const [goals, setGoals] = useState([])
  const [resources, setResources] = useState([])

  useEffect(() => {
    let isMounted = true

    Promise.all([fetchDashboardSnapshot(), fetchReports(), fetchDemographics()]).then(
      ([snapshot, reportData, demographicData]) => {
        if (!isMounted) return
        setDepartments(snapshot.departmentPerformance)
        setGoals(reportData.departmentalGoals)
        setResources(demographicData.resourceUtilization)
        setLoading(false)
      }
    )

    return () => {
      isMounted = false
    }
  }, [])

  if (loading) {
    return (
      <div className="page-loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading department data...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="page-section">
      <h1 className="page-title">Department Dashboards</h1>
      <p className="page-subtitle">Operational KPIs and focus areas for each service line</p>

      <DepartmentPerformance departments={departments} />

      <div className="grid grid--2">
        <div className="card-panel">
          <div className="card-panel__header">
            <div>
              <h3>Departmental Goals</h3>
              <span className="card-panel__subtitle">Current quarter strategic initiatives</span>
            </div>
          </div>
          <ul className="goals-list">
            {goals.map((goal) => (
              <li key={goal.id}>
                <div className="goals-list__title">{goal.name}</div>
                <ul>
                  {goal.goals.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-panel">
          <div className="card-panel__header">
            <div>
              <h3>Resource Utilization</h3>
              <span className="card-panel__subtitle">Equipment availability & downtime</span>
            </div>
          </div>
          <ul className="resource-list">
            {resources.map((resource) => (
              <li key={resource.resource}>
                <div className="resource-list__header">
                  <span>{resource.resource}</span>
                  <span>{resource.status}</span>
                </div>
                <div className="progress mb-2">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: `${resource.utilization}%` }}
                    aria-valuenow={resource.utilization}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
                <small>Downtime this month: {resource.downtime} hrs</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Departments
