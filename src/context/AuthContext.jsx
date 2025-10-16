import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user] = useState({
    name: 'Dr. Emma Carter',
    role: 'Hospital Administrator',
    organization: 'MetroCare Health System'
  })

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: true
    }),
    [user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}
