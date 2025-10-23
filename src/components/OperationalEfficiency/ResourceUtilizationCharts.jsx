import { Grid, Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';
import { LocalHospital, MeetingRoom, Science } from '@mui/icons-material';
import Chart from '../common/Chart';
import { resourceUtilizationData } from '../../data/operationalEfficiencyMockData';

const ResourceUtilizationCharts = () => {
  const { operatingRooms, emergencyRooms, diagnosticLabs } = resourceUtilizationData;

  const renderResourceList = (title, icon, data, color) => (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
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

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          {data.map((item) => {
            const getProgressColor = (utilization) => {
              if (utilization >= 90) return 'error';
              if (utilization >= 75) return 'warning';
              return 'success';
            };

            return (
              <Box key={item.name}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1" fontWeight="600">
                    {item.name}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" color={`${getProgressColor(item.utilization)}.main`}>
                    {item.utilization}%
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={item.utilization} 
                  color={getProgressColor(item.utilization)}
                  sx={{ height: 8, borderRadius: 4, mb: 0.5 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="caption" color="text.secondary">
                    {item.hours ? `${item.hours} / ${item.capacity} hours` : 
                     item.patients ? `${item.patients} / ${item.capacity} patients` :
                     `${item.tests} / ${item.capacity} tests`}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );

  const allResourcesData = [
    ...operatingRooms.map(r => ({ name: r.name, utilization: r.utilization })),
    ...emergencyRooms.map(r => ({ name: r.name, utilization: r.utilization })),
    ...diagnosticLabs.map(r => ({ name: r.name, utilization: r.utilization })),
  ];

  return (
    <Box>
      <Typography variant="h6" fontWeight="600" gutterBottom sx={{ mb: 3 }}>
        Resource Utilization & Service Response
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          {renderResourceList(
            'Operating Rooms',
            <MeetingRoom sx={{ fontSize: 24 }} />,
            operatingRooms,
            'primary'
          )}
        </Grid>
        <Grid item xs={12} lg={4}>
          {renderResourceList(
            'Emergency Rooms',
            <LocalHospital sx={{ fontSize: 24 }} />,
            emergencyRooms,
            'error'
          )}
        </Grid>
        <Grid item xs={12} lg={4}>
          {renderResourceList(
            'Diagnostic Labs',
            <Science sx={{ fontSize: 24 }} />,
            diagnosticLabs,
            'info'
          )}
        </Grid>
        <Grid item xs={12}>
          <Chart
            title="Overall Resource Utilization"
            type="bar"
            data={allResourcesData}
            dataKey="utilization"
            xKey="name"
            colors={['#0056b3']}
            height={300}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResourceUtilizationCharts;
