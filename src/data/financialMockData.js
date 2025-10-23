// Mock data for Financial Performance Dashboard

export const revenueSummary = {
  totalRevenue: 12845000,
  previousMonthRevenue: 11920000,
  ytdRevenue: 145680000,
  targetRevenue: 150000000,
  growthRate: 7.8,
  dailyAverage: 428167,
};

export const marginMetrics = {
  grossMargin: 42.5,
  operatingMargin: 18.3,
  netMargin: 12.7,
  previousGrossMargin: 41.2,
  previousOperatingMargin: 17.5,
  previousNetMargin: 11.9,
};

export const costMetrics = {
  totalCosts: 10125000,
  laborCosts: 5875000,
  supplyCosts: 2450000,
  operationalCosts: 1800000,
  previousTotalCosts: 9850000,
  costPerPatient: 8120,
  targetCostPerPatient: 7800,
};

export const reimbursementRates = {
  medicare: 87.5,
  medicaid: 82.3,
  privateInsurance: 95.2,
  selfPay: 45.6,
  overall: 86.8,
  previousOverall: 85.3,
};

export const arStatus = {
  currentAR: 18950000,
  zeroTo30Days: 12500000,
  thirtyOneTo60Days: 3850000,
  sixtyOneTo90Days: 1600000,
  over90Days: 1000000,
  dso: 45, // Days Sales Outstanding
  targetDSO: 40,
};

export const deniedClaimsTrends = [
  { month: 'Jan', denialRate: 8.5, amount: 425000 },
  { month: 'Feb', denialRate: 9.2, amount: 468000 },
  { month: 'Mar', denialRate: 8.8, amount: 452000 },
  { month: 'Apr', denialRate: 7.5, amount: 385000 },
  { month: 'May', denialRate: 7.2, amount: 368000 },
  { month: 'Jun', denialRate: 6.8, amount: 352000 },
  { month: 'Jul', denialRate: 6.5, amount: 338000 },
  { month: 'Aug', denialRate: 6.2, amount: 325000 },
];

export const supplyyCosts = [
  { category: 'Pharmaceuticals', cost: 1250000, budget: 1150000, variance: 8.7 },
  { category: 'Medical Supplies', cost: 680000, budget: 720000, variance: -5.6 },
  { category: 'Surgical Supplies', cost: 425000, budget: 400000, variance: 6.3 },
  { category: 'Laboratory', cost: 95000, budget: 105000, variance: -9.5 },
];

export const budgetVarianceData = [
  { department: 'Emergency', actual: 2450000, budget: 2380000, variance: 2.9 },
  { department: 'Surgery', actual: 3280000, budget: 3350000, variance: -2.1 },
  { department: 'ICU', actual: 2150000, budget: 2200000, variance: -2.3 },
  { department: 'Cardiology', actual: 1850000, budget: 1750000, variance: 5.7 },
  { department: 'Radiology', actual: 925000, budget: 980000, variance: -5.6 },
  { department: 'Laboratory', actual: 685000, budget: 720000, variance: -4.9 },
];

export const revenueTrendData = [
  { month: 'Jan', revenue: 11250000, target: 11500000 },
  { month: 'Feb', revenue: 10980000, target: 11500000 },
  { month: 'Mar', revenue: 11650000, target: 11800000 },
  { month: 'Apr', revenue: 11420000, target: 11800000 },
  { month: 'May', revenue: 11850000, target: 12000000 },
  { month: 'Jun', revenue: 12150000, target: 12200000 },
  { month: 'Jul', revenue: 12380000, target: 12400000 },
  { month: 'Aug', revenue: 12845000, target: 12500000 },
];

export const departmentCostComparison = [
  { department: 'Emergency', labor: 1450000, supplies: 580000, operations: 420000 },
  { department: 'Surgery', labor: 1950000, supplies: 820000, operations: 510000 },
  { department: 'ICU', labor: 1280000, supplies: 520000, operations: 350000 },
  { department: 'Cardiology', labor: 1100000, supplies: 425000, operations: 325000 },
  { department: 'Radiology', labor: 520000, supplies: 185000, operations: 220000 },
  { department: 'Laboratory', labor: 385000, supplies: 165000, operations: 135000 },
];

export const payerMixData = [
  { name: 'Medicare', value: 38.5, amount: 4945000, color: '#0056b3' },
  { name: 'Medicaid', value: 22.3, amount: 2864000, color: '#28a745' },
  { name: 'Private Insurance', value: 31.7, amount: 4072000, color: '#ffc107' },
  { name: 'Self-Pay', value: 5.8, amount: 745000, color: '#dc3545' },
  { name: 'Other', value: 1.7, amount: 219000, color: '#6c757d' },
];

export const ytdSummary = {
  totalPatients: 152400,
  avgRevenuePerPatient: 9560,
  totalCharges: 198450000,
  totalCollections: 145680000,
  collectionRate: 73.4,
  writeOffs: 32850000,
  writeOffRate: 16.6,
  badDebt: 19920000,
  badDebtRate: 10.0,
  adjustments: 52770000,
};

export const kpiMetrics = {
  revenuePerBed: 285000,
  costPerBed: 164000,
  operatingCashFlow: 2720000,
  currentRatio: 1.85,
  quickRatio: 1.42,
  debtToEquity: 0.65,
};

export const topRevenueServices = [
  { service: 'Surgical Procedures', revenue: 32450000, percentage: 22.3 },
  { service: 'Emergency Services', revenue: 28900000, percentage: 19.8 },
  { service: 'ICU Care', revenue: 24680000, percentage: 16.9 },
  { service: 'Cardiology', revenue: 18750000, percentage: 12.9 },
  { service: 'Imaging & Diagnostics', revenue: 14250000, percentage: 9.8 },
  { service: 'Laboratory', revenue: 11850000, percentage: 8.1 },
  { service: 'Other Services', revenue: 14800000, percentage: 10.2 },
];

export const monthlyMetrics = {
  avgDailyRevenue: 428167,
  avgDailyCost: 337500,
  avgDailyMargin: 90667,
  workingDays: 30,
  revenuePerFTE: 39525,
  costPerFTE: 31250,
};
