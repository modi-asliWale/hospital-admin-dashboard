import { Card, CardContent, Typography, Box } from '@mui/material';
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, ComposedChart } from 'recharts';
import { revenueTrendData } from '../../data/financialMockData';

const RevenueTrendLine = () => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const latestMonth = revenueTrendData[revenueTrendData.length - 1];
  const isAboveTarget = latestMonth.revenue > latestMonth.target;
  const variance = ((latestMonth.revenue - latestMonth.target) / latestMonth.target) * 100;

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            Revenue Trend Analysis
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="body2" color="text.secondary">
              {latestMonth.month} Performance
            </Typography>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: isAboveTarget ? 'success.main' : 'error.main' }}
            >
              {isAboveTarget ? '+' : ''}
              {variance.toFixed(1)}% vs Target
            </Typography>
          </Box>
        </Box>
        <Box sx={{ height: 350 }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={revenueTrendData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0056b3" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0056b3" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
              <Tooltip
                formatter={(value) => formatCurrency(value)}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="revenue"
                fill="url(#colorRevenue)"
                stroke="#0056b3"
                strokeWidth={3}
                name="Actual Revenue"
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#28a745"
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Target Revenue"
                dot={{ fill: '#28a745', r: 4 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RevenueTrendLine;
