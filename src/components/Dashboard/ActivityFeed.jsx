import { 
  Card, 
  CardContent, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Avatar,
  Box,
  Chip,
} from '@mui/material';
import {
  PersonAdd,
  LocalHospital,
  ExitToApp,
  AttachMoney,
  MedicalServices,
  Person,
} from '@mui/icons-material';

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      type: 'admission',
      icon: PersonAdd,
      color: '#0056b3',
      title: 'New Patient Admitted',
      description: 'John Doe admitted to Ward A',
      user: 'Dr. Sarah Smith',
      time: '2 minutes ago',
      category: 'Patient',
    },
    {
      id: 2,
      type: 'discharge',
      icon: ExitToApp,
      color: '#28a745',
      title: 'Patient Discharged',
      description: 'Jane Smith discharged from ICU',
      user: 'Dr. Michael Johnson',
      time: '10 minutes ago',
      category: 'Patient',
    },
    {
      id: 3,
      type: 'surgery',
      icon: MedicalServices,
      color: '#dc3545',
      title: 'Surgery Completed',
      description: 'Cardiac surgery in OR-3',
      user: 'Dr. Emily Brown',
      time: '25 minutes ago',
      category: 'Operation',
    },
    {
      id: 4,
      type: 'staff',
      icon: Person,
      color: '#ffc107',
      title: 'Staff Shift Change',
      description: 'Night shift staff checked in',
      user: 'Admin',
      time: '1 hour ago',
      category: 'Staff',
    },
    {
      id: 5,
      type: 'payment',
      icon: AttachMoney,
      color: '#28a745',
      title: 'Payment Received',
      description: 'Invoice #4523 paid - $12,450',
      user: 'Finance Dept',
      time: '2 hours ago',
      category: 'Finance',
    },
    {
      id: 6,
      type: 'emergency',
      icon: LocalHospital,
      color: '#dc3545',
      title: 'Emergency Admission',
      description: 'Trauma patient in ER',
      user: 'ER Staff',
      time: '3 hours ago',
      category: 'Emergency',
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Patient':
        return 'primary';
      case 'Operation':
        return 'error';
      case 'Staff':
        return 'warning';
      case 'Finance':
        return 'success';
      case 'Emergency':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">
            Recent Activity
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Last 24 hours
          </Typography>
        </Box>
        
        <List sx={{ p: 0 }}>
          {activities.map((activity, index) => (
            <Box key={activity.id}>
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
                <ListItemIcon sx={{ minWidth: 56 }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: activity.color,
                      width: 40,
                      height: 40,
                    }}
                  >
                    <activity.icon fontSize="small" />
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                      <Typography variant="subtitle2" fontWeight="600">
                        {activity.title}
                      </Typography>
                      <Chip 
                        label={activity.category} 
                        size="small" 
                        color={getCategoryColor(activity.category)}
                        sx={{ height: 20, fontSize: '0.65rem' }}
                      />
                    </Box>
                  }
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary" component="span">
                        {activity.description}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
                        <Typography variant="caption" color="text.secondary">
                          By {activity.user}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {activity.time}
                        </Typography>
                      </Box>
                    </>
                  }
                />
              </ListItem>
              {index < activities.length - 1 && (
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} />
              )}
            </Box>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
