import { Box, Paper, Typography, Grid, CircularProgress, Chip } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { departmentStaffingGaugeData } from '../../data/staffManagementMockData';

const getStatusColor = (theme, coverage, target) => {
  if (coverage >= target) {
    return {
      color: theme.palette.success.main,
      label: 'Optimal',
    };
  }

  if (coverage >= target - 5) {
    return {
      color: theme.palette.warning.main,
      label: 'Monitor',
    };
  }

  return {
    color: theme.palette.error.main,
    label: 'At Risk',
  };
};

const DepartmentStaffingGauges = () => {
  const theme = useTheme();

  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Department Staffing Readiness
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Coverage vs. departmental targets based on scheduled FTE hours
      </Typography>

      <Grid container spacing={2}>
        {departmentStaffingGaugeData.map((item) => {
          const status = getStatusColor(theme, item.coverage, item.target);

          return (
            <Grid item xs={6} md={4} key={item.department}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  border: `1px solid ${alpha(status.color, 0.35)}`,
                  bgcolor: alpha(status.color, theme.palette.mode === 'dark' ? 0.18 : 0.08),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <Typography variant="subtitle1" fontWeight={600} align="center">
                  {item.department}
                </Typography>

                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                  <CircularProgress
                    variant="determinate"
                    value={item.coverage}
                    size={108}
                    thickness={4.5}
                    sx={{
                      color: status.color,
                    }}
                  />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: 'absolute',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      gap: 0.5,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600}>
                      {item.coverage}%
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Target {item.target}%
                    </Typography>
                  </Box>
                </Box>

                <Chip
                  label={status.label}
                  size="small"
                  sx={{
                    bgcolor: status.color,
                    color: theme.palette.getContrastText(status.color),
                  }}
                />

                <Typography variant="caption" color="text.secondary">
                  Trend {item.trend}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default DepartmentStaffingGauges;
