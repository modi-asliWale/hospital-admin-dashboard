import { 
  Card, 
  CardContent, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Chip,
  Box,
} from '@mui/material';
import {
  Warning,
  Error,
  Info,
  CheckCircle,
} from '@mui/icons-material';

const AlertsPanel = () => {
  const alerts = [
    {
      id: 1,
      type: 'error',
      title: 'ICU Capacity Critical',
      message: 'ICU beds at 96% capacity. Immediate attention required.',
      time: '5 minutes ago',
      severity: 'critical',
    },
    {
      id: 2,
      type: 'warning',
      title: 'Staff Shortage Alert',
      message: 'Night shift nursing staff 2 members short.',
      time: '15 minutes ago',
      severity: 'high',
    },
    {
      id: 3,
      type: 'warning',
      title: 'Equipment Maintenance',
      message: 'MRI Machine #2 scheduled maintenance due today.',
      time: '1 hour ago',
      severity: 'medium',
    },
    {
      id: 4,
      type: 'info',
      title: 'Medication Stock Low',
      message: 'Several medications below reorder threshold.',
      time: '2 hours ago',
      severity: 'low',
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'error':
        return <Error color="error" />;
      case 'warning':
        return <Warning color="warning" />;
      case 'info':
        return <Info color="info" />;
      case 'success':
        return <CheckCircle color="success" />;
      default:
        return <Info />;
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical':
        return 'error';
      case 'high':
        return 'warning';
      case 'medium':
        return 'info';
      case 'low':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">
            Critical Alerts
          </Typography>
          <Chip 
            label={`${alerts.length} Active`} 
            color="error" 
            size="small" 
          />
        </Box>
        
        <List sx={{ p: 0 }}>
          {alerts.map((alert, index) => (
            <Box key={alert.id}>
              <ListItem
                sx={{
                  px: 0,
                  py: 2,
                  '&:hover': {
                    bgcolor: 'action.hover',
                    borderRadius: 1,
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  {getIcon(alert.type)}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                      <Typography variant="subtitle2" fontWeight="600">
                        {alert.title}
                      </Typography>
                      <Chip 
                        label={alert.severity.toUpperCase()} 
                        size="small" 
                        color={getSeverityColor(alert.severity)}
                        sx={{ height: 20, fontSize: '0.7rem' }}
                      />
                    </Box>
                  }
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        {alert.message}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {alert.time}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {index < alerts.length - 1 && (
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} />
              )}
            </Box>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;
