import { Grid, Box, Typography, Paper, LinearProgress, Chip } from '@mui/material';
import { Stars, CheckCircle, Warning } from '@mui/icons-material';
import Card from '../common/Card';
import { accreditationReadinessData } from '../../data/complianceMockData';

const AccreditationReadiness = () => {
  const { overall, trend, trendDirection, target, lastAssessment, nextSurvey, domains } = accreditationReadinessData;

  const getStatusColor = (score) => {
    if (score >= 90) return 'success';
    if (score >= 85) return 'warning';
    return 'error';
  };

  const getStatusBadgeColor = (status) => {
    return status === 'Ready' ? 'success' : 'warning';
  };

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom fontWeight="600">
          Accreditation Readiness Score
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last assessment: {lastAssessment} | Next survey: {nextSurvey}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card
            title="Overall Readiness"
            value={`${overall}%`}
            icon={Stars}
            trend={trend}
            trendDirection={trendDirection}
            color={getStatusColor(overall)}
            subtitle={`Target: ${target}%`}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom fontWeight="600">
              Accreditation Domains
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {domains.map((domain, index) => (
                <Grid item xs={12} key={index}>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body1" fontWeight="500">
                          {domain.domain}
                        </Typography>
                        <Chip
                          label={domain.status}
                          color={getStatusBadgeColor(domain.status)}
                          size="small"
                          icon={domain.status === 'Ready' ? <CheckCircle /> : <Warning />}
                        />
                      </Box>
                      <Typography variant="body1" fontWeight="bold" color={getStatusColor(domain.score) + '.main'}>
                        {domain.score}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={domain.score}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        mb: 0.5,
                        bgcolor: 'action.hover',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: getStatusColor(domain.score) + '.main',
                        },
                      }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {domain.findings} finding{domain.findings !== 1 ? 's' : ''} identified
                    </Typography>
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

export default AccreditationReadiness;
