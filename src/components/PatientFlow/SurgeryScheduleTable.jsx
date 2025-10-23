import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Box,
} from '@mui/material';
import { LocalHospital } from '@mui/icons-material';
import { surgeryScheduleData } from '../../data/patientFlowMockData';

const SurgeryScheduleTable = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress':
        return 'warning';
      case 'Scheduled':
        return 'info';
      case 'Completed':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <LocalHospital color="primary" sx={{ fontSize: 32 }} />
        <Box>
          <Typography variant="h6">
            Surgery Schedule
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Today&apos;s surgical procedures
          </Typography>
        </Box>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Time</strong></TableCell>
              <TableCell><strong>Patient</strong></TableCell>
              <TableCell><strong>Procedure</strong></TableCell>
              <TableCell><strong>Surgeon</strong></TableCell>
              <TableCell><strong>Room</strong></TableCell>
              <TableCell><strong>Duration</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {surgeryScheduleData.map((surgery) => (
              <TableRow
                key={surgery.id}
                sx={{
                  '&:hover': { bgcolor: 'action.hover' },
                }}
              >
                <TableCell>{surgery.time}</TableCell>
                <TableCell>{surgery.patient}</TableCell>
                <TableCell>{surgery.procedure}</TableCell>
                <TableCell>{surgery.surgeon}</TableCell>
                <TableCell>
                  <Chip
                    label={surgery.room}
                    size="small"
                    variant="outlined"
                    color="primary"
                  />
                </TableCell>
                <TableCell>{surgery.duration}</TableCell>
                <TableCell>
                  <Chip
                    label={surgery.status}
                    size="small"
                    color={getStatusColor(surgery.status)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default SurgeryScheduleTable;
