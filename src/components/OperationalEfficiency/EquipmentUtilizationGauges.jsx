import { Grid, Card, CardContent, Typography, Box, LinearProgress, Chip } from '@mui/material';
import { BuildCircle, Warning, CheckCircle } from '@mui/icons-material';
import { equipmentUtilizationData, equipmentStatusColors } from '../../data/operationalEfficiencyMockData';

const EquipmentUtilizationGauges = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'critical':
        return <Warning sx={{ color: equipmentStatusColors.critical, fontSize: 20 }} />;
      case 'high':
        return <Warning sx={{ color: equipmentStatusColors.high, fontSize: 20 }} />;
      case 'optimal':
        return <CheckCircle sx={{ color: equipmentStatusColors.optimal, fontSize: 20 }} />;
      default:
        return <CheckCircle sx={{ color: equipmentStatusColors.good, fontSize: 20 }} />;
    }
  };

  const getProgressColor = (utilization) => {
    if (utilization >= 90) return 'error';
    if (utilization >= 75) return 'warning';
    return 'success';
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <BuildCircle sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6" fontWeight="600">
          Equipment Utilization
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {equipmentUtilizationData.map((equipment) => (
          <Grid item xs={12} sm={6} md={4} key={equipment.name}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight="600">
                    {equipment.name}
                  </Typography>
                  {getStatusIcon(equipment.status)}
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="h4" fontWeight="bold">
                      {equipment.utilization}%
                    </Typography>
                    <Chip 
                      label={equipment.status.toUpperCase()} 
                      size="small"
                      sx={{ 
                        bgcolor: `${equipmentStatusColors[equipment.status]}20`,
                        color: equipmentStatusColors[equipment.status],
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={equipment.utilization} 
                    color={getProgressColor(equipment.utilization)}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Available: <strong>{equipment.available}</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total: <strong>{equipment.total}</strong>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EquipmentUtilizationGauges;
