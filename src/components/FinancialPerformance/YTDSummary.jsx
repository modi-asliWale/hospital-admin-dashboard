import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { ytdSummary, kpiMetrics } from '../../data/financialMockData';

const YTDSummary = () => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  const summaryMetrics = [
    {
      label: 'Total Patients',
      value: formatNumber(ytdSummary.totalPatients),
      color: 'primary',
    },
    {
      label: 'Avg Revenue per Patient',
      value: formatCurrency(ytdSummary.avgRevenuePerPatient),
      color: 'success',
    },
    {
      label: 'Total Charges',
      value: formatCurrency(ytdSummary.totalCharges),
      color: 'info',
    },
    {
      label: 'Total Collections',
      value: formatCurrency(ytdSummary.totalCollections),
      color: 'success',
    },
  ];

  const rateMetrics = [
    {
      label: 'Collection Rate',
      value: `${ytdSummary.collectionRate}%`,
      target: '75%',
      color: ytdSummary.collectionRate >= 75 ? 'success' : 'warning',
    },
    {
      label: 'Write-Off Rate',
      value: `${ytdSummary.writeOffRate}%`,
      amount: formatCurrency(ytdSummary.writeOffs),
      color: ytdSummary.writeOffRate <= 15 ? 'success' : 'warning',
    },
    {
      label: 'Bad Debt Rate',
      value: `${ytdSummary.badDebtRate}%`,
      amount: formatCurrency(ytdSummary.badDebt),
      color: ytdSummary.badDebtRate <= 10 ? 'success' : 'error',
    },
  ];

  const additionalKPIs = [
    { label: 'Revenue per Bed', value: formatCurrency(kpiMetrics.revenuePerBed) },
    { label: 'Cost per Bed', value: formatCurrency(kpiMetrics.costPerBed) },
    { label: 'Operating Cash Flow', value: formatCurrency(kpiMetrics.operatingCashFlow) },
    { label: 'Current Ratio', value: kpiMetrics.currentRatio.toFixed(2) },
    { label: 'Quick Ratio', value: kpiMetrics.quickRatio.toFixed(2) },
    { label: 'Debt-to-Equity', value: kpiMetrics.debtToEquity.toFixed(2) },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Year-to-Date Summary
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {summaryMetrics.map((metric, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: `${metric.color}.light`,
                  textAlign: 'center',
                }}
              >
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {metric.label}
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {metric.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom fontWeight="medium">
            Performance Rates
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {rateMetrics.map((metric, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'action.hover',
                    border: 2,
                    borderColor: `${metric.color}.main`,
                  }}
                >
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {metric.label}
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" sx={{ color: `${metric.color}.main` }}>
                    {metric.value}
                  </Typography>
                  {metric.amount && (
                    <Typography variant="caption" color="text.secondary">
                      Amount: {metric.amount}
                    </Typography>
                  )}
                  {metric.target && (
                    <Typography variant="caption" color="text.secondary">
                      Target: {metric.target}
                    </Typography>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom fontWeight="medium">
            Additional KPIs
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {additionalKPIs.map((kpi, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Box sx={{ textAlign: 'center', p: 1.5, borderRadius: 1, bgcolor: 'action.hover' }}>
                  <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                    {kpi.label}
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {kpi.value}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mt: 3, p: 2, borderRadius: 2, bgcolor: 'info.light' }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Total Adjustments (YTD)
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            {formatCurrency(ytdSummary.adjustments)}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Includes contractual adjustments, discounts, and charity care
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default YTDSummary;
