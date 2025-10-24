import { useMemo, useState } from 'react';
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
import { useFilters } from '../../context/FilterContext';

const PatientLists = () => {
  const [activeTab, setActiveTab] = useState(0);
  const {
    filters: { department, shift, date, search },
  } = useFilters();

  const applyFilters = (records, dateKey) => {
    const normalizedSearch = search.trim().toLowerCase();

    return records.filter((record) => {
      const matchesDepartment =
        department === 'All Departments' || record.department === department;
      const matchesShift =
        shift === 'All Shifts' || !record.shift || record.shift === shift;
      const recordDate = record.date || (dateKey ? record[dateKey] : undefined);
      const matchesDate = !date || (recordDate && recordDate === date);
      const searchable = [
        record.name,
        record.diagnosis,
        record.doctor,
        record.condition,
        record.priority,
        record.room,
      ];
      const matchesSearch =
        !normalizedSearch ||
        searchable
          .filter(Boolean)
          .some((value) => value.toString().toLowerCase().includes(normalizedSearch));

      return matchesDepartment && matchesShift && matchesDate && matchesSearch;
    });
  };

  const admittedPatients = useMemo(
    () => applyFilters(patientListsData.admitted, 'admitDate'),
    [department, shift, date, search],
  );

  const dischargedPatients = useMemo(
    () => applyFilters(patientListsData.discharged, 'dischargeDate'),
    [department, shift, date, search],
  );

  const pendingPatients = useMemo(
    () => applyFilters(patientListsData.pending, 'date'),
    [department, shift, date, search],
  );

  const tabCounts = [
    admittedPatients.length,
    dischargedPatients.length,
    pendingPatients.length,
  ];

  const a11yProps = (index) => ({
    id: `patient-tab-${index}`,
    'aria-controls': `patient-tabpanel-${index}`,
  });

  const renderEmptyState = (message) => (
    <Box role="status" aria-live="polite" sx={{ py: 4, textAlign: 'center' }}>
      <Typography variant="body1" fontWeight={600} gutterBottom>
        {message}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Try modifying the global filters above.
      </Typography>
    </Box>
  );

  const renderDepartmentCell = (record) => (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      <Chip label={record.department} size="small" variant="outlined" color="primary" />
      {record.shift && (
        <Chip label={`${record.shift} shift`} size="small" variant="outlined" />
      )}
    </Box>
  );

  const renderAdmittedPatients = () => {
    if (admittedPatients.length === 0) {
      return renderEmptyState('No admitted patients match the current filters.');
    }

    return (
      <TableContainer sx={{ maxHeight: { xs: 360, md: 'none' } }}>
        <Table aria-label="Admitted patients" size="small" stickyHeader={admittedPatients.length > 8}>
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
            {admittedPatients.map((patient) => (
              <TableRow key={patient.id} hover>
                <TableCell>{patient.name}</TableCell>
                <TableCell>
                  {patient.age} / {patient.gender}
                </TableCell>
                <TableCell>
                  <Chip label={patient.room} size="small" variant="outlined" color="primary" />
                </TableCell>
                <TableCell>{renderDepartmentCell(patient)}</TableCell>
                <TableCell>{patient.admitDate}</TableCell>
                <TableCell>{patient.diagnosis}</TableCell>
                <TableCell>{patient.doctor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderDischargedPatients = () => {
    if (dischargedPatients.length === 0) {
      return renderEmptyState('No discharged patients match the current filters.');
    }

    return (
      <TableContainer sx={{ maxHeight: { xs: 360, md: 'none' } }}>
        <Table aria-label="Discharged patients" size="small" stickyHeader={dischargedPatients.length > 8}>
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
            {dischargedPatients.map((patient) => (
              <TableRow key={patient.id} hover>
                <TableCell>{patient.name}</TableCell>
                <TableCell>
                  {patient.age} / {patient.gender}
                </TableCell>
                <TableCell>
                  <Chip label={patient.room} size="small" variant="outlined" />
                </TableCell>
                <TableCell>{renderDepartmentCell(patient)}</TableCell>
                <TableCell>{patient.dischargeDate}</TableCell>
                <TableCell>{patient.diagnosis}</TableCell>
                <TableCell>{patient.doctor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderPendingPatients = () => {
    if (pendingPatients.length === 0) {
      return renderEmptyState('No pending patients match the current filters.');
    }

    return (
      <TableContainer sx={{ maxHeight: { xs: 360, md: 'none' } }}>
        <Table aria-label="Pending patients" size="small" stickyHeader={pendingPatients.length > 8}>
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
            {pendingPatients.map((patient) => (
              <TableRow key={patient.id} hover>
                <TableCell>{patient.name}</TableCell>
                <TableCell>
                  {patient.age} / {patient.gender}
                </TableCell>
                <TableCell>{renderDepartmentCell(patient)}</TableCell>
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
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Paper component="section" sx={{ p: 3 }} aria-labelledby="patient-lists-heading">
      <Typography id="patient-lists-heading" variant="h6" gutterBottom>
        Patient Lists
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="Patient status tabs"
          variant="scrollable"
          allowScrollButtonsMobile
        >
          <Tab
            icon={<Person />}
            iconPosition="start"
            label={`Admitted (${tabCounts[0]})`}
            {...a11yProps(0)}
          />
          <Tab
            icon={<ExitToApp />}
            iconPosition="start"
            label={`Discharged (${tabCounts[1]})`}
            {...a11yProps(1)}
          />
          <Tab
            icon={<HourglassEmpty />}
            iconPosition="start"
            label={`Pending (${tabCounts[2]})`}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>

      <Box
        role="tabpanel"
        hidden={activeTab !== 0}
        id="patient-tabpanel-0"
        aria-labelledby="patient-tab-0"
      >
        {activeTab === 0 && renderAdmittedPatients()}
      </Box>
      <Box
        role="tabpanel"
        hidden={activeTab !== 1}
        id="patient-tabpanel-1"
        aria-labelledby="patient-tab-1"
      >
        {activeTab === 1 && renderDischargedPatients()}
      </Box>
      <Box
        role="tabpanel"
        hidden={activeTab !== 2}
        id="patient-tabpanel-2"
        aria-labelledby="patient-tab-2"
      >
        {activeTab === 2 && renderPendingPatients()}
      </Box>
    </Paper>
  );
};

export default PatientLists;
