import { Card, CardContent, Typography, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { supplyyCosts } from '../../data/financialMockData';

const SupplyCosts = () => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getVarianceColor = (variance) => {
    if (variance > 5) return '#dc3545';
    if (variance > 0) return '#ffc107';
    return '#28a745';
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Supply Costs vs Budget
        </Typography>
        <Box sx={{ height: 300, mt: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={supplyyCosts}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" angle={-15} textAnchor="end" height={80} />
              <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
              <Tooltip
                formatter={(value, name) => [formatCurrency(value), name === 'cost' ? 'Actual' : 'Budget']}
              />
              <Legend />
              <Bar dataKey="budget" fill="#90caf9" name="Budget" radius={[8, 8, 0, 0]} />
              <Bar dataKey="cost" fill="#0056b3" name="Actual" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Variance Analysis
          </Typography>
          {supplyyCosts.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 1.5,
                mb: 1,
                borderRadius: 1,
                bgcolor: 'action.hover',
              }}
            >
              <Typography variant="body2">{item.category}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  {formatCurrency(item.cost)} / {formatCurrency(item.budget)}
                </Typography>
                <Box
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    bgcolor: getVarianceColor(item.variance),
                    color: 'white',
                  }}
                >
                  <Typography variant="caption" fontWeight="bold">
                    {item.variance > 0 ? '+' : ''}
                    {item.variance.toFixed(1)}%
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default SupplyCosts;
