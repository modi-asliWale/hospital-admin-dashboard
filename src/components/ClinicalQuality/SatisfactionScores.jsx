import { Grid, Box, Typography, LinearProgress } from '@mui/material';
import { SentimentSatisfied, Star } from '@mui/icons-material';
import Card from '../common/Card';
import { satisfactionScoresData } from '../../data/clinicalQualityMockData';

const SatisfactionScores = () => {
  const { overall, trend, trendDirection, target, categories } = satisfactionScoresData;

  const getColor = (score) => {
    if (score >= 85) return 'success';
    if (score >= 70) return 'warning';
    return 'error';
  };

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom fontWeight="600">
          Patient Satisfaction Scores
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Based on patient surveys and feedback
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <Card
            title="Overall Satisfaction"
            value={`${overall}%`}
            icon={SentimentSatisfied}
            trend={trend}
            trendDirection={trendDirection}
            color={getColor(overall)}
            subtitle={`Target: ${target}%`}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Card title="Satisfaction Categories">
            <Grid container spacing={2}>
              {categories.map((category, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2" fontWeight="500">
                        {category.category}
                      </Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {category.score}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={category.score}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        mb: 0.5,
                        bgcolor: 'action.hover',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: category.score >= 85 ? 'success.main' : category.score >= 70 ? 'warning.main' : 'error.main',
                        },
                      }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {category.change} • {category.responses} responses
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SatisfactionScores;
