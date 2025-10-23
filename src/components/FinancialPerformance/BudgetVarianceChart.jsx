import { Card, CardContent, Typography, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { budgetVarianceData } from '../../data/financialMockData';

const BudgetVarianceChart = () => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Department Budget Variance
        </Typography>
        <Box sx={{ height: 350, mt: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={budgetVarianceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" angle={-15} textAnchor="end" height={80} />
              <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
              <Tooltip
                formatter={(value, name) => [
                  formatCurrency(value),
                  name === 'actual' ? 'Actual' : 'Budget',
                ]}
              />
              <Legend />
              <Bar dataKey="budget" fill="#90caf9" name="Budget" radius={[8, 8, 0, 0]} />
              <Bar dataKey="actual" fill="#0056b3" name="Actual" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Variance Summary
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
            {budgetVarianceData.map((dept, index) => {
              const isOverBudget = dept.variance > 0;
              return (
                <Box
                  key={index}
                  sx={{
                    flex: '1 1 calc(50% - 8px)',
                    minWidth: 200,
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'action.hover',
                    border: 1,
                    borderColor: isOverBudget ? 'error.light' : 'success.light',
                  }}
                >
                  <Typography variant="body2" fontWeight="bold" gutterBottom>
                    {dept.department}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                      Budget:
                    </Typography>
                    <Typography variant="caption">{formatCurrency(dept.budget)}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="caption" color="text.secondary">
                      Actual:
                    </Typography>
                    <Typography variant="caption">{formatCurrency(dept.actual)}</Typography>
                  </Box>
                  <Box
                    sx={{
                      mt: 1,
                      pt: 1,
                      borderTop: 1,
                      borderColor: 'divider',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography variant="caption" fontWeight="bold">
                      Variance:
                    </Typography>
                    <Typography
                      variant="caption"
                      fontWeight="bold"
                      sx={{ color: isOverBudget ? 'error.main' : 'success.main' }}
                    >
                      {isOverBudget ? '+' : ''}
                      {dept.variance.toFixed(1)}%
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BudgetVarianceChart;
