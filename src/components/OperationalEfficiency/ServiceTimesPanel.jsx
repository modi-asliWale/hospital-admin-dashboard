import { Grid, Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';
import { LocalShipping, CleaningServices, TrendingDown, TrendingUp } from '@mui/icons-material';
import { transportTimesData, housekeepingTimesData } from '../../data/operationalEfficiencyMockData';

const ServiceTimesPanel = () => {
  const renderServiceCard = (title, icon, data, color) => (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            sx={{
              bgcolor: `${color}.main`,
              color: 'white',
              borderRadius: 2,
              p: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
            }}
          >
            {icon}
          </Box>
          <Typography variant="h6" fontWeight="600">
            {title}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
          <Typography variant="h3" fontWeight="bold" sx={{ mr: 2 }}>
            {data.overall.average}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            mins
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Target: {data.overall.target} mins
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {data.overall.trendDirection === 'down' ? (
              <TrendingDown sx={{ color: 'success.main', fontSize: 18, mr: 0.5 }} />
            ) : (
              <TrendingUp sx={{ color: 'error.main', fontSize: 18, mr: 0.5 }} />
            )}
            <Typography 
              variant="body2" 
              color={data.overall.trendDirection === 'down' ? 'success.main' : 'error.main'}
              fontWeight="600"
            >
              {data.overall.trend}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {data.byType.map((item) => {
            const progress = (item.average / item.target) * 100;
            const isOnTarget = item.average <= item.target;
            
            return (
              <Box key={item.type}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography variant="body2" fontWeight="500">
                    {item.type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.average} / {item.target} mins
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={Math.min(progress, 100)} 
                  color={isOnTarget ? 'success' : 'warning'}
                  sx={{ height: 6, borderRadius: 3 }}
                />
                <Typography variant="caption" color="text.secondary">
                  {item.count} requests today
                </Typography>
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box>
      <Typography variant="h6" fontWeight="600" gutterBottom sx={{ mb: 3 }}>
        Transport & Housekeeping Times
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {renderServiceCard(
            'Transport Services',
            <LocalShipping sx={{ fontSize: 24 }} />,
            transportTimesData,
            'info'
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          {renderServiceCard(
            'Housekeeping Services',
            <CleaningServices sx={{ fontSize: 24 }} />,
            housekeepingTimesData,
            'success'
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceTimesPanel;
