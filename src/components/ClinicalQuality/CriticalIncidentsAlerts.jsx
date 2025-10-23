import {
  Card,
  CardContent,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Alert,
  AlertTitle,
} from '@mui/material';
import { Warning, Error, InfoOutlined } from '@mui/icons-material';
import { criticalIncidentsData, severityColors, statusColors } from '../../data/clinicalQualityMockData';

const CriticalIncidentsAlerts = () => {
  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'Critical':
        return <Error sx={{ color: severityColors.Critical }} />;
      case 'High':
        return <Warning sx={{ color: severityColors.High }} />;
      case 'Medium':
        return <InfoOutlined sx={{ color: severityColors.Medium }} />;
      default:
        return <InfoOutlined sx={{ color: severityColors.Low }} />;
    }
  };

  const activeIncidents = criticalIncidentsData.filter(
    incident => incident.status !== 'Resolved'
  );

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom fontWeight="600">
          Critical Incidents & Alerts
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Recent safety incidents and their status
        </Typography>
      </Box>

      {activeIncidents.length > 0 && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          <AlertTitle>Active Incidents</AlertTitle>
          You have {activeIncidents.length} active incident(s) requiring attention
        </Alert>
      )}

      <Card>
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date & Time</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Severity</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {criticalIncidentsData.map((incident) => (
                  <TableRow
                    key={incident.id}
                    sx={{
                      '&:hover': { bgcolor: 'action.hover' },
                      bgcolor: incident.status !== 'Resolved' ? 'action.selected' : 'inherit',
                    }}
                  >
                    <TableCell>
                      <Typography variant="body2" fontWeight="500">
                        {incident.date}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {incident.time}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {getSeverityIcon(incident.severity)}
                        <Typography variant="body2">{incident.type}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={incident.severity}
                        size="small"
                        sx={{
                          bgcolor: severityColors[incident.severity],
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{incident.department}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        {incident.description}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={incident.status}
                        size="small"
                        sx={{
                          bgcolor: statusColors[incident.status],
                          color: 'white',
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CriticalIncidentsAlerts;
