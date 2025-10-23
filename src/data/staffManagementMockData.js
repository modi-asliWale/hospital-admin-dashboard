// Mock data for Staff Management & Workforce module

export const staffingRatiosData = [
  {
    unit: 'Emergency Department',
    currentRatio: 3.1,
    targetRatio: 3.5,
    coverage: 96,
    status: 'safe',
    openShifts: 2,
    notes: 'Float pool covering surge beds',
  },
  {
    unit: 'Intensive Care Unit',
    currentRatio: 1.9,
    targetRatio: 2.0,
    coverage: 98,
    status: 'safe',
    openShifts: 1,
    notes: 'Experienced travel RN assignment ends in 2 weeks',
  },
  {
    unit: 'Med-Surg West',
    currentRatio: 4.2,
    targetRatio: 4.0,
    coverage: 88,
    status: 'watch',
    openShifts: 3,
    notes: 'Requesting float support for evening shift',
  },
  {
    unit: 'Pediatrics',
    currentRatio: 3.4,
    targetRatio: 3.5,
    coverage: 92,
    status: 'safe',
    openShifts: 1,
    notes: 'New graduate orientation completing this week',
  },
  {
    unit: 'Operating Room',
    currentRatio: 1.6,
    targetRatio: 1.8,
    coverage: 94,
    status: 'safe',
    openShifts: 0,
    notes: 'On-call team fully staffed',
  },
  {
    unit: 'Behavioral Health',
    currentRatio: 5.0,
    targetRatio: 4.2,
    coverage: 82,
    status: 'risk',
    openShifts: 4,
    notes: 'Agency contract pending approval for night shift support',
  },
];

export const shiftCoverageDepartments = [
  { key: 'emergency', label: 'Emergency' },
  { key: 'icu', label: 'ICU' },
  { key: 'medSurg', label: 'Med-Surg' },
  { key: 'pediatrics', label: 'Pediatrics' },
  { key: 'operatingRoom', label: 'Operating Room' },
  { key: 'behavioralHealth', label: 'Behavioral Health' },
];

export const shiftCoverageHeatMapData = [
  {
    shift: 'Day',
    emergency: 98,
    icu: 95,
    medSurg: 91,
    pediatrics: 94,
    operatingRoom: 100,
    behavioralHealth: 85,
  },
  {
    shift: 'Evening',
    emergency: 94,
    icu: 92,
    medSurg: 88,
    pediatrics: 89,
    operatingRoom: 97,
    behavioralHealth: 79,
  },
  {
    shift: 'Night',
    emergency: 90,
    icu: 89,
    medSurg: 82,
    pediatrics: 86,
    operatingRoom: 93,
    behavioralHealth: 76,
  },
];

export const departmentStaffingGaugeData = [
  { department: 'Emergency', coverage: 96, target: 93, trend: '+2%' },
  { department: 'ICU', coverage: 94, target: 95, trend: '-1%' },
  { department: 'Med-Surg', coverage: 88, target: 90, trend: '-3%' },
  { department: 'Pediatrics', coverage: 92, target: 90, trend: '+1%' },
  { department: 'Operating Room', coverage: 97, target: 95, trend: '+1%' },
  { department: 'Behavioral Health', coverage: 83, target: 90, trend: '-4%' },
];

export const overtimeSummaryData = {
  totalHours: 412,
  change: '+5.2%',
  trendDirection: 'up',
  averagePerFTE: 5.8,
  perDepartment: [
    { department: 'Emergency', hours: 118, change: '+7%' },
    { department: 'ICU', hours: 96, change: '+4%' },
    { department: 'Med-Surg', hours: 82, change: '+6%' },
    { department: 'Pediatrics', hours: 52, change: '+2%' },
    { department: 'Operating Room', hours: 38, change: '+3%' },
  ],
  drivers: [
    'Winter respiratory surge increasing census',
    'High demand for advanced cardiac training coverage',
    'Transition of agency staff to full-time roles in progress',
  ],
};

export const absenteeismSummaryData = {
  rate: 3.4,
  change: '-0.6%',
  trendDirection: 'down',
  benchmark: 4.2,
  perDepartment: [
    { department: 'Emergency', rate: 4.1, change: '-0.4%' },
    { department: 'ICU', rate: 3.2, change: '-0.5%' },
    { department: 'Med-Surg', rate: 3.8, change: '-0.2%' },
    { department: 'Pediatrics', rate: 2.9, change: '-0.7%' },
    { department: 'Operating Room', rate: 2.5, change: '-0.6%' },
  ],
  topReasons: [
    { reason: 'Illness', percent: 46 },
    { reason: 'Family Leave', percent: 22 },
    { reason: 'Injury/Restrictions', percent: 18 },
    { reason: 'Education/Training', percent: 14 },
  ],
};

export const openPositionsData = [
  {
    id: 1,
    role: 'Registered Nurse',
    department: 'Emergency',
    shift: 'Night',
    openings: 2,
    urgency: 'High',
    daysOpen: 12,
  },
  {
    id: 2,
    role: 'Registered Nurse',
    department: 'Behavioral Health',
    shift: 'Evening',
    openings: 3,
    urgency: 'Critical',
    daysOpen: 28,
  },
  {
    id: 3,
    role: 'Respiratory Therapist',
    department: 'ICU',
    shift: 'Night',
    openings: 1,
    urgency: 'Medium',
    daysOpen: 9,
  },
  {
    id: 4,
    role: 'Surgical Technologist',
    department: 'Operating Room',
    shift: 'Day',
    openings: 1,
    urgency: 'Medium',
    daysOpen: 17,
  },
  {
    id: 5,
    role: 'Certified Nursing Assistant',
    department: 'Med-Surg',
    shift: 'Evening',
    openings: 2,
    urgency: 'High',
    daysOpen: 21,
  },
];

export const credentialAlertsData = [
  {
    id: 1,
    staff: 'Sarah Patel',
    role: 'RN - ICU',
    credential: 'ACLS',
    expiresInDays: 12,
    status: 'Expiring Soon',
  },
  {
    id: 2,
    staff: 'Michael Chen',
    role: 'Respiratory Therapist',
    credential: 'BLS',
    expiresInDays: 5,
    status: 'Action Required',
  },
  {
    id: 3,
    staff: 'Emily Davis',
    role: 'RN - Emergency',
    credential: 'TNCC',
    expiresInDays: 19,
    status: 'Expiring Soon',
  },
  {
    id: 4,
    staff: 'Daniel Lopez',
    role: 'CNA - Med-Surg',
    credential: 'CPR',
    expiresInDays: 7,
    status: 'Action Required',
  },
  {
    id: 5,
    staff: 'Priya Singh',
    role: 'RN - Behavioral Health',
    credential: 'CPI',
    expiresInDays: 3,
    status: 'Critical',
  },
];

export const schedulingCalendarData = [
  {
    day: 'Mon',
    dateLabel: 'Jan 22',
    coverage: 98,
    staffingLevel: 'Optimal',
    notes: 'Float pool assigned to Med-Surg evenings',
    shifts: [
      { name: 'Day', coverage: 100, status: 'On Track' },
      { name: 'Evening', coverage: 97, status: 'On Track' },
      { name: 'Night', coverage: 94, status: 'Monitor' },
    ],
  },
  {
    day: 'Tue',
    dateLabel: 'Jan 23',
    coverage: 95,
    staffingLevel: 'Stable',
    notes: 'Agency RN double covering ICU nights',
    shifts: [
      { name: 'Day', coverage: 96, status: 'On Track' },
      { name: 'Evening', coverage: 93, status: 'Monitor' },
      { name: 'Night', coverage: 92, status: 'Monitor' },
    ],
  },
  {
    day: 'Wed',
    dateLabel: 'Jan 24',
    coverage: 92,
    staffingLevel: 'Watch',
    notes: 'Additional float support requested for Behavioral Health',
    shifts: [
      { name: 'Day', coverage: 95, status: 'On Track' },
      { name: 'Evening', coverage: 90, status: 'Monitor' },
      { name: 'Night', coverage: 86, status: 'At Risk' },
    ],
  },
  {
    day: 'Thu',
    dateLabel: 'Jan 25',
    coverage: 94,
    staffingLevel: 'Stable',
    notes: 'Cross-training session for Med-Surg RNs',
    shifts: [
      { name: 'Day', coverage: 97, status: 'On Track' },
      { name: 'Evening', coverage: 92, status: 'Monitor' },
      { name: 'Night', coverage: 90, status: 'Monitor' },
    ],
  },
  {
    day: 'Fri',
    dateLabel: 'Jan 26',
    coverage: 96,
    staffingLevel: 'Optimal',
    notes: 'Weekend peak coverage confirmed',
    shifts: [
      { name: 'Day', coverage: 99, status: 'On Track' },
      { name: 'Evening', coverage: 96, status: 'On Track' },
      { name: 'Night', coverage: 94, status: 'Monitor' },
    ],
  },
  {
    day: 'Sat',
    dateLabel: 'Jan 27',
    coverage: 90,
    staffingLevel: 'Watch',
    notes: 'Covering short call-outs with overtime',
    shifts: [
      { name: 'Day', coverage: 92, status: 'Monitor' },
      { name: 'Evening', coverage: 88, status: 'At Risk' },
      { name: 'Night', coverage: 86, status: 'At Risk' },
    ],
  },
  {
    day: 'Sun',
    dateLabel: 'Jan 28',
    coverage: 91,
    staffingLevel: 'Watch',
    notes: 'Behavioral Health nights 2 RNs short',
    shifts: [
      { name: 'Day', coverage: 93, status: 'Monitor' },
      { name: 'Evening', coverage: 90, status: 'Monitor' },
      { name: 'Night', coverage: 84, status: 'At Risk' },
    ],
  },
];

export const skillsMixChartData = [
  { name: 'Registered Nurses', value: 46 },
  { name: 'Licensed Practical Nurses', value: 14 },
  { name: 'Nurse Assistants', value: 20 },
  { name: 'Advanced Practice', value: 8 },
  { name: 'Allied Health', value: 7 },
  { name: 'Administrative Support', value: 5 },
];

export const skillsMixHighlights = [
  { label: 'Advanced Certifications', value: '38%' },
  { label: 'Cross-trained Staff', value: '26%' },
  { label: 'Travel/Agency', value: '6%' },
];

export const workforceAllocationChartData = [
  { department: 'Emergency', directCare: 68, support: 18, ancillary: 8, administrative: 6 },
  { department: 'ICU', directCare: 72, support: 16, ancillary: 7, administrative: 5 },
  { department: 'Med-Surg', directCare: 61, support: 22, ancillary: 10, administrative: 7 },
  { department: 'Pediatrics', directCare: 65, support: 20, ancillary: 9, administrative: 6 },
  { department: 'Operating Room', directCare: 58, support: 24, ancillary: 12, administrative: 6 },
  { department: 'Behavioral Health', directCare: 55, support: 25, ancillary: 11, administrative: 9 },
];

export const workforceSatisfactionData = {
  overallScore: 84,
  change: '+1.8',
  trendDirection: 'up',
  participationRate: 76,
  benchmark: 82,
  drivers: [
    { label: 'Engagement', score: 86, change: '+2' },
    { label: 'Leadership Support', score: 81, change: '+1' },
    { label: 'Workload Balance', score: 72, change: '+3' },
    { label: 'Professional Growth', score: 79, change: '+4' },
  ],
  highlights: [
    'Expanded preceptor program increased satisfaction among new hires',
    'Night shift self-scheduling pilot improved retention feedback',
    'Leadership rounding cadence maintained at 96% completion',
  ],
};
