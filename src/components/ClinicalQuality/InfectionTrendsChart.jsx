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
import { infectionTrendsData } from '../../data/clinicalQualityMockData';

const InfectionTrendsChart = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom fontWeight="600">
          Infection Rate Trends
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Monthly infection rates per 1,000 patient days
        </Typography>
        <Box sx={{ width: '100%', height: 350 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={infectionTrendsData}
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
                dataKey="HAI"
                stroke="#0056b3"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="HAI"
              />
              <Line
                type="monotone"
                dataKey="CLABSI"
                stroke="#28a745"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="CLABSI"
              />
              <Line
                type="monotone"
                dataKey="CAUTI"
                stroke="#ffc107"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="CAUTI"
              />
              <Line
                type="monotone"
                dataKey="SSI"
                stroke="#dc3545"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="SSI"
              />
              <Line
                type="monotone"
                dataKey="VAP"
                stroke="#6f42c1"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="VAP"
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InfectionTrendsChart;
