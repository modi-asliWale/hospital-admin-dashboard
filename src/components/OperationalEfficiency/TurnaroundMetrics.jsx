import { Grid, Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { Science, LocalPharmacy, TrendingDown, TrendingUp } from '@mui/icons-material';
import Chart from '../common/Chart';
import { labTurnaroundData, pharmacyTurnaroundData } from '../../data/operationalEfficiencyMockData';

const TurnaroundMetrics = () => {
  const renderMetricCard = (title, icon, data, color) => (
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

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Chip 
            label={`Target: ${data.overall.target} mins`}
            size="small"
            color={data.overall.average <= data.overall.target ? 'success' : 'warning'}
            variant="outlined"
          />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {data.overall.trendDirection === 'down' ? (
              <TrendingDown sx={{ color: 'success.main', mr: 0.5 }} />
            ) : (
              <TrendingUp sx={{ color: 'error.main', mr: 0.5 }} />
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

        <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ mt: 3, mb: 1 }}>
          By Type:
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {data.byType.slice(0, 4).map((item) => (
            <Box 
              key={item.test || item.type} 
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                p: 1,
                bgcolor: 'background.default',
                borderRadius: 1,
              }}
            >
              <Typography variant="body2">{item.test || item.type}</Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Typography variant="body2" fontWeight="600">
                  {item.average} mins
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ({item.count} today)
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box>
      <Typography variant="h6" fontWeight="600" gutterBottom sx={{ mb: 3 }}>
        Lab & Pharmacy Turnaround Times
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          {renderMetricCard(
            'Lab Turnaround Time',
            <Science sx={{ fontSize: 24 }} />,
            labTurnaroundData,
            'primary'
          )}
        </Grid>
        <Grid item xs={12} lg={6}>
          {renderMetricCard(
            'Pharmacy Turnaround Time',
            <LocalPharmacy sx={{ fontSize: 24 }} />,
            pharmacyTurnaroundData,
            'secondary'
          )}
        </Grid>
        <Grid item xs={12} lg={6}>
          <Chart
            title="Lab Turnaround Trend (7 Days)"
            type="line"
            data={labTurnaroundData.trend}
            dataKey="average"
            xKey="day"
            colors={['#0056b3']}
            height={280}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Chart
            title="Pharmacy Turnaround Trend (7 Days)"
            type="line"
            data={pharmacyTurnaroundData.trend}
            dataKey="average"
            xKey="day"
            colors={['#6f42c1']}
            height={280}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TurnaroundMetrics;
