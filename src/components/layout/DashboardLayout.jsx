import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Sidebar from '../common/Sidebar'

const DashboardLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev)
  }

  return (
    <div className={`dashboard-layout ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className="dashboard-content">
        <Header onToggleSidebar={toggleSidebar} />
        <main className="dashboard-main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default DashboardLayout
