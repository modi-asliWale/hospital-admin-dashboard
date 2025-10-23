import { Paper, Typography, Box, Grid, Divider } from '@mui/material';
import { Timer, TrendingDown } from '@mui/icons-material';
import { alosData } from '../../data/patientFlowMockData';

const ALOSMetric = () => {
  const departments = [
    { name: 'Emergency', days: alosData.emergency },
    { name: 'ICU', days: alosData.icu },
    { name: 'General Ward', days: alosData.general },
    { name: 'Pediatrics', days: alosData.pediatrics },
    { name: 'Maternity', days: alosData.maternity },
    { name: 'Surgery', days: alosData.surgery },
    { name: 'Cardiac', days: alosData.cardiac },
  ];

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: 2,
            p: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Timer sx={{ fontSize: 32 }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Average Length of Stay (ALOS)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hospital-wide patient stay duration
          </Typography>
        </Box>
      </Box>

      <Box sx={{ textAlign: 'center', mb: 3, p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
        <Typography variant="h2" fontWeight="bold" color="primary.main">
          {alosData.overall}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Days (Overall)
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 1 }}>
          <TrendingDown color="success" fontSize="small" />
          <Typography variant="body2" color="success.main" fontWeight={500}>
            {alosData.trend} from last month
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
        By Department
      </Typography>

      <Grid container spacing={2}>
        {departments.map((dept) => (
          <Grid item xs={6} sm={4} md={3} key={dept.name}>
            <Box
              sx={{
                p: 2,
                border: 1,
                borderColor: 'divider',
                borderRadius: 1,
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" fontWeight="bold" color="primary">
                {dept.days}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {dept.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default ALOSMetric;
