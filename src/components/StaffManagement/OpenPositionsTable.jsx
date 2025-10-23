import { Paper, Typography, Table, TableHead, TableRow, TableCell, TableBody, Chip, Box } from '@mui/material';
import { openPositionsData } from '../../data/staffManagementMockData';

const urgencyColorMap = {
  Critical: 'error',
  High: 'warning',
  Medium: 'info',
  Low: 'default',
};

const OpenPositionsTable = () => {
  const totalOpenings = openPositionsData.reduce((acc, item) => acc + item.openings, 0);

  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', gap: 1.5, mb: 3 }}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Open Positions & Vacancies
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Recruiting pipeline status with urgency indicators by role and department
          </Typography>
        </Box>
        <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
          <Typography variant="subtitle2" color="text.secondary">
            Total Openings
          </Typography>
          <Typography variant="h5" fontWeight={600}>
            {totalOpenings}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ overflowX: 'auto' }}>
        <Table size="small" sx={{ minWidth: 520 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Department</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Shift</TableCell>
              <TableCell align="center" sx={{ fontWeight: 600 }}>Openings</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Urgency</TableCell>
              <TableCell align="right" sx={{ fontWeight: 600 }}>Days Open</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {openPositionsData.map((position) => (
              <TableRow key={position.id} hover>
                <TableCell>{position.role}</TableCell>
                <TableCell>{position.department}</TableCell>
                <TableCell>{position.shift}</TableCell>
                <TableCell align="center">{position.openings}</TableCell>
                <TableCell>
                  <Chip
                    label={position.urgency}
                    color={urgencyColorMap[position.urgency] || 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell align="right">{position.daysOpen}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
};

export default OpenPositionsTable;
