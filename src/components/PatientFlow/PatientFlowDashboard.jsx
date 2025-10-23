import { useState } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import FiltersPanel from './FiltersPanel';
import BedOccupancyWidget from './BedOccupancyWidget';
import BedStatusIndicators from './BedStatusIndicators';
import BedStatusHeatMap from './BedStatusHeatMap';
import ADTSummary from './ADTSummary';
import ALOSMetric from './ALOSMetric';
import SurgeryScheduleTable from './SurgeryScheduleTable';
import PatientLists from './PatientLists';
import CapacityTrendsChart from './CapacityTrendsChart';
import Chart from '../common/Chart';
import { bedStatusByDepartment } from '../../data/patientFlowMockData';

const PatientFlowDashboard = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleRefresh = () => {
    console.log('Refreshing data...');
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          Patient Flow & Capacity Management
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Real-time monitoring of bed occupancy, patient flow, and surgical schedules
        </Typography>
      </Box>

      <FiltersPanel
        selectedDepartment={selectedDepartment}
        onDepartmentChange={handleDepartmentChange}
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        onRefresh={handleRefresh}
      />

      <Box sx={{ mb: 4 }}>
        <BedOccupancyWidget />
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={8}>
          <BedStatusHeatMap />
        </Grid>
        <Grid item xs={12} lg={4}>
          <BedStatusIndicators />
          <Box sx={{ mt: 3 }}>
            <Chart
              title="Department Occupancy Rate"
              type="bar"
              data={bedStatusByDepartment}
              dataKey="rate"
              xKey="department"
              colors={['#0056b3']}
              height={250}
            />
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mb: 3 }}>
          ADT Summary
        </Typography>
        <ADTSummary />
      </Box>

      <Box sx={{ mb: 4 }}>
        <ALOSMetric />
      </Box>

      <Box sx={{ mb: 4 }}>
        <CapacityTrendsChart />
      </Box>

      <Box sx={{ mb: 4 }}>
        <SurgeryScheduleTable />
      </Box>

      <Box sx={{ mb: 4 }}>
        <PatientLists />
      </Box>
    </Container>
  );
};

export default PatientFlowDashboard;
