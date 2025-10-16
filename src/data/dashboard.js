import {
  FiActivity,
  FiAlertTriangle,
  FiBarChart2,
  FiClock,
  FiDollarSign,
  FiHeart,
  FiPieChart,
  FiTrendingUp,
  FiUserCheck,
  FiUsers
} from 'react-icons/fi'

export const summaryMetrics = [
  {
    id: 'patients',
    title: 'Active Patients',
    value: 248,
    changePercent: 4.8,
    trend: 'up',
    target: 260,
    icon: FiUsers,
    variant: 'primary',
    subtitle: 'Compared to last week'
  },
  {
    id: 'bed-occupancy',
    title: 'Bed Occupancy',
    value: 82,
    unit: '%',
    changePercent: -1.2,
    trend: 'down',
    target: 85,
    icon: FiActivity,
    variant: 'info',
    subtitle: 'Target occupancy 85%'
  },
  {
    id: 'staff-on-duty',
    title: 'Staff on Duty',
    value: 112,
    changePercent: 6.1,
    trend: 'up',
    target: 115,
    icon: FiUserCheck,
    variant: 'success',
    subtitle: 'Across all departments'
  },
  {
    id: 'monthly-revenue',
    title: 'Monthly Revenue',
    value: 1.28,
    unit: 'M',
    changePercent: 5.4,
    trend: 'up',
    target: 1.35,
    icon: FiDollarSign,
    variant: 'warning',
    subtitle: 'Operating margin 21%'
  }
]

export const quickStats = [
  {
    label: 'Avg Length of Stay',
    value: '4.6 days',
    status: 'stable',
    description: 'Target under 5.0 days'
  },
  {
    label: 'ED Wait Time',
    value: '28 min',
    status: 'warning',
    description: 'Goal under 30 min'
  },
  {
    label: 'Readmission Rate',
    value: '13.4%',
    status: 'good',
    description: 'Target under 15%'
  },
  {
    label: 'Surgery On-Time Starts',
    value: '91%',
    status: 'good',
    description: 'Goal above 90%'
  }
]

export const admissionsTrend = {
  labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  admissions: [142, 155, 149, 172, 188, 194, 205],
  discharges: [136, 149, 143, 165, 180, 186, 197]
}

export const staffingByDepartment = {
  labels: ['Emergency', 'ICU', 'Outpatient', 'Surgery', 'Laboratory', 'Radiology'],
  doctors: [24, 18, 14, 16, 6, 5],
  nurses: [48, 32, 26, 28, 14, 12]
}

export const financialPerformance = {
  months: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  revenue: [1.02, 1.08, 1.04, 1.12, 1.19, 1.22, 1.28],
  expenses: [0.78, 0.81, 0.79, 0.85, 0.88, 0.9, 0.95],
  payorMix: [
    { label: 'Private Insurance', value: 56 },
    { label: 'Medicare', value: 24 },
    { label: 'Medicaid', value: 12 },
    { label: 'Self-Pay', value: 6 },
    { label: 'Other', value: 2 }
  ],
  expenseBreakdown: [
    { label: 'Staffing', value: 36 },
    { label: 'Supplies', value: 24 },
    { label: 'Pharmacy', value: 18 },
    { label: 'Facilities', value: 12 },
    { label: 'Technology', value: 10 }
  ],
  revenueByDepartment: [
    { label: 'Surgery', value: 420000 },
    { label: 'Outpatient', value: 260000 },
    { label: 'Emergency', value: 210000 },
    { label: 'Inpatient', value: 310000 },
    { label: 'Diagnostics', value: 180000 }
  ]
}

export const bedOccupancy = {
  overall: 82,
  target: 85,
  units: [
    { unit: 'Emergency', occupancy: 92 },
    { unit: 'ICU', occupancy: 88 },
    { unit: 'Surgery', occupancy: 79 },
    { unit: 'Outpatient', occupancy: 64 },
    { unit: 'Maternity', occupancy: 81 },
    { unit: 'Pediatrics', occupancy: 72 }
  ]
}

export const alerts = [
  {
    id: 1,
    type: 'warning',
    title: 'ICU near capacity',
    description: 'ICU occupancy at 88% - consider redirect strategy',
    timestamp: '12 minutes ago',
    metric: 'ICU Occupancy'
  },
  {
    id: 2,
    type: 'critical',
    title: 'Staff shortage detected',
    description: 'Nursing coverage below threshold in Emergency department',
    timestamp: '28 minutes ago',
    metric: 'Staff Availability'
  },
  {
    id: 3,
    type: 'info',
    title: 'Financial milestone achieved',
    description: 'Monthly revenue exceeded 1.2M for the first time this quarter',
    timestamp: '1 hour ago',
    metric: 'Revenue'
  },
  {
    id: 4,
    type: 'success',
    title: 'Readmission target met',
    description: 'Readmission rate improved to 13.4% (target < 15%)',
    timestamp: '2 hours ago',
    metric: 'Readmission Rate'
  }
]

export const departmentPerformance = [
  {
    department: 'Emergency',
    occupancy: 92,
    waitTime: 28,
    satisfaction: 4.2,
    trend: 'up'
  },
  {
    department: 'ICU',
    occupancy: 88,
    waitTime: 18,
    satisfaction: 4.5,
    trend: 'stable'
  },
  {
    department: 'Outpatient',
    occupancy: 64,
    waitTime: 22,
    satisfaction: 4.7,
    trend: 'up'
  },
  {
    department: 'Surgery',
    occupancy: 79,
    waitTime: 16,
    satisfaction: 4.4,
    trend: 'up'
  },
  {
    department: 'Laboratory',
    occupancy: 58,
    waitTime: 68,
    satisfaction: 4.1,
    trend: 'down'
  },
  {
    department: 'Radiology',
    occupancy: 61,
    waitTime: 32,
    satisfaction: 4.3,
    trend: 'stable'
  }
]

export const patients = [
  {
    id: 'PT-1022',
    name: 'Michael Lawson',
    status: 'Inpatient',
    department: 'Cardiology',
    admissionDate: '2025-10-14',
    lengthOfStay: 4,
    riskLevel: 'Moderate',
    attendingPhysician: 'Dr. Sophia Patel'
  },
  {
    id: 'PT-1047',
    name: 'Amelia Turner',
    status: 'Inpatient',
    department: 'Orthopedics',
    admissionDate: '2025-10-12',
    lengthOfStay: 6,
    riskLevel: 'Low',
    attendingPhysician: 'Dr. Lucas Chen'
  },
  {
    id: 'PT-1083',
    name: 'Daniel Rodriguez',
    status: 'ICU',
    department: 'Critical Care',
    admissionDate: '2025-10-15',
    lengthOfStay: 2,
    riskLevel: 'High',
    attendingPhysician: 'Dr. Olivia Harris'
  },
  {
    id: 'PT-1118',
    name: 'Sophia Martinez',
    status: 'Outpatient',
    department: 'Oncology',
    admissionDate: '2025-10-16',
    lengthOfStay: 1,
    riskLevel: 'Moderate',
    attendingPhysician: 'Dr. Ethan Wallace'
  },
  {
    id: 'PT-1152',
    name: 'Liam Johnson',
    status: 'Inpatient',
    department: 'Neurology',
    admissionDate: '2025-10-11',
    lengthOfStay: 7,
    riskLevel: 'High',
    attendingPhysician: 'Dr. Ava Martinez'
  },
  {
    id: 'PT-1165',
    name: 'Harper Lee',
    status: 'Observation',
    department: 'Emergency',
    admissionDate: '2025-10-16',
    lengthOfStay: 1,
    riskLevel: 'Low',
    attendingPhysician: 'Dr. Benjamin Scott'
  }
]

export const staffing = [
  {
    id: 'ST-842',
    name: 'Dr. Sophia Patel',
    role: 'Cardiologist',
    department: 'Cardiology',
    shift: 'Day',
    patientsAssigned: 12,
    availability: 'On Duty'
  },
  {
    id: 'ST-851',
    name: 'Nurse James Carter',
    role: 'Charge Nurse',
    department: 'Emergency',
    shift: 'Night',
    patientsAssigned: 18,
    availability: 'On Duty'
  },
  {
    id: 'ST-863',
    name: 'Dr. Olivia Harris',
    role: 'Intensivist',
    department: 'Critical Care',
    shift: 'Day',
    patientsAssigned: 8,
    availability: 'On Duty'
  },
  {
    id: 'ST-872',
    name: 'Nurse Priya Desai',
    role: 'Registered Nurse',
    department: 'ICU',
    shift: 'Day',
    patientsAssigned: 6,
    availability: 'On Duty'
  },
  {
    id: 'ST-884',
    name: 'Dr. Lucas Chen',
    role: 'Orthopedic Surgeon',
    department: 'Orthopedics',
    shift: 'Day',
    patientsAssigned: 10,
    availability: 'In Surgery'
  },
  {
    id: 'ST-899',
    name: 'Nurse Elena Rodriguez',
    role: 'Registered Nurse',
    department: 'Oncology',
    shift: 'Night',
    patientsAssigned: 9,
    availability: 'Off Duty'
  }
]

export const financialHighlights = {
  kpis: [
    {
      id: 'revenue-per-patient',
      label: 'Revenue per Patient',
      value: 5300,
      changePercent: 3.2,
      trend: 'up'
    },
    {
      id: 'operating-margin',
      label: 'Operating Margin',
      value: 21,
      unit: '%',
      changePercent: 1.4,
      trend: 'up'
    },
    {
      id: 'cost-per-admission',
      label: 'Cost per Admission',
      value: 4100,
      changePercent: -2.6,
      trend: 'down'
    }
  ],
  cashFlow: {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    inflow: [920000, 940000, 960000, 990000, 1010000, 1035000, 1080000],
    outflow: [680000, 710000, 690000, 720000, 735000, 750000, 780000]
  }
}

export const reports = [
  {
    id: 'RPT-01',
    title: 'Executive Summary',
    frequency: 'Daily 7:00 AM',
    format: 'PDF & Excel',
    owner: 'Operations'
  },
  {
    id: 'RPT-02',
    title: 'Department Performance Review',
    frequency: 'Weekly Monday 8:00 AM',
    format: 'Dashboard',
    owner: 'Department Heads'
  },
  {
    id: 'RPT-03',
    title: 'Financial KPI Tracker',
    frequency: 'Monthly 1st',
    format: 'Excel',
    owner: 'Finance'
  },
  {
    id: 'RPT-04',
    title: 'Quality & Compliance',
    frequency: 'Monthly 3rd',
    format: 'PDF',
    owner: 'Quality Assurance'
  }
]

export const notifications = [
  {
    id: 'NT-992',
    title: 'New staffing alert',
    message: 'Request additional nursing support for Emergency department',
    time: '5m ago',
    read: false,
    type: 'warning'
  },
  {
    id: 'NT-987',
    title: 'Financial update',
    message: 'Insurance claim approvals increased by 3% this week',
    time: '32m ago',
    read: false,
    type: 'success'
  },
  {
    id: 'NT-972',
    title: 'Maintenance needed',
    message: 'MRI machine scheduled for maintenance tomorrow',
    time: '1h ago',
    read: true,
    type: 'info'
  },
  {
    id: 'NT-951',
    title: 'Compliance reminder',
    message: 'Quarterly HIPAA audit scheduled next week',
    time: '3h ago',
    read: true,
    type: 'info'
  }
]

export const departmentalGoals = [
  {
    id: 'ED',
    name: 'Emergency Department',
    goals: [
      'Maintain wait times under 30 minutes',
      'Achieve patient satisfaction rating above 4.3',
      'Reduce LWBS (left without being seen) rate below 2%'
    ]
  },
  {
    id: 'ICU',
    name: 'Intensive Care Unit',
    goals: [
      'Maintain occupancy between 75-85%',
      'Average ventilation duration under 3 days',
      'Implement new sepsis response protocol'
    ]
  },
  {
    id: 'SURG',
    name: 'Surgery',
    goals: [
      'Maintain on-time start rate above 90%',
      'Reduce surgical site infections below 1%',
      'Enhance post-op patient education materials'
    ]
  }
]

export const performanceBenchmarks = [
  {
    label: 'Patient Satisfaction',
    value: 4.4,
    target: 4.2
  },
  {
    label: 'Staff Satisfaction',
    value: 4.1,
    target: 4.0
  },
  {
    label: 'Average Wait Time (mins)',
    value: 24,
    target: 26
  },
  {
    label: 'Bed Turnover Rate',
    value: 3.1,
    target: 3.0
  }
]

export const complianceTasks = [
  {
    id: 'CP-108',
    name: 'HIPAA quarterly audit',
    dueDate: '2025-10-25',
    owner: 'Compliance',
    status: 'In Progress'
  },
  {
    id: 'CP-112',
    name: 'Lab equipment calibration',
    dueDate: '2025-10-20',
    owner: 'Laboratory',
    status: 'Due Soon'
  },
  {
    id: 'CP-118',
    name: 'Fire safety drill',
    dueDate: '2025-11-01',
    owner: 'Facilities',
    status: 'Scheduled'
  }
]

export const auditLog = [
  {
    id: 'AUD-512',
    user: 'Emma Carter',
    role: 'Administrator',
    action: 'Updated staffing thresholds for ICU department',
    timestamp: '2025-10-16 13:22'
  },
  {
    id: 'AUD-498',
    user: 'Marcus Reed',
    role: 'Finance Manager',
    action: 'Approved scheduled financial KPI report distribution',
    timestamp: '2025-10-16 09:06'
  },
  {
    id: 'AUD-471',
    user: 'Lily Chen',
    role: 'Quality Lead',
    action: 'Generated infection control summary report',
    timestamp: '2025-10-15 18:34'
  }
]

export const patientDemographics = {
  labels: ['18-35', '36-55', '56-70', '70+'],
  male: [52, 68, 74, 48],
  female: [58, 72, 70, 52]
}

export const predictiveForecast = {
  labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
  expectedAdmissions: [205, 212, 198, 184, 190, 202],
  projectedOccupancy: [82, 84, 80, 76, 79, 81]
}

export const resourceUtilization = [
  {
    resource: 'MRI Machines',
    utilization: 78,
    downtime: 6,
    status: 'On Track'
  },
  {
    resource: 'Operating Rooms',
    utilization: 89,
    downtime: 3,
    status: 'On Track'
  },
  {
    resource: 'Ventilators',
    utilization: 65,
    downtime: 1,
    status: 'Requires Attention'
  },
  {
    resource: 'Dialysis Units',
    utilization: 72,
    downtime: 4,
    status: 'On Track'
  }
]
