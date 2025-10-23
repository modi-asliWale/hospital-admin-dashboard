// Mock data for Emergency Department Dashboard

export const censusCounts = {
  total: 42,
  waiting: 15,
  inTreatment: 18,
  admitted: 6,
  discharged: 3,
};

export const waitTimeMetrics = {
  averageWaitTime: 45, // minutes
  medianWaitTime: 38,
  longestWait: 127,
  alertThreshold: 60,
  criticalThreshold: 120,
  patientsOverThreshold: 8,
};

export const d2dAndLOSMetrics = {
  averageDoorToDoctor: 32, // minutes
  medianDoorToDoctor: 28,
  averageLOS: 185, // minutes
  medianLOS: 156,
  d2dTarget: 30,
  losTarget: 180,
};

export const admittedWaitingList = [
  {
    id: 1,
    name: 'Sarah Johnson',
    age: 67,
    gender: 'F',
    arrivalTime: '08:15 AM',
    waitTime: 145,
    admittingDepartment: 'Cardiology',
    diagnosis: 'Acute MI',
    priority: 'Critical',
  },
  {
    id: 2,
    name: 'Michael Chen',
    age: 54,
    gender: 'M',
    arrivalTime: '09:30 AM',
    waitTime: 95,
    admittingDepartment: 'ICU',
    diagnosis: 'Respiratory Distress',
    priority: 'High',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    age: 42,
    gender: 'F',
    arrivalTime: '10:00 AM',
    waitTime: 65,
    admittingDepartment: 'Surgery',
    diagnosis: 'Acute Abdomen',
    priority: 'High',
  },
  {
    id: 4,
    name: 'James Wilson',
    age: 73,
    gender: 'M',
    arrivalTime: '10:45 AM',
    waitTime: 20,
    admittingDepartment: 'Medicine',
    diagnosis: 'Pneumonia',
    priority: 'Medium',
  },
  {
    id: 5,
    name: 'Lisa Brown',
    age: 58,
    gender: 'F',
    arrivalTime: '11:15 AM',
    waitTime: 10,
    admittingDepartment: 'Neurology',
    diagnosis: 'Stroke Symptoms',
    priority: 'Critical',
  },
  {
    id: 6,
    name: 'Robert Taylor',
    age: 61,
    gender: 'M',
    arrivalTime: '11:30 AM',
    waitTime: 5,
    admittingDepartment: 'Cardiology',
    diagnosis: 'Chest Pain',
    priority: 'High',
  },
];

export const lwbsMetrics = {
  rate: 3.2, // percentage
  count: 12,
  totalPatients: 375,
  previousRate: 4.1,
  trend: '-0.9%',
  trendDirection: 'down',
};

export const traumaActivations = [
  {
    id: 1,
    time: '07:45 AM',
    level: 'Level 1',
    patient: 'John Doe',
    age: 34,
    gender: 'M',
    mechanism: 'MVC - High Speed',
    status: 'Active',
    eta: 'Arrived',
  },
  {
    id: 2,
    time: '09:20 AM',
    level: 'Level 2',
    patient: 'Jane Smith',
    age: 28,
    gender: 'F',
    mechanism: 'Fall from Height',
    status: 'Stabilized',
    eta: 'Arrived',
  },
  {
    id: 3,
    time: '11:05 AM',
    level: 'Level 1',
    patient: 'Unknown',
    age: 45,
    gender: 'M',
    mechanism: 'GSW - Multiple',
    status: 'Incoming',
    eta: '3 mins',
  },
];

export const erStatusBoard = [
  {
    id: 1,
    bed: 'ER-01',
    patient: 'Maria Garcia',
    age: 52,
    chiefComplaint: 'Chest Pain',
    acuity: 2,
    arrivalTime: '08:30 AM',
    status: 'In Treatment',
    provider: 'Dr. Anderson',
  },
  {
    id: 2,
    bed: 'ER-02',
    patient: 'David Miller',
    age: 35,
    chiefComplaint: 'Abdominal Pain',
    acuity: 3,
    arrivalTime: '09:15 AM',
    status: 'Waiting for Results',
    provider: 'Dr. Lee',
  },
  {
    id: 3,
    bed: 'ER-03',
    patient: 'Jennifer White',
    age: 29,
    chiefComplaint: 'Migraine',
    acuity: 4,
    arrivalTime: '09:45 AM',
    status: 'In Treatment',
    provider: 'NP Johnson',
  },
  {
    id: 4,
    bed: 'ER-04',
    patient: 'Robert Harris',
    age: 68,
    chiefComplaint: 'Shortness of Breath',
    acuity: 2,
    arrivalTime: '10:00 AM',
    status: 'Awaiting Admission',
    provider: 'Dr. Chen',
  },
  {
    id: 5,
    bed: 'ER-05',
    patient: 'Linda Martinez',
    age: 41,
    chiefComplaint: 'Laceration',
    acuity: 4,
    arrivalTime: '10:20 AM',
    status: 'In Treatment',
    provider: 'PA Smith',
  },
  {
    id: 6,
    bed: 'ER-06',
    patient: 'Thomas Anderson',
    age: 76,
    chiefComplaint: 'Fall',
    acuity: 3,
    arrivalTime: '10:30 AM',
    status: 'Waiting for X-Ray',
    provider: 'Dr. Brown',
  },
  {
    id: 7,
    bed: 'ER-07',
    patient: 'Patricia Taylor',
    age: 58,
    chiefComplaint: 'Chest Pain',
    acuity: 2,
    arrivalTime: '10:45 AM',
    status: 'In Treatment',
    provider: 'Dr. Anderson',
  },
  {
    id: 8,
    bed: 'ER-08',
    patient: 'Christopher Lee',
    age: 32,
    chiefComplaint: 'Ankle Injury',
    acuity: 5,
    arrivalTime: '11:00 AM',
    status: 'Waiting',
    provider: null,
  },
];

export const waitTimeTrendData = [
  { time: '12 AM', waitTime: 32 },
  { time: '2 AM', waitTime: 28 },
  { time: '4 AM', waitTime: 25 },
  { time: '6 AM', waitTime: 35 },
  { time: '8 AM', waitTime: 42 },
  { time: '10 AM', waitTime: 48 },
  { time: '12 PM', waitTime: 52 },
  { time: '2 PM', waitTime: 45 },
  { time: '4 PM', waitTime: 50 },
  { time: '6 PM', waitTime: 58 },
  { time: '8 PM', waitTime: 62 },
  { time: '10 PM', waitTime: 48 },
];

export const acuityDistribution = [
  { name: 'Level 1 - Resuscitation', value: 3, color: '#dc3545' },
  { name: 'Level 2 - Emergent', value: 8, color: '#fd7e14' },
  { name: 'Level 3 - Urgent', value: 15, color: '#ffc107' },
  { name: 'Level 4 - Less Urgent', value: 12, color: '#28a745' },
  { name: 'Level 5 - Non-Urgent', value: 4, color: '#17a2b8' },
];

export const acuityColors = {
  1: '#dc3545',
  2: '#fd7e14',
  3: '#ffc107',
  4: '#28a745',
  5: '#17a2b8',
};

export const acuityLabels = {
  1: 'Resuscitation',
  2: 'Emergent',
  3: 'Urgent',
  4: 'Less Urgent',
  5: 'Non-Urgent',
};
