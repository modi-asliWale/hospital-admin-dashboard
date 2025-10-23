import { Typography, Paper } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { incidentTypesData } from '../../data/complianceMockData';
import { useTheme } from '@mui/material/styles';

const IncidentTypesChart = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom fontWeight="600">
        Privacy & Security Incidents by Type
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Monthly breakdown of incident categories
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={incidentTypesData}>
          <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#444' : '#e0e0e0'} />
          <XAxis
            dataKey="month"
            stroke={isDark ? '#aaa' : '#666'}
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke={isDark ? '#aaa' : '#666'}
            style={{ fontSize: '12px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? '#1e1e1e' : '#fff',
              border: `1px solid ${isDark ? '#444' : '#ccc'}`,
              borderRadius: '4px',
            }}
          />
          <Legend />
          <Bar dataKey="privacy" fill="#2196f3" name="Privacy Violations" />
          <Bar dataKey="security" fill="#ff9800" name="Security Incidents" />
          <Bar dataKey="breach" fill="#f44336" name="Data Breaches" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default IncidentTypesChart;
