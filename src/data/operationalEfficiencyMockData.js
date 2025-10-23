export const equipmentUtilizationData = [
  { name: 'MRI Machines', utilization: 87, available: 3, total: 5, status: 'optimal' },
  { name: 'CT Scanners', utilization: 92, available: 1, total: 4, status: 'high' },
  { name: 'X-Ray Machines', utilization: 78, available: 4, total: 8, status: 'optimal' },
  { name: 'Ultrasound', utilization: 65, available: 5, total: 7, status: 'good' },
  { name: 'Ventilators', utilization: 95, available: 2, total: 15, status: 'critical' },
  { name: 'Defibrillators', utilization: 45, available: 8, total: 12, status: 'good' },
];

export const labTurnaroundData = {
  overall: {
    average: 42,
    target: 45,
    trend: '-3 mins',
    trendDirection: 'down',
  },
  byType: [
    { test: 'Blood Tests', average: 35, target: 40, count: 156 },
    { test: 'Urinalysis', average: 25, target: 30, count: 89 },
    { test: 'X-Ray', average: 48, target: 45, count: 134 },
    { test: 'CT Scan', average: 62, target: 60, count: 45 },
    { test: 'MRI', average: 78, target: 75, count: 32 },
    { test: 'Microbiology', average: 120, target: 150, count: 28 },
  ],
  trend: [
    { day: 'Mon', average: 45, target: 45 },
    { day: 'Tue', average: 43, target: 45 },
    { day: 'Wed', average: 44, target: 45 },
    { day: 'Thu', average: 41, target: 45 },
    { day: 'Fri', average: 42, target: 45 },
    { day: 'Sat', average: 40, target: 45 },
    { day: 'Sun', average: 39, target: 45 },
  ],
};

export const pharmacyTurnaroundData = {
  overall: {
    average: 18,
    target: 20,
    trend: '-2 mins',
    trendDirection: 'down',
  },
  byType: [
    { type: 'STAT Orders', average: 8, target: 10, count: 45 },
    { type: 'Routine Orders', average: 22, target: 25, count: 234 },
    { type: 'IV Medications', average: 15, target: 15, count: 78 },
    { type: 'Controlled Substances', average: 12, target: 15, count: 56 },
  ],
  trend: [
    { day: 'Mon', average: 20, target: 20 },
    { day: 'Tue', average: 19, target: 20 },
    { day: 'Wed', average: 18, target: 20 },
    { day: 'Thu', average: 17, target: 20 },
    { day: 'Fri', average: 18, target: 20 },
    { day: 'Sat', average: 19, target: 20 },
    { day: 'Sun', average: 17, target: 20 },
  ],
};

export const transportTimesData = {
  overall: {
    average: 12,
    target: 15,
    trend: '+1 min',
    trendDirection: 'up',
  },
  byType: [
    { type: 'Patient Transport', average: 15, target: 15, count: 89 },
    { type: 'Lab Specimen', average: 8, target: 10, count: 156 },
    { type: 'Medication Delivery', average: 10, target: 12, count: 234 },
    { type: 'Equipment Transport', average: 18, target: 20, count: 45 },
  ],
};

export const housekeepingTimesData = {
  overall: {
    average: 35,
    target: 40,
    trend: '-5 mins',
    trendDirection: 'down',
  },
  byType: [
    { type: 'Room Turnover', average: 45, target: 45, count: 67 },
    { type: 'Routine Cleaning', average: 28, target: 30, count: 234 },
    { type: 'Terminal Cleaning', average: 62, target: 60, count: 23 },
    { type: 'Spill Response', average: 12, target: 15, count: 18 },
  ],
};

export const maintenanceOrdersData = {
  summary: {
    total: 145,
    pending: 32,
    inProgress: 28,
    completed: 85,
    completionRate: 59,
  },
  byPriority: [
    { priority: 'Critical', count: 5, avgTime: 2.3 },
    { priority: 'High', count: 18, avgTime: 4.5 },
    { priority: 'Medium', count: 56, avgTime: 12.8 },
    { priority: 'Low', count: 66, avgTime: 24.5 },
  ],
  byDepartment: [
    { department: 'HVAC', count: 34, status: 'High' },
    { department: 'Electrical', count: 28, status: 'Medium' },
    { department: 'Plumbing', count: 22, status: 'Medium' },
    { department: 'Medical Equipment', count: 45, status: 'High' },
    { department: 'Building', count: 16, status: 'Low' },
  ],
  recent: [
    { id: 'WO-1234', description: 'HVAC repair - ICU', priority: 'Critical', status: 'In Progress', created: '2024-01-23 08:30' },
    { id: 'WO-1235', description: 'MRI machine calibration', priority: 'High', status: 'Pending', created: '2024-01-23 09:15' },
    { id: 'WO-1236', description: 'Elevator maintenance', priority: 'Medium', status: 'In Progress', created: '2024-01-23 07:45' },
    { id: 'WO-1237', description: 'Leaking faucet - Room 305', priority: 'Low', status: 'Pending', created: '2024-01-23 10:00' },
    { id: 'WO-1238', description: 'Emergency generator test', priority: 'High', status: 'Completed', created: '2024-01-22 14:20' },
  ],
};

export const resourceUtilizationData = {
  operatingRooms: [
    { name: 'OR-1', utilization: 92, hours: 11.0, capacity: 12 },
    { name: 'OR-2', utilization: 88, hours: 10.5, capacity: 12 },
    { name: 'OR-3', utilization: 78, hours: 9.4, capacity: 12 },
    { name: 'OR-4', utilization: 85, hours: 10.2, capacity: 12 },
    { name: 'OR-5', utilization: 95, hours: 11.4, capacity: 12 },
  ],
  emergencyRooms: [
    { name: 'ER-1', utilization: 88, patients: 42, capacity: 48 },
    { name: 'ER-2', utilization: 75, patients: 36, capacity: 48 },
    { name: 'ER-3', utilization: 92, patients: 44, capacity: 48 },
  ],
  diagnosticLabs: [
    { name: 'Blood Lab', utilization: 82, tests: 328, capacity: 400 },
    { name: 'Imaging Lab', utilization: 76, tests: 152, capacity: 200 },
    { name: 'Pathology Lab', utilization: 65, tests: 78, capacity: 120 },
  ],
};

export const serviceResponseData = {
  overall: {
    average: 8.5,
    target: 10,
    trend: '-0.5 mins',
    trendDirection: 'down',
  },
  byService: [
    { service: 'Nursing Call', average: 5.2, target: 5, count: 456 },
    { service: 'IT Support', average: 15.8, target: 15, count: 89 },
    { service: 'Facilities', average: 12.3, target: 15, count: 134 },
    { service: 'Security', average: 3.5, target: 5, count: 23 },
    { service: 'Food Service', average: 18.2, target: 20, count: 267 },
  ],
  trend: [
    { hour: '00:00', average: 6.5 },
    { hour: '04:00', average: 5.2 },
    { hour: '08:00', average: 9.8 },
    { hour: '12:00', average: 11.2 },
    { hour: '16:00', average: 10.5 },
    { hour: '20:00', average: 8.8 },
  ],
};

export const availabilityStatusData = {
  equipment: {
    available: 87,
    inUse: 45,
    maintenance: 8,
    outOfService: 3,
  },
  rooms: {
    available: 34,
    occupied: 156,
    cleaning: 12,
    maintenance: 4,
  },
  staff: {
    available: 234,
    onDuty: 189,
    onBreak: 28,
    offline: 17,
  },
  services: {
    operational: 24,
    degraded: 2,
    offline: 1,
  },
};

export const trendAnalysisData = {
  equipmentUtilization: [
    { month: 'Jul', utilization: 78 },
    { month: 'Aug', utilization: 82 },
    { month: 'Sep', utilization: 80 },
    { month: 'Oct', utilization: 85 },
    { month: 'Nov', utilization: 83 },
    { month: 'Dec', utilization: 87 },
    { month: 'Jan', utilization: 84 },
  ],
  serviceTimes: [
    { month: 'Jul', lab: 48, pharmacy: 22, transport: 14, housekeeping: 42 },
    { month: 'Aug', lab: 46, pharmacy: 21, transport: 13, housekeeping: 40 },
    { month: 'Sep', lab: 45, pharmacy: 20, transport: 13, housekeeping: 38 },
    { month: 'Oct', lab: 44, pharmacy: 19, transport: 12, housekeeping: 37 },
    { month: 'Nov', lab: 43, pharmacy: 19, transport: 12, housekeeping: 36 },
    { month: 'Dec', lab: 43, pharmacy: 18, transport: 12, housekeeping: 36 },
    { month: 'Jan', lab: 42, pharmacy: 18, transport: 12, housekeeping: 35 },
  ],
  responseTime: [
    { week: 'Week 1', avg: 9.2, target: 10 },
    { week: 'Week 2', avg: 8.8, target: 10 },
    { week: 'Week 3', avg: 8.5, target: 10 },
    { week: 'Week 4', avg: 8.5, target: 10 },
  ],
  maintenanceCompletion: [
    { week: 'Week 1', rate: 55 },
    { week: 'Week 2', rate: 58 },
    { week: 'Week 3', rate: 57 },
    { week: 'Week 4', rate: 59 },
  ],
};

export const equipmentStatusColors = {
  optimal: '#28a745',
  good: '#17a2b8',
  high: '#ffc107',
  critical: '#dc3545',
};

export const priorityColors = {
  Critical: '#dc3545',
  High: '#fd7e14',
  Medium: '#ffc107',
  Low: '#28a745',
};

export const statusColors = {
  available: '#28a745',
  inUse: '#0056b3',
  occupied: '#0056b3',
  maintenance: '#ffc107',
  outOfService: '#dc3545',
  onDuty: '#0056b3',
  onBreak: '#ffc107',
  offline: '#6c757d',
  operational: '#28a745',
  degraded: '#ffc107',
  cleaning: '#17a2b8',
};
