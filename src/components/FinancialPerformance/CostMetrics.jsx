import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { costMetrics } from '../../data/financialMockData';

const CostMetrics = () => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const costBreakdown = [
    { name: 'Labor', value: costMetrics.laborCosts, color: '#0056b3' },
    { name: 'Supplies', value: costMetrics.supplyCosts, color: '#28a745' },
    { name: 'Operations', value: costMetrics.operationalCosts, color: '#ffc107' },
  ];

  const totalCostChange = ((costMetrics.totalCosts - costMetrics.previousTotalCosts) / costMetrics.previousTotalCosts) * 100;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Cost Breakdown & Metrics
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: 250 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={costBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {costBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Total Costs
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {formatCurrency(costMetrics.totalCosts)}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: totalCostChange > 0 ? 'error.main' : 'success.main' }}
                >
                  {totalCostChange > 0 ? '▲' : '▼'} {Math.abs(totalCostChange).toFixed(1)}% vs last month
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Cost Per Patient
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {formatCurrency(costMetrics.costPerPatient)}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Target: {formatCurrency(costMetrics.targetCostPerPatient)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Cost Distribution
                </Typography>
                {costBreakdown.map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          bgcolor: item.color,
                        }}
                      />
                      <Typography variant="body2">{item.name}</Typography>
                    </Box>
                    <Typography variant="body2" fontWeight="bold">
                      {formatCurrency(item.value)}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CostMetrics;
