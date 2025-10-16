import { useState } from 'react'

const Settings = () => {
  const [refreshRate, setRefreshRate] = useState(30)
  const [notifications, setNotifications] = useState({
    bedCapacity: true,
    staffShortage: true,
    financialThreshold: false
  })

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="page-section">
      <h1 className="page-title">Settings</h1>
      <p className="page-subtitle">Configure alert thresholds, refresh cadence, and access policies</p>

      <div className="grid grid--2">
        <div className="card-panel">
          <div className="card-panel__header">
            <div>
              <h3>Dashboard Preferences</h3>
              <span className="card-panel__subtitle">Control refresh cadence and layout options</span>
            </div>
          </div>
          <form className="settings-form">
            <label htmlFor="refreshRate">Dashboard refresh interval (seconds)</label>
            <input
              id="refreshRate"
              type="number"
              min="10"
              max="120"
              value={refreshRate}
              onChange={(event) => setRefreshRate(Number(event.target.value))}
            />
            <span className="text-muted">Current: {refreshRate} seconds</span>
          </form>
        </div>

        <div className="card-panel">
          <div className="card-panel__header">
            <div>
              <h3>Alert Notifications</h3>
              <span className="card-panel__subtitle">Enable thresholds for critical alerting</span>
            </div>
          </div>
          <div className="settings-list">
            <label>
              <input
                type="checkbox"
                checked={notifications.bedCapacity}
                onChange={() => toggleNotification('bedCapacity')}
              />
              Bed capacity exceeds 95%
            </label>
            <label>
              <input
                type="checkbox"
                checked={notifications.staffShortage}
                onChange={() => toggleNotification('staffShortage')}
              />
              Staff shortage detected
            </label>
            <label>
              <input
                type="checkbox"
                checked={notifications.financialThreshold}
                onChange={() => toggleNotification('financialThreshold')}
              />
              Financial threshold variance > 5%
            </label>
          </div>
        </div>
      </div>

      <div className="card-panel">
        <div className="card-panel__header">
          <div>
            <h3>Security & Access Control</h3>
            <span className="card-panel__subtitle">Role-based permissions and multi-factor policies</span>
          </div>
        </div>
        <div className="settings-grid">
          <div>
            <h4>Role Policies</h4>
            <ul>
              <li>Administrators: Full access with MFA required</li>
              <li>Department Heads: Restricted to departmental analytics</li>
              <li>Finance Managers: Financial dashboards and reports only</li>
            </ul>
          </div>
          <div>
            <h4>Compliance</h4>
            <ul>
              <li>Audit logging: Enabled (retained 1 year)</li>
              <li>Session timeout: 15 minutes of inactivity</li>
              <li>Password policy: 12 characters minimum with rotation every 90 days</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
