import { Typography, Paper } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { complianceTrendsData } from '../../data/complianceMockData';
import { useTheme } from '@mui/material/styles';

const ComplianceTrendsChart = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom fontWeight="600">
        Compliance Trends
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Monthly compliance metrics across key areas
      </Typography>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={complianceTrendsData}>
          <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#444' : '#e0e0e0'} />
          <XAxis
            dataKey="month"
            stroke={isDark ? '#aaa' : '#666'}
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke={isDark ? '#aaa' : '#666'}
            style={{ fontSize: '12px' }}
            domain={[70, 100]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? '#1e1e1e' : '#fff',
              border: `1px solid ${isDark ? '#444' : '#ccc'}`,
              borderRadius: '4px',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="coreMeasures"
            stroke="#2196f3"
            strokeWidth={2}
            name="Core Measures"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="documentation"
            stroke="#4caf50"
            strokeWidth={2}
            name="Documentation"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="consent"
            stroke="#ff9800"
            strokeWidth={2}
            name="Consent"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="accreditation"
            stroke="#9c27b0"
            strokeWidth={2}
            name="Accreditation"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default ComplianceTrendsChart;
