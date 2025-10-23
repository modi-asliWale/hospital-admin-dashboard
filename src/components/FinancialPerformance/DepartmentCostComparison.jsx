import { Card, CardContent, Typography, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { departmentCostComparison } from '../../data/financialMockData';

const DepartmentCostComparison = () => {
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
          Department Cost Comparison
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Labor, Supply, and Operational costs by department
        </Typography>
        <Box sx={{ height: 350, mt: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={departmentCostComparison}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" angle={-15} textAnchor="end" height={80} />
              <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
              <Tooltip formatter={(value) => formatCurrency(value)} />
              <Legend />
              <Bar dataKey="labor" stackId="a" fill="#0056b3" name="Labor" radius={[0, 0, 0, 0]} />
              <Bar dataKey="supplies" stackId="a" fill="#28a745" name="Supplies" radius={[0, 0, 0, 0]} />
              <Bar dataKey="operations" stackId="a" fill="#ffc107" name="Operations" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Total Costs by Department
          </Typography>
          {departmentCostComparison.map((dept, index) => {
            const total = dept.labor + dept.supplies + dept.operations;
            return (
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
                <Typography variant="body2" fontWeight="medium">
                  {dept.department}
                </Typography>
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="caption" color="text.secondary" display="block">
                      Labor: {formatCurrency(dept.labor)}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block">
                      Supplies: {formatCurrency(dept.supplies)}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block">
                      Operations: {formatCurrency(dept.operations)}
                    </Typography>
                  </Box>
                  <Typography variant="body2" fontWeight="bold" sx={{ minWidth: 100, textAlign: 'right' }}>
                    {formatCurrency(total)}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default DepartmentCostComparison;
