import {
  FiBarChart2,
  FiGrid,
  FiLayers,
  FiSettings,
  FiUsers,
  FiUserCheck
} from 'react-icons/fi'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

export const SIDEBAR_LINKS = [
  {
    to: '/',
    label: 'Dashboard Home',
    icon: FiGrid
  },
  {
    to: '/patients',
    label: 'Patient Management',
    icon: FiUsers
  },
  {
    to: '/staff',
    label: 'Staff Management',
    icon: FiUserCheck
  },
  {
    to: '/finance',
    label: 'Financial Overview',
    icon: RiMoneyDollarCircleLine
  },
  {
    to: '/departments',
    label: 'Departments',
    icon: FiLayers
  },
  {
    to: '/reports',
    label: 'Reports & Analytics',
    icon: FiBarChart2
  },
  {
    to: '/settings',
    label: 'Settings',
    icon: FiSettings
  }
]

export const ALERT_VARIANTS = {
  success: 'success',
  warning: 'warning',
  info: 'info',
  critical: 'danger'
}
