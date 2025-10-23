import { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import { Person, ExitToApp, HourglassEmpty } from '@mui/icons-material';
import { patientListsData } from '../../data/patientFlowMockData';

const PatientLists = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderAdmittedPatients = () => (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Age/Gender</strong></TableCell>
            <TableCell><strong>Room</strong></TableCell>
            <TableCell><strong>Department</strong></TableCell>
            <TableCell><strong>Admit Date</strong></TableCell>
            <TableCell><strong>Diagnosis</strong></TableCell>
            <TableCell><strong>Doctor</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientListsData.admitted.map((patient) => (
            <TableRow key={patient.id} sx={{ '&:hover': { bgcolor: 'action.hover' } }}>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.age} / {patient.gender}</TableCell>
              <TableCell>
                <Chip label={patient.room} size="small" variant="outlined" color="primary" />
              </TableCell>
              <TableCell>{patient.department}</TableCell>
              <TableCell>{patient.admitDate}</TableCell>
              <TableCell>{patient.diagnosis}</TableCell>
              <TableCell>{patient.doctor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const renderDischargedPatients = () => (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Age/Gender</strong></TableCell>
            <TableCell><strong>Room</strong></TableCell>
            <TableCell><strong>Department</strong></TableCell>
            <TableCell><strong>Discharge Date</strong></TableCell>
            <TableCell><strong>Diagnosis</strong></TableCell>
            <TableCell><strong>Doctor</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientListsData.discharged.map((patient) => (
            <TableRow key={patient.id} sx={{ '&:hover': { bgcolor: 'action.hover' } }}>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.age} / {patient.gender}</TableCell>
              <TableCell>
                <Chip label={patient.room} size="small" variant="outlined" />
              </TableCell>
              <TableCell>{patient.department}</TableCell>
              <TableCell>{patient.dischargeDate}</TableCell>
              <TableCell>{patient.diagnosis}</TableCell>
              <TableCell>{patient.doctor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const renderPendingPatients = () => (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Age/Gender</strong></TableCell>
            <TableCell><strong>Department</strong></TableCell>
            <TableCell><strong>Wait Time</strong></TableCell>
            <TableCell><strong>Priority</strong></TableCell>
            <TableCell><strong>Condition</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientListsData.pending.map((patient) => (
            <TableRow key={patient.id} sx={{ '&:hover': { bgcolor: 'action.hover' } }}>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.age} / {patient.gender}</TableCell>
              <TableCell>{patient.department}</TableCell>
              <TableCell>{patient.waitTime}</TableCell>
              <TableCell>
                <Chip
                  label={patient.priority}
                  size="small"
                  color={
                    patient.priority === 'Critical'
                      ? 'error'
                      : patient.priority === 'High'
                      ? 'warning'
                      : 'info'
                  }
                />
              </TableCell>
              <TableCell>{patient.condition}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Patient Lists
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab
            icon={<Person />}
            iconPosition="start"
            label={`Admitted (${patientListsData.admitted.length})`}
          />
          <Tab
            icon={<ExitToApp />}
            iconPosition="start"
            label={`Discharged (${patientListsData.discharged.length})`}
          />
          <Tab
            icon={<HourglassEmpty />}
            iconPosition="start"
            label={`Pending (${patientListsData.pending.length})`}
          />
        </Tabs>
      </Box>

      <Box sx={{ mt: 2 }}>
        {activeTab === 0 && renderAdmittedPatients()}
        {activeTab === 1 && renderDischargedPatients()}
        {activeTab === 2 && renderPendingPatients()}
      </Box>
    </Paper>
  );
};

export default PatientLists;
