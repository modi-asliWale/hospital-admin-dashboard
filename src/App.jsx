import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'
import PrivateRoute from './components/Auth/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import Patients from './pages/Patients'
import Staff from './pages/Staff'
import Finance from './pages/Finance'
import Departments from './pages/Departments'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import Login from './pages/Login'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="patients" element={<Patients />} />
            <Route path="staff" element={<Staff />} />
            <Route path="finance" element={<Finance />} />
            <Route path="departments" element={<Departments />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
