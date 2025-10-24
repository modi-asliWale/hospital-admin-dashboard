import { useMemo } from 'react';
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
import { useFilters } from '../../context/FilterContext';

const ActivityFeed = () => {
  const activities = useMemo(
    () => [
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
        department: 'General Ward',
        shift: 'Morning',
        date: '2024-01-23',
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
        department: 'ICU',
        shift: 'Morning',
        date: '2024-01-23',
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
        department: 'Surgery',
        shift: 'Afternoon',
        date: '2024-01-23',
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
        department: 'Emergency',
        shift: 'Night',
        date: '2024-01-23',
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
        department: 'Finance',
        shift: 'Afternoon',
        date: '2024-01-22',
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
        department: 'Emergency',
        shift: 'Night',
        date: '2024-01-23',
      },
    ],
    [],
  );

  const {
    filters: { department, shift, date, search },
  } = useFilters();

  const filteredActivities = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return activities.filter((activity) => {
      const matchesDepartment =
        department === 'All Departments' || activity.department === department;
      const matchesShift = shift === 'All Shifts' || activity.shift === shift;
      const matchesDate = !date || activity.date === date;
      const matchesSearch =
        !normalizedSearch ||
        [activity.title, activity.description, activity.user, activity.category]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(normalizedSearch));

      return matchesDepartment && matchesShift && matchesDate && matchesSearch;
    });
  }, [activities, date, department, search, shift]);

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
          <Typography variant="h6">Recent Activity</Typography>
          <Typography variant="body2" color="text.secondary">
            Last 24 hours
          </Typography>
        </Box>

        {filteredActivities.length === 0 ? (
          <Box role="status" aria-live="polite" sx={{ py: 6, textAlign: 'center' }}>
            <Typography variant="body1" fontWeight={600} gutterBottom>
              No activity found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try adjusting your filters or search query.
            </Typography>
          </Box>
        ) : (
          <List component="ul" aria-label="Recent activity feed" sx={{ p: 0 }}>
            {filteredActivities.map((activity, index) => (
              <Box key={activity.id}>
                <ListItem
                  component="li"
                  tabIndex={0}
                  sx={{
                    px: 0,
                    py: 2,
                    alignItems: 'flex-start',
                    '&:hover': {
                      bgcolor: 'action.hover',
                      borderRadius: 1,
                    },
                    '&:focus-visible': {
                      outline: '2px solid',
                      outlineColor: 'primary.main',
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
                      <activity.icon fontSize="small" aria-hidden="true" />
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 0.5 }}>
                        <Typography variant="subtitle2" fontWeight="600">
                          {activity.title}
                        </Typography>
                        <Chip
                          label={activity.category}
                          size="small"
                          color={getCategoryColor(activity.category)}
                          sx={{ height: 20, fontSize: '0.65rem' }}
                        />
                        <Chip
                          label={activity.department}
                          size="small"
                          variant="outlined"
                          sx={{ height: 20, fontSize: '0.65rem' }}
                        />
                      </Box>
                    }
                    secondary={
                      <>
                        <Typography variant="body2" color="text.secondary" component="span">
                          {activity.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', gap: 1, mt: 0.75 }}>
                          <Typography variant="caption" color="text.secondary">
                            By {activity.user}
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                            <Typography variant="caption" color="text.secondary">
                              {activity.time}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              Shift: {activity.shift}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              Date: {activity.date}
                            </Typography>
                          </Box>
                        </Box>
                      </>
                    }
                  />
                </ListItem>
                {index < filteredActivities.length - 1 && (
                  <Box
                    component="span"
                    role="presentation"
                    aria-hidden="true"
                    sx={{ display: 'block', borderBottom: 1, borderColor: 'divider' }}
                  />
                )}
              </Box>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
