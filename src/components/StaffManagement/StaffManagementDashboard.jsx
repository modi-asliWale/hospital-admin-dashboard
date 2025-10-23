import { Container, Box, Typography, Grid } from '@mui/material';
import StaffingRatios from './StaffingRatios';
import ShiftCoverageHeatMap from './ShiftCoverageHeatMap';
import DepartmentStaffingGauges from './DepartmentStaffingGauges';
import WorkforceUtilizationSummary from './WorkforceUtilizationSummary';
import OpenPositionsTable from './OpenPositionsTable';
import CredentialAlertsList from './CredentialAlertsList';
import SchedulingCalendar from './SchedulingCalendar';
import SkillsMixOverview from './SkillsMixOverview';
import WorkforceAllocationChart from './WorkforceAllocationChart';
import WorkforceSatisfactionScore from './WorkforceSatisfactionScore';

const StaffManagementDashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          Staff Management & Workforce
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Monitor staffing ratios, coverage, credentials, scheduling, and workforce experience across the hospital
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <StaffingRatios />
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={8}>
          <ShiftCoverageHeatMap />
        </Grid>
        <Grid item xs={12} lg={4}>
          <DepartmentStaffingGauges />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={6}>
          <WorkforceUtilizationSummary />
        </Grid>
        <Grid item xs={12} lg={6}>
          <WorkforceSatisfactionScore />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <OpenPositionsTable />
        </Grid>
        <Grid item xs={12} md={6}>
          <CredentialAlertsList />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={7}>
          <SchedulingCalendar />
        </Grid>
        <Grid item xs={12} lg={5}>
          <SkillsMixOverview />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <WorkforceAllocationChart />
        </Grid>
      </Grid>
    </Container>
  );
};

export default StaffManagementDashboard;
