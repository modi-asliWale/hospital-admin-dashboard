import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { Security, Warning } from '@mui/icons-material';
import { privacySecurityIncidentsData } from '../../data/complianceMockData';

const PrivacySecurityIncidents = () => {
  const getSeverityColor = (severity) => {
    switch (severity) {
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
      case 'Under Investigation':
        return 'warning';
      case 'Resolved':
        return 'success';
      case 'Mitigated':
        return 'info';
      default:
        return 'default';
    }
  };

  const getTypeColor = (type) => {
    return type === 'Privacy Breach' ? 'secondary' : 'primary';
  };

  return (
    <Box>
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Security color="primary" />
        <Typography variant="h5" fontWeight="600">
          Privacy & Security Incident Log
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: 'primary.main' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Date/Time</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Type</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Category</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Severity</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Department</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Description</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Affected Records</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {privacySecurityIncidentsData.map((incident) => (
              <TableRow key={incident.id} hover>
                <TableCell>
                  <Typography variant="body2" fontWeight="500">
                    {new Date(incident.date).toLocaleDateString()}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {incident.time}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip label={incident.type} color={getTypeColor(incident.type)} size="small" />
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{incident.category}</Typography>
                </TableCell>
                <TableCell>
                  <Chip label={incident.severity} color={getSeverityColor(incident.severity)} size="small" />
                </TableCell>
                <TableCell>{incident.department}</TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ maxWidth: 250 }}>
                    {incident.description}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {incident.affectedRecords > 0 && <Warning fontSize="small" color="warning" />}
                    <Typography variant="body2" fontWeight="bold">
                      {incident.affectedRecords}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip label={incident.status} color={getStatusColor(incident.status)} size="small" variant="outlined" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PrivacySecurityIncidents;
