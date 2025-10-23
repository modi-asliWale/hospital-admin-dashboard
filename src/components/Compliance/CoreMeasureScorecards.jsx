import { Grid, Box, Typography, LinearProgress } from '@mui/material';
import { Assessment, Favorite, LocalHospital, Psychology } from '@mui/icons-material';
import Card from '../common/Card';
import { coreMeasuresData } from '../../data/complianceMockData';

const CoreMeasureScorecards = () => {
  const { overall, trend, trendDirection, measures, lastUpdated } = coreMeasuresData;

  const getIcon = (name) => {
    if (name.includes('Sepsis')) return LocalHospital;
    if (name.includes('Heart')) return Favorite;
    if (name.includes('Stroke')) return Psychology;
    return Assessment;
  };

  const getColor = (score, target) => {
    if (score >= target) return 'success';
    if (score >= target - 5) return 'warning';
    return 'error';
  };

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom fontWeight="600">
          Core Measure Scorecards
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last updated: {lastUpdated}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Card
            title="Overall Score"
            value={`${overall}%`}
            icon={Assessment}
            trend={trend}
            trendDirection={trendDirection}
            color={getColor(overall, 90)}
            subtitle="Composite core measures"
          />
        </Grid>

        {measures.map((measure, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Card
              title={measure.name}
              icon={getIcon(measure.name)}
              color={getColor(measure.score, measure.target)}
            >
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
                {measure.score}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={measure.score}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  mb: 1,
                  bgcolor: 'action.hover',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: measure.score >= measure.target ? 'success.main' : 'warning.main',
                  },
                }}
              />
              <Typography variant="caption" display="block" color="text.secondary" sx={{ mb: 0.5 }}>
                Target: {measure.target}%
              </Typography>
              <Typography variant="body2" color={measure.change.startsWith('+') ? 'success.main' : 'error.main'}>
                {measure.change} from last month
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoreMeasureScorecards;
