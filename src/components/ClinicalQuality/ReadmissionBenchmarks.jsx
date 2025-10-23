import { Grid, Box, Typography } from '@mui/material';
import { Replay, TrendingDown } from '@mui/icons-material';
import Card from '../common/Card';
import Chart from '../common/Chart';
import { readmissionData } from '../../data/clinicalQualityMockData';

const ReadmissionBenchmarks = () => {
  const { rate, trend, trendDirection, target, nationalAverage, timeFrames, byDepartment } = readmissionData;

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom fontWeight="600">
          30-Day Readmission Rates
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Percentage of patients readmitted within 30 days
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card
            title="Current Rate"
            value={`${rate}%`}
            icon={Replay}
            trend={trend}
            trendDirection={trendDirection}
            color={rate <= target ? 'success' : 'warning'}
            subtitle="30-day readmission rate"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Card
            title="Target Rate"
            value={`${target}%`}
            icon={TrendingDown}
            color="primary"
            subtitle="Hospital target"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Card
            title="National Average"
            value={`${nationalAverage}%`}
            icon={Replay}
            color="info"
            subtitle="US hospitals average"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Card title="Time Frame Breakdown" color="secondary">
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">7 days:</Typography>
                <Typography variant="body2" fontWeight="bold">{timeFrames.day7}%</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">14 days:</Typography>
                <Typography variant="body2" fontWeight="bold">{timeFrames.day14}%</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">30 days:</Typography>
                <Typography variant="body2" fontWeight="bold">{timeFrames.day30}%</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Chart
        title="Readmission Rates by Department"
        type="bar"
        data={byDepartment.map(dept => ({
          name: dept.department,
          rate: dept.rate,
          benchmark: dept.benchmark,
        }))}
        dataKey="rate"
        xKey="name"
        colors={['#0056b3']}
        height={300}
      />
    </Box>
  );
};

export default ReadmissionBenchmarks;
