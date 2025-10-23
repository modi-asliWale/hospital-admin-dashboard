import { Box, Typography, Grid, Container } from '@mui/material';
import CensusCounters from './CensusCounters';
import WaitTimeMetrics from './WaitTimeMetrics';
import D2DAndLOSStats from './D2DAndLOSStats';
import AdmittedWaitingList from './AdmittedWaitingList';
import LWBSRateMetric from './LWBSRateMetric';
import TraumaActivations from './TraumaActivations';
import ERStatusBoard from './ERStatusBoard';
import WaitTimeTrendChart from './WaitTimeTrendChart';
import AcuityPieChart from './AcuityPieChart';

const ERDashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          Emergency Department Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Real-time monitoring of ER census, wait times, patient flow, and trauma activations
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <CensusCounters />
      </Box>

      <Box sx={{ mb: 4 }}>
        <WaitTimeMetrics />
      </Box>

      <Box sx={{ mb: 4 }}>
        <D2DAndLOSStats />
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6} lg={3}>
          <LWBSRateMetric />
        </Grid>
        <Grid item xs={12} md={6} lg={9}>
          <TraumaActivations />
        </Grid>
      </Grid>

      <Box sx={{ mb: 4 }}>
        <AdmittedWaitingList />
      </Box>

      <Box sx={{ mb: 4 }}>
        <ERStatusBoard />
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={7}>
          <WaitTimeTrendChart />
        </Grid>
        <Grid item xs={12} lg={5}>
          <AcuityPieChart />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ERDashboard;
