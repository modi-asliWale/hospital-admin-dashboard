import { Grid, Box, Typography, Paper, LinearProgress, Chip } from '@mui/material';
import { Description, CheckCircle, Error } from '@mui/icons-material';
import Card from '../common/Card';
import { documentationCompletionData } from '../../data/complianceMockData';

const DocumentationCompletion = () => {
  const { overall, trend, trendDirection, target, categories } = documentationCompletionData;

  const getStatusColor = (completion) => {
    if (completion >= 95) return 'success';
    if (completion >= 85) return 'warning';
    return 'error';
  };

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom fontWeight="600">
          Documentation Completion
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Track compliance with documentation requirements
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card
            title="Overall Completion"
            value={`${overall}%`}
            icon={Description}
            trend={trend}
            trendDirection={trendDirection}
            color={getStatusColor(overall)}
            subtitle={`Target: ${target}%`}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom fontWeight="600">
              Documentation Categories
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {categories.map((category, index) => (
                <Grid item xs={12} key={index}>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="body1" fontWeight="500">
                        {category.category}
                      </Typography>
                      <Typography variant="body1" fontWeight="bold" color={getStatusColor(category.completion) + '.main'}>
                        {category.completion}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={category.completion}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        mb: 1,
                        bgcolor: 'action.hover',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: getStatusColor(category.completion) + '.main',
                        },
                      }}
                    />
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Chip
                        icon={<CheckCircle />}
                        label={`${category.pending} Pending`}
                        size="small"
                        color="info"
                        variant="outlined"
                      />
                      {category.overdue > 0 && (
                        <Chip
                          icon={<Error />}
                          label={`${category.overdue} Overdue`}
                          size="small"
                          color="error"
                          variant="outlined"
                        />
                      )}
                    </Box>
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

export default DocumentationCompletion;
