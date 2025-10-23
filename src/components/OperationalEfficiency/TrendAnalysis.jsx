import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { TrendingUp, Timeline } from '@mui/icons-material';
import Chart from '../common/Chart';
import { trendAnalysisData } from '../../data/operationalEfficiencyMockData';

const TrendAnalysis = () => {
  const { equipmentUtilization, serviceTimes, responseTime, maintenanceCompletion } = trendAnalysisData;

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Timeline sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6" fontWeight="600">
          Trend Analysis
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <Chart
            title="Equipment Utilization Trend (7 Months)"
            type="area"
            data={equipmentUtilization}
            dataKey="utilization"
            xKey="month"
            colors={['#0056b3']}
            height={300}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="600">
                Service Times Trends
              </Typography>
              <Box sx={{ width: '100%', height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ width: '100%' }}>
                  {serviceTimes.map((month, index) => {
                    if (index === 0 || index === serviceTimes.length - 1) {
                      return (
                        <Box 
                          key={month.month}
                          sx={{ 
                            mb: 2,
                            p: 2,
                            bgcolor: 'background.default',
                            borderRadius: 2,
                          }}
                        >
                          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                            {month.month === serviceTimes[0].month ? 'Initial Period' : 'Current Period'} - {month.month}
                          </Typography>
                          <Grid container spacing={2}>
                            <Grid item xs={3}>
                              <Typography variant="caption" color="text.secondary">Lab</Typography>
                              <Typography variant="h6" fontWeight="bold" color="primary.main">{month.lab}m</Typography>
                            </Grid>
                            <Grid item xs={3}>
                              <Typography variant="caption" color="text.secondary">Pharmacy</Typography>
                              <Typography variant="h6" fontWeight="bold" color="secondary.main">{month.pharmacy}m</Typography>
                            </Grid>
                            <Grid item xs={3}>
                              <Typography variant="caption" color="text.secondary">Transport</Typography>
                              <Typography variant="h6" fontWeight="bold" color="info.main">{month.transport}m</Typography>
                            </Grid>
                            <Grid item xs={3}>
                              <Typography variant="caption" color="text.secondary">Housekeeping</Typography>
                              <Typography variant="h6" fontWeight="bold" color="success.main">{month.housekeeping}m</Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      );
                    }
                    return null;
                  })}
                  <Box sx={{ mt: 3, p: 2, bgcolor: 'success.main', color: 'white', borderRadius: 2, textAlign: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                      <TrendingUp sx={{ mr: 1 }} />
                      <Typography variant="h6" fontWeight="bold">
                        Overall Improvement
                      </Typography>
                    </Box>
                    <Typography variant="body2">
                      All service times reduced by 8-15% over 7 months
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Chart
            title="Service Response Time (4 Weeks)"
            type="line"
            data={responseTime}
            dataKey="avg"
            xKey="week"
            colors={['#28a745']}
            height={300}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <Chart
            title="Maintenance Completion Rate (4 Weeks)"
            type="bar"
            data={maintenanceCompletion}
            dataKey="rate"
            xKey="week"
            colors={['#6f42c1']}
            height={300}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrendAnalysis;
