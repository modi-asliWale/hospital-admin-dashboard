import { Card, CardContent, Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { deniedClaimsTrends } from '../../data/financialMockData';

const DeniedClaimsTrends = () => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const latestMonth = deniedClaimsTrends[deniedClaimsTrends.length - 1];
  const previousMonth = deniedClaimsTrends[deniedClaimsTrends.length - 2];
  const trend = latestMonth.denialRate - previousMonth.denialRate;

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            Denied Claims Trends
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="h5" fontWeight="bold" color={trend < 0 ? 'success.main' : 'error.main'}>
              {latestMonth.denialRate}%
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Current denial rate
              {trend < 0 ? ' ▼' : ' ▲'} {Math.abs(trend).toFixed(1)}%
            </Typography>
          </Box>
        </Box>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={deniedClaimsTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis
                yAxisId="left"
                label={{ value: 'Denial Rate (%)', angle: -90, position: 'insideLeft' }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                label={{ value: 'Amount ($)', angle: 90, position: 'insideRight' }}
              />
              <Tooltip
                formatter={(value, name) => {
                  if (name === 'denialRate') return `${value}%`;
                  return formatCurrency(value);
                }}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="denialRate"
                stroke="#dc3545"
                strokeWidth={3}
                name="Denial Rate (%)"
                dot={{ fill: '#dc3545', r: 5 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="amount"
                stroke="#ffc107"
                strokeWidth={3}
                name="Denied Amount ($)"
                dot={{ fill: '#ffc107', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DeniedClaimsTrends;
