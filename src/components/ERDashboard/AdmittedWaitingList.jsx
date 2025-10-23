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
import { admittedWaitingList } from '../../data/erMockData';

const AdmittedWaitingList = () => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical':
        return 'error';
      case 'High':
        return 'warning';
      case 'Medium':
        return 'info';
      default:
        return 'default';
    }
  };

  const getWaitTimeColor = (waitTime) => {
    if (waitTime >= 120) return 'error.main';
    if (waitTime >= 60) return 'warning.main';
    return 'success.main';
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" fontWeight="600">
            Admitted Patients Waiting for Bed
          </Typography>
          <Chip 
            label={`${admittedWaitingList.length} Patients`} 
            color="primary" 
            size="small"
          />
        </Box>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Patient</TableCell>
                <TableCell>Age/Gender</TableCell>
                <TableCell>Arrival Time</TableCell>
                <TableCell>Wait Time</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Diagnosis</TableCell>
                <TableCell>Priority</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {admittedWaitingList.map((patient) => (
                <TableRow key={patient.id} hover>
                  <TableCell>
                    <Typography variant="body2" fontWeight="500">
                      {patient.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {patient.age} / {patient.gender}
                  </TableCell>
                  <TableCell>{patient.arrivalTime}</TableCell>
                  <TableCell>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: getWaitTimeColor(patient.waitTime),
                        fontWeight: 600,
                      }}
                    >
                      {patient.waitTime} min
                    </Typography>
                  </TableCell>
                  <TableCell>{patient.admittingDepartment}</TableCell>
                  <TableCell>{patient.diagnosis}</TableCell>
                  <TableCell>
                    <Chip 
                      label={patient.priority} 
                      color={getPriorityColor(patient.priority)} 
                      size="small"
                    />
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

export default AdmittedWaitingList;
