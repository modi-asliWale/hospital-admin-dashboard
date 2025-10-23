// Mock data for Compliance & Regulatory module

export const coreMeasuresData = {
  overall: 91,
  trend: '+2.3%',
  trendDirection: 'up',
  lastUpdated: '2024-01-23',
  measures: [
    { name: 'Sepsis Core Measure (SEP-1)', score: 94, target: 90, change: '+3%' },
    { name: 'Heart Failure (HF)', score: 92, target: 90, change: '+2%' },
    { name: 'Pneumonia (PN)', score: 89, target: 85, change: '+1%' },
    { name: 'Stroke (STK)', score: 88, target: 85, change: '+4%' },
  ],
};

export const documentationCompletionData = {
  overall: 87,
  trend: '+3.2%',
  trendDirection: 'up',
  target: 95,
  categories: [
    { category: 'Informed Consent', completion: 98, pending: 3, overdue: 0 },
    { category: 'Medical Records', completion: 89, pending: 45, overdue: 5 },
    { category: 'Regulatory Forms', completion: 85, pending: 28, overdue: 8 },
    { category: 'Quality Reports', completion: 92, pending: 12, overdue: 2 },
    { category: 'Audit Documentation', completion: 78, pending: 35, overdue: 12 },
    { category: 'Policy Acknowledgments', completion: 94, pending: 18, overdue: 1 },
  ],
};

export const regulatoryDeadlinesData = [
  {
    id: 1,
    title: 'CMS Quality Reporting',
    dueDate: '2024-02-15',
    daysRemaining: 23,
    priority: 'High',
    status: 'In Progress',
    owner: 'Quality Dept.',
    completionRate: 75,
  },
  {
    id: 2,
    title: 'HIPAA Risk Assessment',
    dueDate: '2024-02-28',
    daysRemaining: 36,
    priority: 'High',
    status: 'In Progress',
    owner: 'Compliance Team',
    completionRate: 60,
  },
  {
    id: 3,
    title: 'Joint Commission Survey Prep',
    dueDate: '2024-03-15',
    daysRemaining: 51,
    priority: 'Critical',
    status: 'Not Started',
    owner: 'Quality Dept.',
    completionRate: 0,
  },
  {
    id: 4,
    title: 'FDA Device Reporting',
    dueDate: '2024-02-10',
    daysRemaining: 18,
    priority: 'Medium',
    status: 'In Progress',
    owner: 'Clinical Engineering',
    completionRate: 85,
  },
  {
    id: 5,
    title: 'Fire Safety Inspection',
    dueDate: '2024-02-05',
    daysRemaining: 13,
    priority: 'High',
    status: 'Ready for Review',
    owner: 'Facilities',
    completionRate: 95,
  },
  {
    id: 6,
    title: 'OSHA Compliance Review',
    dueDate: '2024-03-01',
    daysRemaining: 37,
    priority: 'Medium',
    status: 'In Progress',
    owner: 'HR/Safety',
    completionRate: 45,
  },
];

export const consentComplianceData = {
  overall: 96,
  trend: '+1.5%',
  trendDirection: 'up',
  total: 2845,
  metrics: [
    { type: 'Surgical Consent', obtained: 458, pending: 5, rate: 98.9 },
    { type: 'Treatment Consent', obtained: 1234, pending: 12, rate: 99.0 },
    { type: 'Research Consent', obtained: 89, pending: 3, rate: 96.7 },
    { type: 'Blood Transfusion', obtained: 134, pending: 2, rate: 98.5 },
    { type: 'Anesthesia Consent', obtained: 456, pending: 4, rate: 99.1 },
    { type: 'Imaging Consent', obtained: 467, pending: 8, rate: 98.3 },
  ],
};

export const privacySecurityIncidentsData = [
  {
    id: 1,
    date: '2024-01-23',
    time: '10:30 AM',
    type: 'Privacy Breach',
    severity: 'High',
    category: 'Unauthorized Access',
    department: 'Medical Records',
    status: 'Under Investigation',
    description: 'Employee accessed patient record without authorization',
    affectedRecords: 1,
    reportedTo: 'Privacy Officer',
  },
  {
    id: 2,
    date: '2024-01-22',
    time: '02:15 PM',
    type: 'Security Incident',
    severity: 'Medium',
    category: 'Lost/Stolen Device',
    department: 'Surgery',
    status: 'Resolved',
    description: 'Tablet with patient data temporarily misplaced',
    affectedRecords: 12,
    reportedTo: 'Security Team',
  },
  {
    id: 3,
    date: '2024-01-21',
    time: '09:00 AM',
    type: 'Privacy Breach',
    severity: 'Low',
    category: 'Improper Disposal',
    department: 'Lab',
    status: 'Resolved',
    description: 'Lab reports not properly shredded',
    affectedRecords: 3,
    reportedTo: 'Privacy Officer',
  },
  {
    id: 4,
    date: '2024-01-20',
    time: '04:45 PM',
    type: 'Security Incident',
    severity: 'Critical',
    category: 'Ransomware Attempt',
    department: 'IT',
    status: 'Mitigated',
    description: 'Attempted ransomware attack blocked by security systems',
    affectedRecords: 0,
    reportedTo: 'CISO, Privacy Officer',
  },
  {
    id: 5,
    date: '2024-01-19',
    time: '11:20 AM',
    type: 'Privacy Breach',
    severity: 'Medium',
    category: 'Misdirected Communication',
    department: 'Radiology',
    status: 'Resolved',
    description: 'Fax sent to incorrect facility',
    affectedRecords: 5,
    reportedTo: 'Privacy Officer',
  },
];

export const accreditationReadinessData = {
  overall: 88,
  trend: '+4.2%',
  trendDirection: 'up',
  target: 95,
  lastAssessment: '2024-01-15',
  nextSurvey: '2024-06-15',
  domains: [
    { domain: 'Patient Safety', score: 92, status: 'Ready', findings: 2 },
    { domain: 'Quality Management', score: 90, status: 'Ready', findings: 3 },
    { domain: 'Leadership', score: 85, status: 'Action Needed', findings: 5 },
    { domain: 'Environment of Care', score: 88, status: 'Ready', findings: 4 },
    { domain: 'Medication Management', score: 91, status: 'Ready', findings: 2 },
    { domain: 'Infection Prevention', score: 87, status: 'Action Needed', findings: 4 },
  ],
};

export const complianceTrendsData = [
  { month: 'Jul', coreMeasures: 86, documentation: 82, consent: 94, accreditation: 84 },
  { month: 'Aug', coreMeasures: 87, documentation: 83, consent: 95, accreditation: 85 },
  { month: 'Sep', coreMeasures: 88, documentation: 84, consent: 95, accreditation: 86 },
  { month: 'Oct', coreMeasures: 89, documentation: 85, consent: 96, accreditation: 87 },
  { month: 'Nov', coreMeasures: 90, documentation: 86, consent: 96, accreditation: 87 },
  { month: 'Dec', coreMeasures: 90, documentation: 86, consent: 96, accreditation: 88 },
  { month: 'Jan', coreMeasures: 91, documentation: 87, consent: 96, accreditation: 88 },
];

export const auditReadinessData = {
  overall: 85,
  trend: '+3.8%',
  trendDirection: 'up',
  indicators: [
    { indicator: 'Documentation Quality', score: 87, status: 'Good' },
    { indicator: 'Policy Compliance', score: 92, status: 'Excellent' },
    { indicator: 'Staff Training Records', score: 89, status: 'Good' },
    { indicator: 'Equipment Maintenance Logs', score: 78, status: 'Needs Improvement' },
    { indicator: 'Incident Reporting', score: 91, status: 'Excellent' },
    { indicator: 'Quality Metrics Tracking', score: 84, status: 'Good' },
  ],
};

export const incidentTypesData = [
  { month: 'Jul', privacy: 8, security: 3, breach: 2 },
  { month: 'Aug', privacy: 7, security: 4, breach: 1 },
  { month: 'Sep', privacy: 6, security: 3, breach: 2 },
  { month: 'Oct', privacy: 5, security: 2, breach: 1 },
  { month: 'Nov', privacy: 4, security: 2, breach: 1 },
  { month: 'Dec', privacy: 5, security: 3, breach: 0 },
  { month: 'Jan', privacy: 4, security: 2, breach: 1 },
];

export const severityColors = {
  Critical: '#dc3545',
  High: '#fd7e14',
  Medium: '#ffc107',
  Low: '#28a745',
};

export const statusColors = {
  'Under Investigation': '#ffc107',
  'Resolved': '#28a745',
  'Mitigated': '#0056b3',
  'Pending': '#6c757d',
};

export const priorityColors = {
  Critical: '#dc3545',
  High: '#fd7e14',
  Medium: '#ffc107',
  Low: '#28a745',
};
