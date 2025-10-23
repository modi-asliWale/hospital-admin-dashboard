import { Grid, Box, Typography, LinearProgress } from '@mui/material';
import { Shield, LocalHospital, MedicalServices, Warning } from '@mui/icons-material';
import Card from '../common/Card';
import { safetyScorecardsData } from '../../data/clinicalQualityMockData';

const SafetyScorecards = () => {
  const { overallScore, trend, trendDirection, categories, lastUpdated } = safetyScorecardsData;

  const getIcon = (name) => {
    switch (name) {
      case 'Patient Safety':
        return Shield;
      case 'Medication Safety':
        return LocalHospital;
      case 'Surgical Safety':
        return MedicalServices;
      case 'Fall Prevention':
        return Warning;
      default:
        return Shield;
    }
  };

  const getColor = (score) => {
    if (score >= 90) return 'success';
    if (score >= 75) return 'warning';
    return 'error';
  };

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom fontWeight="600">
          Safety Scorecards
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last updated: {lastUpdated}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Card
            title="Overall Safety Score"
            value={`${overallScore}%`}
            icon={Shield}
            trend={trend}
            trendDirection={trendDirection}
            color={getColor(overallScore)}
            subtitle="Composite safety metric"
          />
        </Grid>

        {categories.map((category, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Card
              title={category.name}
              icon={getIcon(category.name)}
              color={getColor(category.score)}
            >
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
                {category.score}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={category.score}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  mb: 1,
                  bgcolor: 'action.hover',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: category.score >= 90 ? 'success.main' : category.score >= 75 ? 'warning.main' : 'error.main',
                  },
                }}
              />
              <Typography variant="body2" color={category.change.startsWith('+') ? 'success.main' : 'error.main'}>
                {category.change} from last month
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SafetyScorecards;
