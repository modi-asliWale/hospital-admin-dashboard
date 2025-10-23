import {
  Card,
  CardContent,
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
import { erStatusBoard, acuityColors } from '../../data/erMockData';

const ERStatusBoard = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'In Treatment':
        return 'info';
      case 'Waiting':
        return 'warning';
      case 'Awaiting Admission':
        return 'success';
      case 'Waiting for Results':
        return 'default';
      case 'Waiting for X-Ray':
        return 'default';
      default:
        return 'default';
    }
  };

  const getAcuityBadge = (acuity) => {
    return (
      <Chip 
        label={`ESI ${acuity}`}
        size="small"
        sx={{
          bgcolor: acuityColors[acuity],
          color: 'white',
          fontWeight: 600,
        }}
      />
    );
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" fontWeight="600">
            ER Status Board
          </Typography>
          <Chip 
            label={`${erStatusBoard.length} Beds Occupied`} 
            color="primary" 
            size="small"
          />
        </Box>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Bed</TableCell>
                <TableCell>Patient</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Chief Complaint</TableCell>
                <TableCell>Acuity</TableCell>
                <TableCell>Arrival Time</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Provider</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {erStatusBoard.map((patient) => (
                <TableRow key={patient.id} hover>
                  <TableCell>
                    <Typography variant="body2" fontWeight="600">
                      {patient.bed}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight="500">
                      {patient.patient}
                    </Typography>
                  </TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{patient.chiefComplaint}</TableCell>
                  <TableCell>
                    {getAcuityBadge(patient.acuity)}
                  </TableCell>
                  <TableCell>{patient.arrivalTime}</TableCell>
                  <TableCell>
                    <Chip 
                      label={patient.status} 
                      color={getStatusColor(patient.status)} 
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    {patient.provider || (
                      <Typography variant="caption" color="text.secondary">
                        Not assigned
                      </Typography>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default ERStatusBoard;
