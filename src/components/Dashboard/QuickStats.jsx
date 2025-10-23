import { Grid } from '@mui/material';
import Chart from '../common/Chart';

const QuickStats = () => {
  const patientTrendData = [
    { name: 'Mon', patients: 45 },
    { name: 'Tue', patients: 52 },
    { name: 'Wed', patients: 48 },
    { name: 'Thu', patients: 61 },
    { name: 'Fri', patients: 55 },
    { name: 'Sat', patients: 42 },
    { name: 'Sun', patients: 38 },
  ];

  const revenueData = [
    { name: 'Week 1', revenue: 125000 },
    { name: 'Week 2', revenue: 142000 },
    { name: 'Week 3', revenue: 138000 },
    { name: 'Week 4', revenue: 156000 },
  ];

  const departmentOccupancyData = [
    { name: 'Emergency', value: 87 },
    { name: 'ICU', value: 96 },
    { name: 'General Ward', value: 82 },
    { name: 'Pediatrics', value: 78 },
    { name: 'Surgery', value: 91 },
  ];

  const staffDistributionData = [
    { name: 'Doctors', value: 145 },
    { name: 'Nurses', value: 210 },
    { name: 'Admin', value: 65 },
    { name: 'Support', value: 80 },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Chart
          title="Patient Admissions Trend"
          type="area"
          data={patientTrendData}
          dataKey="patients"
          xKey="name"
          colors={['#0056b3']}
          height={300}
        />
      </Grid>
      
      <Grid item xs={12} md={6}>
        <Chart
          title="Weekly Revenue"
          type="bar"
          data={revenueData}
          dataKey="revenue"
          xKey="name"
          colors={['#28a745']}
          height={300}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Chart
          title="Department Occupancy Rate (%)"
          type="bar"
          data={departmentOccupancyData}
          dataKey="value"
          xKey="name"
          colors={['#0056b3', '#28a745', '#ffc107', '#dc3545', '#6c757d']}
          height={300}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Chart
          title="Staff Distribution"
          type="pie"
          data={staffDistributionData}
          dataKey="value"
          colors={['#0056b3', '#28a745', '#ffc107', '#6c757d']}
          height={300}
        />
      </Grid>
    </Grid>
  );
};

export default QuickStats;
