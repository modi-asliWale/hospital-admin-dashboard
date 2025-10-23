import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Box,
  Divider,
} from '@mui/material';
import { LocalHospital } from '@mui/icons-material';
import { traumaActivations } from '../../data/erMockData';

const TraumaActivations = () => {
  const getLevelColor = (level) => {
    return level === 'Level 1' ? 'error' : 'warning';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'error';
      case 'Incoming':
        return 'warning';
      case 'Stabilized':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" fontWeight="600" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocalHospital color="error" />
            Trauma Activations
          </Typography>
          <Chip 
            label={`${traumaActivations.length} Active`} 
            color="error" 
            size="small"
          />
        </Box>
        <List>
          {traumaActivations.map((trauma, index) => (
            <Box key={trauma.id}>
              <ListItem 
                sx={{ 
                  px: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 1 }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Chip 
                      label={trauma.level} 
                      color={getLevelColor(trauma.level)} 
                      size="small"
                    />
                    <Chip 
                      label={trauma.status} 
                      color={getStatusColor(trauma.status)} 
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    {trauma.time}
                  </Typography>
                </Box>
                <ListItemText
                  primary={
                    <Box>
                      <Typography variant="body1" fontWeight="600">
                        {trauma.patient} - {trauma.age} yo {trauma.gender}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {trauma.mechanism}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Box sx={{ mt: 0.5 }}>
                      <Chip 
                        label={`ETA: ${trauma.eta}`} 
                        size="small" 
                        variant="outlined"
                        color={trauma.eta === 'Arrived' ? 'success' : 'warning'}
                      />
                    </Box>
                  }
                />
              </ListItem>
              {index < traumaActivations.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TraumaActivations;
