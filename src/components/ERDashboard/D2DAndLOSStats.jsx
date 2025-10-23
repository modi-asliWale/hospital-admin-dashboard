import { Grid, Box, Typography } from '@mui/material';
import { Timer, Schedule } from '@mui/icons-material';
import Card from '../common/Card';
import { d2dAndLOSMetrics } from '../../data/erMockData';

const D2DAndLOSStats = () => {
  const stats = [
    {
      title: 'Average Door-to-Doctor',
      value: `${d2dAndLOSMetrics.averageDoorToDoctor} min`,
      icon: Timer,
      color: d2dAndLOSMetrics.averageDoorToDoctor <= d2dAndLOSMetrics.d2dTarget ? 'success' : 'warning',
      subtitle: `Target: ${d2dAndLOSMetrics.d2dTarget} minutes`,
      trend: d2dAndLOSMetrics.averageDoorToDoctor <= d2dAndLOSMetrics.d2dTarget 
        ? 'Meeting target' 
        : `+${d2dAndLOSMetrics.averageDoorToDoctor - d2dAndLOSMetrics.d2dTarget} min over`,
      trendDirection: d2dAndLOSMetrics.averageDoorToDoctor <= d2dAndLOSMetrics.d2dTarget ? 'down' : 'up',
    },
    {
      title: 'Median Door-to-Doctor',
      value: `${d2dAndLOSMetrics.medianDoorToDoctor} min`,
      icon: Timer,
      color: 'info',
      subtitle: '50th percentile',
    },
    {
      title: 'Average Length of Stay',
      value: `${Math.floor(d2dAndLOSMetrics.averageLOS / 60)}h ${d2dAndLOSMetrics.averageLOS % 60}m`,
      icon: Schedule,
      color: d2dAndLOSMetrics.averageLOS <= d2dAndLOSMetrics.losTarget ? 'success' : 'warning',
      subtitle: `Target: ${Math.floor(d2dAndLOSMetrics.losTarget / 60)}h ${d2dAndLOSMetrics.losTarget % 60}m`,
      trend: d2dAndLOSMetrics.averageLOS <= d2dAndLOSMetrics.losTarget 
        ? 'Within target' 
        : `+${d2dAndLOSMetrics.averageLOS - d2dAndLOSMetrics.losTarget} min over`,
      trendDirection: d2dAndLOSMetrics.averageLOS <= d2dAndLOSMetrics.losTarget ? 'down' : 'up',
    },
    {
      title: 'Median Length of Stay',
      value: `${Math.floor(d2dAndLOSMetrics.medianLOS / 60)}h ${d2dAndLOSMetrics.medianLOS % 60}m`,
      icon: Schedule,
      color: 'info',
      subtitle: '50th percentile',
    },
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom fontWeight="600" sx={{ mb: 2 }}>
        Door-to-Doctor & Length of Stay
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
              subtitle={stat.subtitle}
              trend={stat.trend}
              trendDirection={stat.trendDirection}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default D2DAndLOSStats;
