import { Box, Paper, Typography, Tooltip, Grid } from '@mui/material';
import { bedHeatMapData, bedStatusColors } from '../../data/patientFlowMockData';

const BedStatusHeatMap = () => {
  const getBedColor = (status) => {
    return bedStatusColors[status] || '#666';
  };

  const getBedTooltip = (room) => {
    if (room.status === 'occupied') {
      return `Room ${room.room}\nPatient: ${room.patient}\nAdmitted: ${room.admitDate}`;
    } else if (room.status === 'maintenance') {
      return `Room ${room.room}\nUnder Maintenance`;
    } else {
      return `Room ${room.room}\nAvailable`;
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Bed Status Heat Map
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Real-time bed availability by floor and room
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {bedHeatMapData.map((floor) => (
          <Box key={floor.floor}>
            <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
              {floor.floor}
            </Typography>
            <Grid container spacing={1}>
              {floor.rooms.map((room) => (
                <Grid item xs={3} sm={2} md={1.5} key={room.room}>
                  <Tooltip title={getBedTooltip(room)} arrow>
                    <Box
                      sx={{
                        aspectRatio: '1',
                        bgcolor: getBedColor(room.status),
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                          transform: 'scale(1.1)',
                          boxShadow: 3,
                        },
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: { xs: '0.6rem', sm: '0.75rem' },
                        }}
                      >
                        {room.room}
                      </Typography>
                    </Box>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default BedStatusHeatMap;
