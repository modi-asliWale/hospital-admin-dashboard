import { Paper, Typography, Box, LinearProgress, Stack, Chip } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { workforceSatisfactionData } from '../../data/staffManagementMockData';

const getChangeColor = (theme, change) => {
  if (change.startsWith('+')) {
    return theme.palette.success.main;
  }
  if (change.startsWith('-')) {
    return theme.palette.error.main;
  }
  return theme.palette.text.secondary;
};

const WorkforceSatisfactionScore = () => {
  const theme = useTheme();
  const changeColor = getChangeColor(theme, workforceSatisfactionData.change);

  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Workforce Satisfaction Index
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Engagement, workload, and growth indicators from latest pulse survey
      </Typography>

      <Box
        sx={{
          borderRadius: 2,
          p: 2.5,
          bgcolor: alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.18 : 0.08),
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
          mb: 3,
        }}
      >
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            Overall Score
          </Typography>
          <Typography variant="h3" fontWeight={700}>
            {workforceSatisfactionData.overallScore}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            Change vs. Prior
          </Typography>
          <Typography variant="h6" sx={{ color: changeColor }}>
            {workforceSatisfactionData.change}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Benchmark {workforceSatisfactionData.benchmark}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            Participation Rate
          </Typography>
          <Typography variant="h6" fontWeight={600}>
            {workforceSatisfactionData.participationRate}%
          </Typography>
          <Chip label="High confidence" color="success" size="small" variant="outlined" sx={{ mt: 0.5 }} />
        </Box>
      </Box>

      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
        Key Drivers
      </Typography>
      <Stack spacing={2}>
        {workforceSatisfactionData.drivers.map((driver) => (
          <Box key={driver.label}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <Typography variant="body2" fontWeight={500}>
                {driver.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {driver.score} ({driver.change})
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={driver.score}
              sx={{ height: 8, borderRadius: 999, mt: 1 }}
              color="primary"
            />
          </Box>
        ))}
      </Stack>

      <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 3, mb: 1 }}>
        Highlights
      </Typography>
      <Stack spacing={1.2}>
        {workforceSatisfactionData.highlights.map((highlight) => (
          <Typography key={highlight} variant="body2">
            • {highlight}
          </Typography>
        ))}
      </Stack>
    </Paper>
  );
};

export default WorkforceSatisfactionScore;
