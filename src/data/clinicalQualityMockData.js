// Mock data for Clinical Quality & Safety module

export const safetyScorecardsData = {
  overallScore: 92,
  trend: '+3.5%',
  trendDirection: 'up',
  lastUpdated: '2024-01-23',
  categories: [
    { name: 'Patient Safety', score: 94, change: '+2%' },
    { name: 'Medication Safety', score: 91, change: '+4%' },
    { name: 'Surgical Safety', score: 96, change: '+1%' },
    { name: 'Fall Prevention', score: 88, change: '-1%' },
  ],
};

export const infectionRatesData = {
  overall: 2.3,
  trend: '-0.5%',
  trendDirection: 'down',
  target: 2.0,
  types: [
    { type: 'HAI', rate: 1.8, change: '-0.3%', cases: 12 },
    { type: 'CLABSI', rate: 0.8, change: '-0.2%', cases: 5 },
    { type: 'CAUTI', rate: 1.2, change: '-0.1%', cases: 8 },
    { type: 'SSI', rate: 1.5, change: '+0.1%', cases: 10 },
    { type: 'VAP', rate: 0.6, change: '-0.4%', cases: 4 },
  ],
};

export const infectionTrendsData = [
  { month: 'Jul', HAI: 2.1, CLABSI: 1.0, CAUTI: 1.4, SSI: 1.8, VAP: 0.9 },
  { month: 'Aug', HAI: 2.0, CLABSI: 0.9, CAUTI: 1.3, SSI: 1.7, VAP: 0.8 },
  { month: 'Sep', HAI: 1.9, CLABSI: 0.8, CAUTI: 1.3, SSI: 1.6, VAP: 0.7 },
  { month: 'Oct', HAI: 1.9, CLABSI: 0.9, CAUTI: 1.2, SSI: 1.5, VAP: 0.7 },
  { month: 'Nov', HAI: 1.8, CLABSI: 0.8, CAUTI: 1.2, SSI: 1.5, VAP: 0.6 },
  { month: 'Dec', HAI: 1.8, CLABSI: 0.8, CAUTI: 1.2, SSI: 1.5, VAP: 0.6 },
  { month: 'Jan', HAI: 1.8, CLABSI: 0.8, CAUTI: 1.2, SSI: 1.5, VAP: 0.6 },
];

export const readmissionData = {
  rate: 8.5,
  trend: '-1.2%',
  trendDirection: 'down',
  target: 8.0,
  nationalAverage: 9.2,
  timeFrames: {
    day7: 2.3,
    day14: 4.8,
    day30: 8.5,
  },
  byDepartment: [
    { department: 'Cardiology', rate: 12.3, benchmark: 11.5, cases: 45 },
    { department: 'Surgery', rate: 7.8, benchmark: 8.2, cases: 28 },
    { department: 'ICU', rate: 9.1, benchmark: 9.5, cases: 32 },
    { department: 'General Ward', rate: 6.2, benchmark: 7.0, cases: 22 },
    { department: 'Orthopedics', rate: 5.9, benchmark: 6.5, cases: 18 },
  ],
};

export const mortalityData = {
  rate: 1.8,
  trend: '-0.3%',
  trendDirection: 'down',
  target: 1.5,
  nationalAverage: 2.1,
  expectedRate: 1.9,
  smr: 0.95,
  byDepartment: [
    { department: 'ICU', rate: 8.5, benchmark: 9.2, cases: 12 },
    { department: 'Cardiac', rate: 3.2, benchmark: 3.8, cases: 5 },
    { department: 'Emergency', rate: 1.5, benchmark: 1.8, cases: 6 },
    { department: 'Surgery', rate: 0.9, benchmark: 1.2, cases: 3 },
    { department: 'General Ward', rate: 0.5, benchmark: 0.7, cases: 2 },
  ],
};

export const mortalityTrendsData = [
  { month: 'Jul', actual: 2.2, expected: 2.1, national: 2.3 },
  { month: 'Aug', actual: 2.1, expected: 2.0, national: 2.2 },
  { month: 'Sep', actual: 2.0, expected: 2.0, national: 2.1 },
  { month: 'Oct', actual: 1.9, expected: 1.9, national: 2.1 },
  { month: 'Nov', actual: 1.9, expected: 1.9, national: 2.1 },
  { month: 'Dec', actual: 1.8, expected: 1.9, national: 2.1 },
  { month: 'Jan', actual: 1.8, expected: 1.9, national: 2.1 },
];

export const satisfactionScoresData = {
  overall: 87,
  trend: '+2.5%',
  trendDirection: 'up',
  target: 90,
  categories: [
    { category: 'Nursing Care', score: 91, change: '+3%', responses: 456 },
    { category: 'Physician Care', score: 89, change: '+2%', responses: 456 },
    { category: 'Communication', score: 85, change: '+4%', responses: 456 },
    { category: 'Cleanliness', score: 88, change: '+1%', responses: 456 },
    { category: 'Food Quality', score: 78, change: '+2%', responses: 456 },
    { category: 'Pain Management', score: 86, change: '+3%', responses: 456 },
  ],
};

export const satisfactionTrendsData = [
  { month: 'Jul', overall: 82, nursing: 86, physician: 85, communication: 80 },
  { month: 'Aug', overall: 83, nursing: 87, physician: 86, communication: 81 },
  { month: 'Sep', overall: 84, nursing: 88, physician: 86, communication: 82 },
  { month: 'Oct', overall: 85, nursing: 89, physician: 87, communication: 83 },
  { month: 'Nov', overall: 86, nursing: 90, physician: 88, communication: 84 },
  { month: 'Dec', overall: 86, nursing: 90, physician: 88, communication: 84 },
  { month: 'Jan', overall: 87, nursing: 91, physician: 89, communication: 85 },
];

export const complianceMetricsData = {
  overall: 94,
  trend: '+1.8%',
  trendDirection: 'up',
  target: 95,
  metrics: [
    { metric: 'Hand Hygiene', rate: 96, target: 95, change: '+2%' },
    { metric: 'Medication Administration', rate: 98, target: 98, change: '+1%' },
    { metric: 'Patient Identification', rate: 99, target: 99, change: '0%' },
    { metric: 'Fall Risk Assessment', rate: 92, target: 95, change: '+3%' },
    { metric: 'Documentation', rate: 90, target: 95, change: '+2%' },
    { metric: 'Isolation Precautions', rate: 95, target: 95, change: '+1%' },
  ],
};

export const qualityComparisonData = [
  { category: 'Safety', hospital: 92, national: 85, target: 95 },
  { category: 'Infection Control', hospital: 89, national: 82, target: 90 },
  { category: 'Readmission', hospital: 91, national: 86, target: 92 },
  { category: 'Mortality', hospital: 94, national: 88, target: 95 },
  { category: 'Satisfaction', hospital: 87, national: 82, target: 90 },
  { category: 'Compliance', hospital: 94, national: 88, target: 95 },
];

export const criticalIncidentsData = [
  {
    id: 1,
    date: '2024-01-23',
    time: '08:45 AM',
    type: 'Medication Error',
    severity: 'High',
    department: 'ICU',
    status: 'Under Investigation',
    description: 'Incorrect dosage administered',
  },
  {
    id: 2,
    date: '2024-01-23',
    time: '06:30 AM',
    type: 'Patient Fall',
    severity: 'Medium',
    department: 'General Ward',
    status: 'Resolved',
    description: 'Patient fell while walking to bathroom',
  },
  {
    id: 3,
    date: '2024-01-22',
    time: '11:20 PM',
    type: 'Hospital-Acquired Infection',
    severity: 'High',
    department: 'Surgery',
    status: 'Under Investigation',
    description: 'Post-operative wound infection detected',
  },
  {
    id: 4,
    date: '2024-01-22',
    time: '03:15 PM',
    type: 'Equipment Failure',
    severity: 'Critical',
    department: 'Emergency',
    status: 'Resolved',
    description: 'Ventilator malfunction in ER',
  },
  {
    id: 5,
    date: '2024-01-22',
    time: '10:00 AM',
    type: 'Pressure Ulcer',
    severity: 'Medium',
    department: 'ICU',
    status: 'Monitoring',
    description: 'Stage 2 pressure ulcer identified',
  },
];

export const incidentTrendsData = [
  { month: 'Jul', medication: 4, falls: 6, infections: 3, equipment: 2, other: 3 },
  { month: 'Aug', medication: 3, falls: 5, infections: 2, equipment: 1, other: 2 },
  { month: 'Sep', medication: 3, falls: 4, infections: 2, equipment: 2, other: 2 },
  { month: 'Oct', medication: 2, falls: 4, infections: 2, equipment: 1, other: 2 },
  { month: 'Nov', medication: 2, falls: 3, infections: 1, equipment: 1, other: 1 },
  { month: 'Dec', medication: 1, falls: 3, infections: 2, equipment: 1, other: 1 },
  { month: 'Jan', medication: 1, falls: 2, infections: 1, equipment: 1, other: 0 },
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
  'Monitoring': '#0056b3',
  'Pending': '#6c757d',
};
