import { Box, Paper, Typography } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useTheme } from '@mui/material/styles';
import { capacityTrendsData } from '../../data/patientFlowMockData';

const CapacityTrendsChart = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Capacity Trends
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        7-day occupancy, admissions, and discharges trend
      </Typography>

      <Box sx={{ width: '100%', height: 350 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={capacityTrendsData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#444' : '#ccc'} />
            <XAxis
              dataKey="date"
              stroke={theme.palette.text.secondary}
            />
            <YAxis
              stroke={theme.palette.text.secondary}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 4,
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="occupancy"
              stroke="#0056b3"
              strokeWidth={3}
              name="Occupancy %"
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="admissions"
              stroke="#28a745"
              strokeWidth={2}
              name="Admissions"
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="discharges"
              stroke="#dc3545"
              strokeWidth={2}
              name="Discharges"
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default CapacityTrendsChart;
