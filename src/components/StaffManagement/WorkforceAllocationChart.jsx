import { Paper, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { workforceAllocationChartData } from '../../data/staffManagementMockData';

const WorkforceAllocationChart = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Workforce Allocation by Department
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Stacked distribution of direct care, support, ancillary, and administrative FTEs (% of total staffing)
      </Typography>

      <Box sx={{ width: '100%', height: 360 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={workforceAllocationChartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#444' : '#ccc'} />
            <XAxis dataKey="department" stroke={theme.palette.text.secondary} />
            <YAxis
              stroke={theme.palette.text.secondary}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              formatter={(value) => `${value}%`}
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 8,
              }}
            />
            <Legend />
            <Bar dataKey="directCare" stackId="a" fill="#0056b3" name="Direct Care" radius={[4, 4, 0, 0]} />
            <Bar dataKey="support" stackId="a" fill="#28a745" name="Support" />
            <Bar dataKey="ancillary" stackId="a" fill="#17a2b8" name="Ancillary" />
            <Bar dataKey="administrative" stackId="a" fill="#ffc107" name="Administrative" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default WorkforceAllocationChart;
