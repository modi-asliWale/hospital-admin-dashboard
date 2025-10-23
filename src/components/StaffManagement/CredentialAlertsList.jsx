import { Paper, Typography, Box, Stack, Chip, Divider } from '@mui/material';
import { credentialAlertsData } from '../../data/staffManagementMockData';

const statusColorMap = {
  Critical: 'error',
  'Action Required': 'warning',
  'Expiring Soon': 'info',
};

const formatExpiry = (days) => {
  if (days === 0) return 'Expires today';
  if (days === 1) return 'Expires in 1 day';
  return `Expires in ${days} days`;
};

const CredentialAlertsList = () => {
  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Credential & Compliance Alerts
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Upcoming expirations requiring renewal or follow-up within the next 30 days
      </Typography>

      <Stack divider={<Divider flexItem />} spacing={2}>
        {credentialAlertsData.map((alert) => (
          <Box key={alert.id} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 1 }}>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  {alert.staff}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {alert.role}
                </Typography>
              </Box>
              <Chip
                label={alert.status}
                color={statusColorMap[alert.status] || 'default'}
                size="small"
              />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
              <Typography variant="body2">
                Credential: <strong>{alert.credential}</strong>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {formatExpiry(alert.expiresInDays)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
};

export default CredentialAlertsList;
