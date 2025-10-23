import { Box, Paper, Typography, Grid, LinearProgress, Divider, Stack } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { absenteeismSummaryData, overtimeSummaryData } from '../../data/staffManagementMockData';

const getChangeColor = (theme, value) => {
  if (value.startsWith('-')) {
    return theme.palette.success.main;
  }
  if (value.startsWith('+')) {
    return theme.palette.error.main;
  }
  return theme.palette.text.secondary;
};

const WorkforceUtilizationSummary = () => {
  const theme = useTheme();
  const maxOvertime = Math.max(...overtimeSummaryData.perDepartment.map((item) => item.hours));
  const maxAbsenceRate = Math.max(...absenteeismSummaryData.perDepartment.map((item) => item.rate));

  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Workforce Utilization Summary
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Last 30 days overtime hours, absenteeism trends, and key utilization drivers
      </Typography>

      <Grid container spacing={2.5}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              borderRadius: 2,
              p: 2.5,
              bgcolor: alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.18 : 0.08),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            }}
          >
            <Typography variant="subtitle2" color="text.secondary">
              Overtime Hours
            </Typography>
            <Typography variant="h4" fontWeight={600}>
              {overtimeSummaryData.totalHours} hrs
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: getChangeColor(theme, overtimeSummaryData.change) }}
            >
              {overtimeSummaryData.change} vs. prior period
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
              Avg. {overtimeSummaryData.averagePerFTE} hrs per FTE
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              borderRadius: 2,
              p: 2.5,
              bgcolor: alpha(theme.palette.success.main, theme.palette.mode === 'dark' ? 0.15 : 0.08),
              border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
            }}
          >
            <Typography variant="subtitle2" color="text.secondary">
              Absenteeism Rate
            </Typography>
            <Typography variant="h4" fontWeight={600}>
              {absenteeismSummaryData.rate}%
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: getChangeColor(theme, absenteeismSummaryData.change) }}
            >
              {absenteeismSummaryData.change} vs. prior period
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
              Benchmark {absenteeismSummaryData.benchmark}%
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
            Overtime by Department
          </Typography>
          <Stack spacing={2}>
            {overtimeSummaryData.perDepartment.map((department) => (
              <Box key={department.department}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <Typography variant="body2" fontWeight={500}>
                    {department.department}
                  </Typography>
                  <Typography variant="body2" sx={{ color: getChangeColor(theme, department.change) }}>
                    {department.hours} hrs ({department.change})
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={(department.hours / maxOvertime) * 100}
                  sx={{ height: 8, borderRadius: 999, mt: 1 }}
                  color="primary"
                />
              </Box>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
            Absenteeism Rate by Department
          </Typography>
          <Stack spacing={2}>
            {absenteeismSummaryData.perDepartment.map((department) => (
              <Box key={department.department}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <Typography variant="body2" fontWeight={500}>
                    {department.department}
                  </Typography>
                  <Typography variant="body2" sx={{ color: getChangeColor(theme, department.change) }}>
                    {department.rate}% ({department.change})
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={(department.rate / maxAbsenceRate) * 100}
                  sx={{ height: 8, borderRadius: 999, mt: 1 }}
                  color="success"
                />
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
        Key Drivers & Mitigation Actions
      </Typography>
      <Stack spacing={1.2}>
        {overtimeSummaryData.drivers.map((driver) => (
          <Typography key={driver} variant="body2">
            • {driver}
          </Typography>
        ))}
      </Stack>

      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2 }}>
        Top absenteeism reasons: {absenteeismSummaryData.topReasons.map((item) => `${item.reason} ${item.percent}%`).join(' · ')}
      </Typography>
    </Paper>
  );
};

export default WorkforceUtilizationSummary;
