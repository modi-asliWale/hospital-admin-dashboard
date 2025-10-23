import { Box, Typography, Grid, Container } from '@mui/material';
import SummaryCards from './SummaryCards';
import QuickStats from './QuickStats';
import AlertsPanel from './AlertsPanel';
import ActivityFeed from './ActivityFeed';

const DashboardHome = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          Executive Summary
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome back! Here&apos;s what&apos;s happening with your hospital today.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <SummaryCards />
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={6}>
          <AlertsPanel />
        </Grid>
        <Grid item xs={12} lg={6}>
          <ActivityFeed />
        </Grid>
      </Grid>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mb: 3 }}>
          Analytics Overview
        </Typography>
        <QuickStats />
      </Box>
    </Container>
  );
};

export default DashboardHome;
