import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { arStatus } from '../../data/financialMockData';

const ARStatus = () => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const arAgingData = [
    { period: '0-30', amount: arStatus.zeroTo30Days, color: '#28a745' },
    { period: '31-60', amount: arStatus.thirtyOneTo60Days, color: '#ffc107' },
    { period: '61-90', amount: arStatus.sixtyOneTo90Days, color: '#fd7e14' },
    { period: '90+', amount: arStatus.over90Days, color: '#dc3545' },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Accounts Receivable Status
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} md={8}>
            <Box sx={{ height: 250 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={arAgingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="period" label={{ value: 'Days Outstanding', position: 'insideBottom', offset: -5 }} />
                  <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
                    {arAgingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'action.hover',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Total A/R
                </Typography>
                <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>
                  {formatCurrency(arStatus.currentAR)}
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: arStatus.dso > arStatus.targetDSO ? 'error.light' : 'success.light',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Days Sales Outstanding
                </Typography>
                <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>
                  {arStatus.dso} days
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Target: {arStatus.targetDSO} days
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Aging Breakdown
                </Typography>
                {arAgingData.map((item, index) => {
                  const percentage = ((item.amount / arStatus.currentAR) * 100).toFixed(1);
                  return (
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
                        <Typography variant="body2">{item.period} days</Typography>
                      </Box>
                      <Typography variant="body2" fontWeight="bold">
                        {percentage}%
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ARStatus;
