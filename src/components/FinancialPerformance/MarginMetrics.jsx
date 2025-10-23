import { Card, CardContent, Typography, Box, Grid, LinearProgress } from '@mui/material';
import { marginMetrics } from '../../data/financialMockData';

const MarginMetrics = () => {
  const margins = [
    {
      title: 'Gross Margin',
      current: marginMetrics.grossMargin,
      previous: marginMetrics.previousGrossMargin,
      color: 'primary',
      target: 45,
    },
    {
      title: 'Operating Margin',
      current: marginMetrics.operatingMargin,
      previous: marginMetrics.previousOperatingMargin,
      color: 'info',
      target: 20,
    },
    {
      title: 'Net Margin',
      current: marginMetrics.netMargin,
      previous: marginMetrics.previousNetMargin,
      color: 'success',
      target: 15,
    },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Margin Analysis
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {margins.map((margin, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    {margin.title}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {margin.current}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={(margin.current / margin.target) * 100}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: 'action.hover',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: `${margin.color}.main`,
                      borderRadius: 4,
                    },
                  }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                  <Typography variant="caption" color="text.secondary">
                    Target: {margin.target}%
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: margin.current > margin.previous ? 'success.main' : 'error.main',
                    }}
                  >
                    {margin.current > margin.previous ? '▲' : '▼'}{' '}
                    {Math.abs(margin.current - margin.previous).toFixed(1)}%
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MarginMetrics;
