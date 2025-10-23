import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { 
  BuildCircle, 
  MeetingRoom, 
  People, 
  Computer,
  CheckCircle,
  Cancel,
  Warning,
  HourglassEmpty,
} from '@mui/icons-material';
import { availabilityStatusData, statusColors } from '../../data/operationalEfficiencyMockData';

const AvailabilityStatusGrid = () => {
  const categories = [
    {
      title: 'Equipment',
      icon: <BuildCircle sx={{ fontSize: 40 }} />,
      color: 'primary',
      data: availabilityStatusData.equipment,
      items: [
        { label: 'Available', key: 'available', icon: <CheckCircle />, color: statusColors.available },
        { label: 'In Use', key: 'inUse', icon: <HourglassEmpty />, color: statusColors.inUse },
        { label: 'Maintenance', key: 'maintenance', icon: <Warning />, color: statusColors.maintenance },
        { label: 'Out of Service', key: 'outOfService', icon: <Cancel />, color: statusColors.outOfService },
      ],
    },
    {
      title: 'Rooms',
      icon: <MeetingRoom sx={{ fontSize: 40 }} />,
      color: 'secondary',
      data: availabilityStatusData.rooms,
      items: [
        { label: 'Available', key: 'available', icon: <CheckCircle />, color: statusColors.available },
        { label: 'Occupied', key: 'occupied', icon: <HourglassEmpty />, color: statusColors.occupied },
        { label: 'Cleaning', key: 'cleaning', icon: <Warning />, color: statusColors.cleaning },
        { label: 'Maintenance', key: 'maintenance', icon: <Cancel />, color: statusColors.maintenance },
      ],
    },
    {
      title: 'Staff',
      icon: <People sx={{ fontSize: 40 }} />,
      color: 'success',
      data: availabilityStatusData.staff,
      items: [
        { label: 'Available', key: 'available', icon: <CheckCircle />, color: statusColors.available },
        { label: 'On Duty', key: 'onDuty', icon: <HourglassEmpty />, color: statusColors.onDuty },
        { label: 'On Break', key: 'onBreak', icon: <Warning />, color: statusColors.onBreak },
        { label: 'Offline', key: 'offline', icon: <Cancel />, color: statusColors.offline },
      ],
    },
    {
      title: 'Services',
      icon: <Computer sx={{ fontSize: 40 }} />,
      color: 'info',
      data: availabilityStatusData.services,
      items: [
        { label: 'Operational', key: 'operational', icon: <CheckCircle />, color: statusColors.operational },
        { label: 'Degraded', key: 'degraded', icon: <Warning />, color: statusColors.degraded },
        { label: 'Offline', key: 'offline', icon: <Cancel />, color: statusColors.offline },
      ],
    },
  ];

  const getTotalCount = (data) => {
    return Object.values(data).reduce((sum, value) => sum + value, 0);
  };

  return (
    <Box>
      <Typography variant="h6" fontWeight="600" gutterBottom sx={{ mb: 3 }}>
        Availability Status Grid
      </Typography>
      <Grid container spacing={3}>
        {categories.map((category) => {
          const total = getTotalCount(category.data);
          const availableCount = category.data.available || category.data.operational || 0;
          const availabilityPercentage = total > 0 ? Math.round((availableCount / total) * 100) : 0;

          return (
            <Grid item xs={12} sm={6} lg={3} key={category.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        bgcolor: `${category.color}.main`,
                        color: 'white',
                        borderRadius: 2,
                        p: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" fontWeight="600">
                        {category.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {availabilityPercentage}% Available
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 3 }}>
                    {category.items.map((item) => {
                      const value = category.data[item.key] || 0;
                      const percentage = total > 0 ? Math.round((value / total) * 100) : 0;

                      return (
                        <Box 
                          key={item.key}
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 1,
                            bgcolor: 'background.default',
                            borderRadius: 1,
                            borderLeft: `3px solid ${item.color}`,
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box sx={{ color: item.color, display: 'flex' }}>
                              {item.icon}
                            </Box>
                            <Typography variant="body2">
                              {item.label}
                            </Typography>
                          </Box>
                          <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="h6" fontWeight="bold">
                              {value}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {percentage}%
                            </Typography>
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>

                  <Box 
                    sx={{ 
                      mt: 2, 
                      pt: 2, 
                      borderTop: 1, 
                      borderColor: 'divider',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      Total Count
                    </Typography>
                    <Typography variant="h5" fontWeight="bold" color={`${category.color}.main`}>
                      {total}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default AvailabilityStatusGrid;
