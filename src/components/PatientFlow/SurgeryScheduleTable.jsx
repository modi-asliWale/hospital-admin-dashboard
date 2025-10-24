import { useMemo } from 'react';
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
import { useFilters } from '../../context/FilterContext';

const SurgeryScheduleTable = () => {
  const {
    filters: { department, shift, date, search },
  } = useFilters();

  const filteredSurgeries = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return surgeryScheduleData.filter((surgery) => {
      const matchesDepartment =
        department === 'All Departments' || surgery.department === department;
      const matchesShift = shift === 'All Shifts' || surgery.shift === shift;
      const matchesDate = !date || surgery.date === date;
      const matchesSearch =
        !normalizedSearch ||
        [surgery.patient, surgery.procedure, surgery.surgeon, surgery.status, surgery.room]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(normalizedSearch));

      return matchesDepartment && matchesShift && matchesDate && matchesSearch;
    });
  }, [date, department, search, shift]);

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
    <Paper component="section" sx={{ p: 3 }} aria-labelledby="surgery-schedule-heading">
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <LocalHospital color="primary" sx={{ fontSize: 32 }} aria-hidden="true" />
        <Box>
          <Typography id="surgery-schedule-heading" variant="h6">
            Surgery Schedule
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Today&apos;s surgical procedures filtered by your selections
          </Typography>
        </Box>
      </Box>

      {filteredSurgeries.length === 0 ? (
        <Box role="status" aria-live="polite" sx={{ py: 4, textAlign: 'center' }}>
          <Typography variant="body1" fontWeight={600} gutterBottom>
            No surgeries match the current filters.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Adjust the filters above to see additional procedures.
          </Typography>
        </Box>
      ) : (
        <TableContainer>
          <Table aria-label="Surgery schedule" size="small">
            <TableHead>
              <TableRow>
                <TableCell><strong>Time</strong></TableCell>
                <TableCell><strong>Patient</strong></TableCell>
                <TableCell><strong>Procedure</strong></TableCell>
                <TableCell><strong>Surgeon</strong></TableCell>
                <TableCell><strong>Department</strong></TableCell>
                <TableCell><strong>Room</strong></TableCell>
                <TableCell><strong>Shift / Date</strong></TableCell>
                <TableCell><strong>Duration</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSurgeries.map((surgery) => (
                <TableRow
                  key={surgery.id}
                  hover
                  sx={{
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  <TableCell>{surgery.time}</TableCell>
                  <TableCell>{surgery.patient}</TableCell>
                  <TableCell>{surgery.procedure}</TableCell>
                  <TableCell>{surgery.surgeon}</TableCell>
                  <TableCell>
                    <Chip label={surgery.department} size="small" variant="outlined" color="primary" />
                  </TableCell>
                  <TableCell>
                    <Chip label={surgery.room} size="small" variant="outlined" color="primary" />
                  </TableCell>
                  <TableCell>
                    <Chip label={`${surgery.shift} shift`} size="small" variant="outlined" />
                    <Typography variant="caption" color="text.secondary" display="block">
                      {surgery.date}
                    </Typography>
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
      )}
    </Paper>
  );
};

export default SurgeryScheduleTable;
