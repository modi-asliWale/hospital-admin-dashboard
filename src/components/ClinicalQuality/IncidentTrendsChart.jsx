import { Card, CardContent, Typography, Box } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useTheme } from '@mui/material/styles';
import { incidentTrendsData } from '../../data/clinicalQualityMockData';

const IncidentTrendsChart = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom fontWeight="600">
          Incident Trends by Type
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Monthly incident counts by category
        </Typography>
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={incidentTrendsData}
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
              <Bar
                dataKey="medication"
                stackId="a"
                fill="#0056b3"
                name="Medication Errors"
              />
              <Bar
                dataKey="falls"
                stackId="a"
                fill="#28a745"
                name="Patient Falls"
              />
              <Bar
                dataKey="infections"
                stackId="a"
                fill="#ffc107"
                name="Infections"
              />
              <Bar
                dataKey="equipment"
                stackId="a"
                fill="#dc3545"
                name="Equipment"
              />
              <Bar
                dataKey="other"
                stackId="a"
                fill="#6c757d"
                name="Other"
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default IncidentTrendsChart;
