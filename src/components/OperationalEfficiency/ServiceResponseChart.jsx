import { Grid, Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { Speed, TrendingDown, TrendingUp } from '@mui/icons-material';
import Chart from '../common/Chart';
import { serviceResponseData } from '../../data/operationalEfficiencyMockData';

const ServiceResponseChart = () => {
  const { overall, byService, trend } = serviceResponseData;

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Speed sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6" fontWeight="600">
          Service Response Times
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Average Response Time
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
                <Typography variant="h2" fontWeight="bold" sx={{ mr: 2 }}>
                  {overall.average}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  mins
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Chip 
                  label={`Target: ${overall.target} mins`}
                  size="small"
                  color={overall.average <= overall.target ? 'success' : 'warning'}
                  variant="outlined"
                />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {overall.trendDirection === 'down' ? (
                    <TrendingDown sx={{ color: 'success.main', mr: 0.5 }} />
                  ) : (
                    <TrendingUp sx={{ color: 'error.main', mr: 0.5 }} />
                  )}
                  <Typography 
                    variant="body2" 
                    color={overall.trendDirection === 'down' ? 'success.main' : 'error.main'}
                    fontWeight="600"
                  >
                    {overall.trend}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="600">
                Response Time by Service
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 2 }}>
                {byService.map((service) => {
                  const isOnTarget = service.average <= service.target;
                  const percentage = (service.average / service.target) * 100;
                  
                  return (
                    <Box 
                      key={service.service}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 1.5,
                        bgcolor: 'background.default',
                        borderRadius: 2,
                        borderLeft: `4px solid ${isOnTarget ? '#28a745' : '#ffc107'}`,
                      }}
                    >
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" fontWeight="600">
                          {service.service}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {service.count} requests today
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="h6" fontWeight="bold" color={isOnTarget ? 'success.main' : 'warning.main'}>
                          {service.average} mins
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Target: {service.target} mins
                        </Typography>
                      </Box>
                      <Box sx={{ ml: 2, width: 60 }}>
                        <Chip 
                          label={`${Math.round(percentage)}%`}
                          size="small"
                          color={isOnTarget ? 'success' : 'warning'}
                          sx={{ fontWeight: 600 }}
                        />
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Chart
            title="Response Time Trend (24 Hours)"
            type="area"
            data={trend}
            dataKey="average"
            xKey="hour"
            colors={['#0056b3']}
            height={300}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceResponseChart;
