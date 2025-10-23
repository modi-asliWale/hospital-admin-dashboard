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
import { qualityComparisonData } from '../../data/clinicalQualityMockData';

const QualityComparisonChart = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom fontWeight="600">
          Quality Metrics Comparison
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Hospital performance vs national average and targets
        </Typography>
        <Box sx={{ width: '100%', height: 350 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={qualityComparisonData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#444' : '#ccc'} />
              <XAxis dataKey="category" stroke={theme.palette.text.secondary} />
              <YAxis stroke={theme.palette.text.secondary} domain={[0, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 4,
                }}
              />
              <Legend />
              <Bar
                dataKey="hospital"
                fill="#0056b3"
                radius={[8, 8, 0, 0]}
                name="Hospital"
              />
              <Bar
                dataKey="national"
                fill="#6c757d"
                radius={[8, 8, 0, 0]}
                name="National Average"
              />
              <Bar
                dataKey="target"
                fill="#28a745"
                radius={[8, 8, 0, 0]}
                name="Target"
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default QualityComparisonChart;
