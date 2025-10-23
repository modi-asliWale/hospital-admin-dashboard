import { Box, Typography, Container, Divider } from '@mui/material';
import EquipmentUtilizationGauges from './EquipmentUtilizationGauges';
import TurnaroundMetrics from './TurnaroundMetrics';
import ServiceTimesPanel from './ServiceTimesPanel';
import MaintenanceOrders from './MaintenanceOrders';
import ResourceUtilizationCharts from './ResourceUtilizationCharts';
import ServiceResponseChart from './ServiceResponseChart';
import AvailabilityStatusGrid from './AvailabilityStatusGrid';
import TrendAnalysis from './TrendAnalysis';

const OperationalEfficiencyDashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          Operational Efficiency Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Monitor equipment utilization, service turnaround times, maintenance orders, and resource efficiency metrics
        </Typography>
      </Box>

      <Box sx={{ mb: 5 }}>
        <EquipmentUtilizationGauges />
      </Box>

      <Divider sx={{ my: 5 }} />

      <Box sx={{ mb: 5 }}>
        <TurnaroundMetrics />
      </Box>

      <Divider sx={{ my: 5 }} />

      <Box sx={{ mb: 5 }}>
        <ServiceTimesPanel />
      </Box>

      <Divider sx={{ my: 5 }} />

      <Box sx={{ mb: 5 }}>
        <MaintenanceOrders />
      </Box>

      <Divider sx={{ my: 5 }} />

      <Box sx={{ mb: 5 }}>
        <ResourceUtilizationCharts />
      </Box>

      <Divider sx={{ my: 5 }} />

      <Box sx={{ mb: 5 }}>
        <ServiceResponseChart />
      </Box>

      <Divider sx={{ my: 5 }} />

      <Box sx={{ mb: 5 }}>
        <AvailabilityStatusGrid />
      </Box>

      <Divider sx={{ my: 5 }} />

      <Box sx={{ mb: 5 }}>
        <TrendAnalysis />
      </Box>
    </Container>
  );
};

export default OperationalEfficiencyDashboard;
