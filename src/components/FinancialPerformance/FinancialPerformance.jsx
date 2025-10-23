import { Box, Typography, Container, Grid } from '@mui/material';
import RevenueSummaryCards from './RevenueSummaryCards';
import MarginMetrics from './MarginMetrics';
import CostMetrics from './CostMetrics';
import ReimbursementRates from './ReimbursementRates';
import ARStatus from './ARStatus';
import DeniedClaimsTrends from './DeniedClaimsTrends';
import SupplyCosts from './SupplyCosts';
import BudgetVarianceChart from './BudgetVarianceChart';
import RevenueTrendLine from './RevenueTrendLine';
import DepartmentCostComparison from './DepartmentCostComparison';
import PayerMixChart from './PayerMixChart';
import YTDSummary from './YTDSummary';

const FinancialPerformance = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          Financial Performance Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Comprehensive financial analytics including revenue, margins, costs, A/R status, and budget variance
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <RevenueSummaryCards />
      </Box>

      <Box sx={{ mb: 4 }}>
        <MarginMetrics />
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={6}>
          <CostMetrics />
        </Grid>
        <Grid item xs={12} lg={6}>
          <ReimbursementRates />
        </Grid>
      </Grid>

      <Box sx={{ mb: 4 }}>
        <ARStatus />
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={7}>
          <DeniedClaimsTrends />
        </Grid>
        <Grid item xs={12} lg={5}>
          <SupplyCosts />
        </Grid>
      </Grid>

      <Box sx={{ mb: 4 }}>
        <BudgetVarianceChart />
      </Box>

      <Box sx={{ mb: 4 }}>
        <RevenueTrendLine />
      </Box>

      <Box sx={{ mb: 4 }}>
        <DepartmentCostComparison />
      </Box>

      <Box sx={{ mb: 4 }}>
        <PayerMixChart />
      </Box>

      <Box sx={{ mb: 4 }}>
        <YTDSummary />
      </Box>
    </Container>
  );
};

export default FinancialPerformance;
