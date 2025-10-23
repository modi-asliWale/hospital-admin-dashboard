import { Grid, Box, Typography, Chip } from '@mui/material';
import { BugReport, TrendingDown, TrendingUp } from '@mui/icons-material';
import Card from '../common/Card';
import { infectionRatesData } from '../../data/clinicalQualityMockData';

const InfectionRatesWidget = () => {
  const { overall, trend, trendDirection, target, types } = infectionRatesData;

  return (
    <Box>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h5" gutterBottom fontWeight="600">
            Healthcare-Associated Infection Rates
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Infections per 1,000 patient days
          </Typography>
        </Box>
        <Chip
          label={`Target: ${target}`}
          color="primary"
          variant="outlined"
        />
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Card
            title="Overall Infection Rate"
            value={overall}
            icon={BugReport}
            trend={trend}
            trendDirection={trendDirection}
            color={overall <= target ? 'success' : 'error'}
            subtitle="Per 1,000 patient days"
          />
        </Grid>

        {types.map((type, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Card
              title={type.type}
              color={type.change.startsWith('-') ? 'success' : 'warning'}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                <Typography variant="h4" fontWeight="bold">
                  {type.rate}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: type.change.startsWith('-') ? 'success.main' : 'error.main',
                  }}
                >
                  {type.change.startsWith('-') ? <TrendingDown /> : <TrendingUp />}
                  <Typography variant="body2" fontWeight="500">
                    {type.change}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {type.cases} cases this month
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InfectionRatesWidget;
