import { Grid, Box, Typography, Chip } from '@mui/material';
import { MonitorHeart, TrendingDown } from '@mui/icons-material';
import Card from '../common/Card';
import Chart from '../common/Chart';
import { mortalityData } from '../../data/clinicalQualityMockData';

const MortalityBenchmarks = () => {
  const { rate, trend, trendDirection, target, nationalAverage, expectedRate, smr, byDepartment } = mortalityData;

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom fontWeight="600">
          Mortality Rates & Benchmarks
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hospital mortality statistics and comparison
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card
            title="Actual Mortality Rate"
            value={`${rate}%`}
            icon={MonitorHeart}
            trend={trend}
            trendDirection={trendDirection}
            color={rate <= target ? 'success' : 'error'}
            subtitle="Current mortality rate"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Card
            title="Expected Rate"
            value={`${expectedRate}%`}
            icon={TrendingDown}
            color="primary"
            subtitle="Risk-adjusted expected"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Card
            title="SMR (O/E Ratio)"
            value={smr}
            icon={MonitorHeart}
            color={smr < 1 ? 'success' : 'warning'}
            subtitle="Standardized Mortality Ratio"
          >
            <Chip
              label={smr < 1 ? 'Better than expected' : 'As expected'}
              size="small"
              color={smr < 1 ? 'success' : 'default'}
              sx={{ mt: 1 }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card
            title="National Average"
            value={`${nationalAverage}%`}
            icon={MonitorHeart}
            color="info"
            subtitle="US hospitals average"
          />
        </Grid>
      </Grid>

      <Chart
        title="Mortality Rates by Department"
        type="bar"
        data={byDepartment.map(dept => ({
          name: dept.department,
          rate: dept.rate,
          benchmark: dept.benchmark,
        }))}
        dataKey="rate"
        xKey="name"
        colors={['#dc3545']}
        height={300}
      />
    </Box>
  );
};

export default MortalityBenchmarks;
