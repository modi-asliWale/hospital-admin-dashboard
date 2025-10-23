import { Box, Paper, Typography, Grid, Chip, LinearProgress } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { staffingRatiosData } from '../../data/staffManagementMockData';

const statusConfig = {
  safe: {
    label: 'Safe',
    color: 'success',
    description: 'Within safe threshold',
  },
  watch: {
    label: 'Watch',
    color: 'warning',
    description: 'Monitor coverage closely',
  },
  risk: {
    label: 'At Risk',
    color: 'error',
    description: 'Requires immediate action',
  },
};

const formatRatio = (value) => `1:${value.toFixed(1)}`;

const StaffingRatios = () => {
  const theme = useTheme();

  const averageCoverage = Math.round(
    staffingRatiosData.reduce((acc, item) => acc + item.coverage, 0) / staffingRatiosData.length
  );

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 2 }}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Staffing Ratios by Unit
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Real-time nurse-to-patient ratios compared with targets and safe staffing indicators
          </Typography>
        </Box>
        <Box
          sx={{
            minWidth: 220,
            borderRadius: 2,
            bgcolor: alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.2 : 0.08),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            p: 2,
          }}
        >
          <Typography variant="subtitle2" color="text.secondary">
            Average Coverage
          </Typography>
          <Typography variant="h5" fontWeight={600}>
            {averageCoverage}%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Organization-wide staffed vs. required hours
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={2.5} sx={{ mt: 2 }}>
        {staffingRatiosData.map((item) => {
          const config = statusConfig[item.status] || statusConfig.safe;
          const borderColor = alpha(theme.palette[config.color].main, 0.45);

          return (
            <Grid item xs={12} md={6} lg={4} key={item.unit}>
              <Box
                sx={{
                  height: '100%',
                  borderRadius: 2,
                  border: `1px solid ${borderColor}`,
                  bgcolor: alpha(theme.palette[config.color].main, theme.palette.mode === 'dark' ? 0.15 : 0.05),
                  p: 2.5,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {item.unit}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {config.description}
                    </Typography>
                  </Box>
                  <Chip
                    label={config.label}
                    color={config.color}
                    variant={theme.palette.mode === 'dark' ? 'outlined' : 'filled'}
                    size="small"
                  />
                </Box>

                <Box>
                  <Typography variant="h3" component="div" fontWeight={600}>
                    {formatRatio(item.currentRatio)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Target {formatRatio(item.targetRatio)} · {item.coverage}% coverage · {item.openShifts} open shifts
                  </Typography>
                </Box>

                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={item.coverage}
                    color={config.color}
                    sx={{ height: 8, borderRadius: 999 }}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                    {item.notes}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default StaffingRatios;
