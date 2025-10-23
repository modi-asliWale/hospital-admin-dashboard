import { Paper, Typography, Grid, Box, Stack, Chip } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { schedulingCalendarData } from '../../data/staffManagementMockData';

const statusColorMap = {
  'On Track': 'success',
  Monitor: 'warning',
  'At Risk': 'error',
};

const SchedulingCalendar = () => {
  const theme = useTheme();

  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Scheduling Calendar Snapshot
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Seven-day staffing outlook with shift-level coverage and operational notes
      </Typography>

      <Grid container spacing={2}>
        {schedulingCalendarData.map((day) => (
          <Grid item xs={12} sm={6} key={`${day.day}-${day.dateLabel}`}>
            <Box
              sx={{
                borderRadius: 2,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                bgcolor: alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.18 : 0.05),
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {day.day}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {day.dateLabel}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="h6" fontWeight={600}>
                    {day.coverage}%
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {day.staffingLevel}
                  </Typography>
                </Box>
              </Box>

              <Stack spacing={1.2}>
                {day.shifts.map((shift) => (
                  <Box
                    key={shift.name}
                    sx={{
                      borderRadius: 2,
                      border: `1px solid ${alpha(theme.palette.divider, 0.4)}`,
                      bgcolor: alpha(
                        theme.palette[statusColorMap[shift.status] || 'info'].main,
                        theme.palette.mode === 'dark' ? 0.22 : 0.08
                      ),
                      p: 1.5,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Box>
                      <Typography variant="body2" fontWeight={500}>
                        {shift.name} Shift
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {shift.status}
                      </Typography>
                    </Box>
                    <Chip
                      label={`${shift.coverage}%`}
                      color={statusColorMap[shift.status] || 'default'}
                      size="small"
                    />
                  </Box>
                ))}
              </Stack>

              <Typography variant="caption" color="text.secondary">
                {day.notes}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default SchedulingCalendar;
