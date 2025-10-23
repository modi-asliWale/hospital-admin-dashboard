import { Grid, Box, Typography, Paper, LinearProgress, Chip } from '@mui/material';
import { FactCheck, CheckCircle, Warning, Error } from '@mui/icons-material';
import Card from '../common/Card';
import { auditReadinessData } from '../../data/complianceMockData';

const AuditReadiness = () => {
  const { overall, trend, trendDirection, indicators } = auditReadinessData;

  const getStatusColor = (score) => {
    if (score >= 90) return 'success';
    if (score >= 80) return 'warning';
    return 'error';
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Excellent':
        return 'success';
      case 'Good':
        return 'info';
      case 'Needs Improvement':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Excellent':
        return <CheckCircle />;
      case 'Good':
        return <CheckCircle />;
      case 'Needs Improvement':
        return <Warning />;
      default:
        return <Error />;
    }
  };

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom fontWeight="600">
          Audit Readiness Indicators
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Assess preparedness for internal and external audits
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card
            title="Overall Readiness"
            value={`${overall}%`}
            icon={FactCheck}
            trend={trend}
            trendDirection={trendDirection}
            color={getStatusColor(overall)}
            subtitle="Audit preparedness score"
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom fontWeight="600">
              Readiness Indicators
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {indicators.map((indicator, index) => (
                <Grid item xs={12} key={index}>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body1" fontWeight="500">
                          {indicator.indicator}
                        </Typography>
                        <Chip
                          label={indicator.status}
                          color={getStatusBadgeColor(indicator.status)}
                          size="small"
                          icon={getStatusIcon(indicator.status)}
                        />
                      </Box>
                      <Typography variant="body1" fontWeight="bold" color={getStatusColor(indicator.score) + '.main'}>
                        {indicator.score}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={indicator.score}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: 'action.hover',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: getStatusColor(indicator.score) + '.main',
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

export default AuditReadiness;
