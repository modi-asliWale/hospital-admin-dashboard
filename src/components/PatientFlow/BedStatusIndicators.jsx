import { Box, Paper, Typography, Chip } from '@mui/material';
import { Circle } from '@mui/icons-material';
import { bedStatusColors } from '../../data/patientFlowMockData';

const BedStatusIndicators = () => {
  const statusItems = [
    { label: 'Occupied', color: bedStatusColors.occupied, count: 387 },
    { label: 'Available', color: bedStatusColors.available, count: 63 },
    { label: 'Maintenance', color: bedStatusColors.maintenance, count: 12 },
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Bed Status Legend
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
        {statusItems.map((item) => (
          <Box
            key={item.label}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: 1,
              bgcolor: 'background.default',
            }}
          >
            <Circle sx={{ fontSize: 16, color: item.color }} />
            <Typography variant="body2" fontWeight={500}>
              {item.label}
            </Typography>
            <Chip
              label={item.count}
              size="small"
              sx={{
                bgcolor: item.color,
                color: 'white',
                fontWeight: 'bold',
              }}
            />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default BedStatusIndicators;
