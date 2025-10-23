import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, LinearProgress } from '@mui/material';
import { CalendarToday, Event } from '@mui/icons-material';
import { regulatoryDeadlinesData } from '../../data/complianceMockData';

const RegulatoryDeadlines = () => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical':
        return 'error';
      case 'High':
        return 'warning';
      case 'Medium':
        return 'info';
      case 'Low':
        return 'success';
      default:
        return 'default';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Not Started':
        return 'error';
      case 'In Progress':
        return 'info';
      case 'Ready for Review':
        return 'warning';
      case 'Completed':
        return 'success';
      default:
        return 'default';
    }
  };

  const getDaysColor = (days) => {
    if (days <= 14) return 'error.main';
    if (days <= 30) return 'warning.main';
    return 'success.main';
  };

  return (
    <Box>
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
        <CalendarToday color="primary" />
        <Typography variant="h5" fontWeight="600">
          Regulatory Deadlines Calendar
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: 'primary.main' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Task</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Due Date</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Days Left</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Priority</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Owner</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Progress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {regulatoryDeadlinesData.map((deadline) => (
              <TableRow key={deadline.id} hover>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Event fontSize="small" color="action" />
                    <Typography variant="body2" fontWeight="500">
                      {deadline.title}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{new Date(deadline.dueDate).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Typography variant="body2" fontWeight="bold" color={getDaysColor(deadline.daysRemaining)}>
                    {deadline.daysRemaining} days
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip label={deadline.priority} color={getPriorityColor(deadline.priority)} size="small" />
                </TableCell>
                <TableCell>
                  <Chip label={deadline.status} color={getStatusColor(deadline.status)} size="small" variant="outlined" />
                </TableCell>
                <TableCell>{deadline.owner}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 120 }}>
                    <LinearProgress
                      variant="determinate"
                      value={deadline.completionRate}
                      sx={{
                        flexGrow: 1,
                        height: 8,
                        borderRadius: 4,
                        '& .MuiLinearProgress-bar': {
                          bgcolor: deadline.completionRate >= 80 ? 'success.main' : deadline.completionRate >= 50 ? 'warning.main' : 'error.main',
                        },
                      }}
                    />
                    <Typography variant="caption" fontWeight="bold">
                      {deadline.completionRate}%
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RegulatoryDeadlines;
