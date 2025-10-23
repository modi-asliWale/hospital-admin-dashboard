import { Grid, Box, Typography, LinearProgress, Chip } from '@mui/material';
import { CheckCircle, Warning } from '@mui/icons-material';
import Card from '../common/Card';
import { complianceMetricsData } from '../../data/clinicalQualityMockData';

const ComplianceMetrics = () => {
  const { overall, trend, trendDirection, target, metrics } = complianceMetricsData;

  const getStatusColor = (rate, target) => {
    if (rate >= target) return 'success';
    if (rate >= target - 5) return 'warning';
    return 'error';
  };

  const getStatusIcon = (rate, target) => {
    if (rate >= target) return <CheckCircle sx={{ color: 'success.main', fontSize: 20 }} />;
    return <Warning sx={{ color: 'warning.main', fontSize: 20 }} />;
  };

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom fontWeight="600">
          Compliance Metrics
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Adherence to clinical protocols and standards
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <Card
            title="Overall Compliance"
            value={`${overall}%`}
            icon={CheckCircle}
            trend={trend}
            trendDirection={trendDirection}
            color={getStatusColor(overall, target)}
            subtitle={`Target: ${target}%`}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Card title="Compliance by Metric">
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {metrics.map((metric, index) => (
                <Box key={index}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {getStatusIcon(metric.rate, metric.target)}
                      <Typography variant="body2" fontWeight="500">
                        {metric.metric}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Chip
                        label={metric.change}
                        size="small"
                        color={metric.change.startsWith('+') ? 'success' : 'default'}
                        sx={{ minWidth: 60 }}
                      />
                      <Typography variant="body2" fontWeight="bold" sx={{ minWidth: 50, textAlign: 'right' }}>
                        {metric.rate}%
                      </Typography>
                    </Box>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={metric.rate}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      bgcolor: 'action.hover',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: getStatusColor(metric.rate, metric.target) + '.main',
                      },
                    }}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                    Target: {metric.target}%
                  </Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ComplianceMetrics;
