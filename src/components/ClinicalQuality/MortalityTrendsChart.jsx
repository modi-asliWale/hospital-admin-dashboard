import { Card, CardContent, Typography, Box } from '@mui/material';
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
import { mortalityTrendsData } from '../../data/clinicalQualityMockData';

const MortalityTrendsChart = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom fontWeight="600">
          Mortality Rate Trends
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Comparison of actual vs expected mortality rates
        </Typography>
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={mortalityTrendsData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#444' : '#ccc'} />
              <XAxis dataKey="month" stroke={theme.palette.text.secondary} />
              <YAxis stroke={theme.palette.text.secondary} />
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
                dataKey="actual"
                stroke="#dc3545"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="Actual Rate"
              />
              <Line
                type="monotone"
                dataKey="expected"
                stroke="#0056b3"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="Expected Rate"
              />
              <Line
                type="monotone"
                dataKey="national"
                stroke="#6c757d"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="National Average"
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MortalityTrendsChart;
