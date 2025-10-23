import { Paper, Typography, Box, Stack } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { skillsMixChartData, skillsMixHighlights } from '../../data/staffManagementMockData';

const COLORS = ['#0056b3', '#28a745', '#ffc107', '#17a2b8', '#6f42c1', '#fd7e14'];

const SkillsMixOverview = () => {
  const theme = useTheme();

  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Skills Mix & Competency Coverage
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Distribution of active workforce by licensure level and specialization
      </Typography>

      <Box sx={{ width: '100%', height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={skillsMixChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
            >
              {skillsMixChartData.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value}%`, name]}
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 8,
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>

      <Stack spacing={1.2} sx={{ mt: 3 }}>
        {skillsMixHighlights.map((highlight) => (
          <Box
            key={highlight.label}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 1.5,
              borderRadius: 2,
              bgcolor: alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.18 : 0.08),
            }}
          >
            <Typography variant="body2" fontWeight={500}>
              {highlight.label}
            </Typography>
            <Typography variant="body2">{highlight.value}</Typography>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
};

export default SkillsMixOverview;
