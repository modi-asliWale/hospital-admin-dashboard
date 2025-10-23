import { Grid, Box, Alert, AlertTitle } from '@mui/material';
import { AccessTime, Warning, TrendingUp } from '@mui/icons-material';
import Card from '../common/Card';
import { waitTimeMetrics } from '../../data/erMockData';

const WaitTimeMetrics = () => {
  const getAlertSeverity = () => {
    if (waitTimeMetrics.longestWait >= waitTimeMetrics.criticalThreshold) {
      return 'error';
    }
    if (waitTimeMetrics.averageWaitTime >= waitTimeMetrics.alertThreshold) {
      return 'warning';
    }
    return 'success';
  };

  const getAlertMessage = () => {
    if (waitTimeMetrics.longestWait >= waitTimeMetrics.criticalThreshold) {
      return `Critical: ${waitTimeMetrics.patientsOverThreshold} patients waiting over ${waitTimeMetrics.alertThreshold} minutes`;
    }
    if (waitTimeMetrics.averageWaitTime >= waitTimeMetrics.alertThreshold) {
      return `Warning: Average wait time exceeds ${waitTimeMetrics.alertThreshold} minute threshold`;
    }
    return 'All wait times within acceptable range';
  };

  const metrics = [
    {
      title: 'Average Wait Time',
      value: `${waitTimeMetrics.averageWaitTime} min`,
      icon: AccessTime,
      color: waitTimeMetrics.averageWaitTime >= waitTimeMetrics.alertThreshold ? 'warning' : 'success',
      subtitle: `Target: ${waitTimeMetrics.alertThreshold} minutes`,
      trend: waitTimeMetrics.averageWaitTime >= waitTimeMetrics.alertThreshold ? 'Above target' : 'Within target',
      trendDirection: waitTimeMetrics.averageWaitTime >= waitTimeMetrics.alertThreshold ? 'up' : 'down',
    },
    {
      title: 'Median Wait Time',
      value: `${waitTimeMetrics.medianWaitTime} min`,
      icon: AccessTime,
      color: 'info',
      subtitle: '50th percentile',
    },
    {
      title: 'Longest Wait',
      value: `${waitTimeMetrics.longestWait} min`,
      icon: Warning,
      color: waitTimeMetrics.longestWait >= waitTimeMetrics.criticalThreshold ? 'error' : 'warning',
      subtitle: `Critical at ${waitTimeMetrics.criticalThreshold} minutes`,
      trend: waitTimeMetrics.longestWait >= waitTimeMetrics.criticalThreshold ? 'Critical level' : 'Monitoring',
      trendDirection: waitTimeMetrics.longestWait >= waitTimeMetrics.criticalThreshold ? 'up' : 'neutral',
    },
    {
      title: 'Patients Over Threshold',
      value: waitTimeMetrics.patientsOverThreshold,
      icon: TrendingUp,
      color: 'error',
      subtitle: `Over ${waitTimeMetrics.alertThreshold} minutes`,
    },
  ];

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Alert severity={getAlertSeverity()} icon={<Warning />}>
          <AlertTitle>Wait Time Status</AlertTitle>
          {getAlertMessage()}
        </Alert>
      </Box>
      <Grid container spacing={3}>
        {metrics.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              title={metric.title}
              value={metric.value}
              icon={metric.icon}
              color={metric.color}
              subtitle={metric.subtitle}
              trend={metric.trend}
              trendDirection={metric.trendDirection}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WaitTimeMetrics;
