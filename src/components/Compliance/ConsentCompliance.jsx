import { Grid, Box, Typography, Paper, LinearProgress } from '@mui/material';
import { Assignment, CheckCircle, PendingActions } from '@mui/icons-material';
import Card from '../common/Card';
import { consentComplianceData } from '../../data/complianceMockData';

const ConsentCompliance = () => {
  const { overall, trend, trendDirection, total, metrics } = consentComplianceData;

  const getStatusColor = (rate) => {
    if (rate >= 98) return 'success';
    if (rate >= 95) return 'warning';
    return 'error';
  };

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom fontWeight="600">
          Consent Compliance
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Monitor informed consent documentation and compliance
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card
            title="Overall Compliance"
            value={`${overall}%`}
            icon={Assignment}
            trend={trend}
            trendDirection={trendDirection}
            color="success"
            subtitle={`Total consents: ${total}`}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom fontWeight="600">
              Consent Types
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {metrics.map((metric, index) => (
                <Grid item xs={12} key={index}>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="body1" fontWeight="500">
                        {metric.type}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <CheckCircle fontSize="small" color="success" />
                          <Typography variant="body2" color="text.secondary">
                            {metric.obtained}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <PendingActions fontSize="small" color="warning" />
                          <Typography variant="body2" color="text.secondary">
                            {metric.pending}
                          </Typography>
                        </Box>
                        <Typography variant="body1" fontWeight="bold" color={getStatusColor(metric.rate) + '.main'}>
                          {metric.rate.toFixed(1)}%
                        </Typography>
                      </Box>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={metric.rate}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: 'action.hover',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: getStatusColor(metric.rate) + '.main',
                        },
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConsentCompliance;
