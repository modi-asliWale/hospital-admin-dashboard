import { Box, Typography, Container, Grid, Divider } from '@mui/material';
import CoreMeasureScorecards from './CoreMeasureScorecards';
import DocumentationCompletion from './DocumentationCompletion';
import RegulatoryDeadlines from './RegulatoryDeadlines';
import ConsentCompliance from './ConsentCompliance';
import PrivacySecurityIncidents from './PrivacySecurityIncidents';
import AccreditationReadiness from './AccreditationReadiness';
import ComplianceTrendsChart from './ComplianceTrendsChart';
import AuditReadiness from './AuditReadiness';
import IncidentTypesChart from './IncidentTypesChart';

const ComplianceDashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          Compliance & Regulatory
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Monitor compliance measures, regulatory requirements, and accreditation readiness
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <CoreMeasureScorecards />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <DocumentationCompletion />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <RegulatoryDeadlines />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <ConsentCompliance />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <AccreditationReadiness />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <AuditReadiness />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <ComplianceTrendsChart />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <PrivacySecurityIncidents />
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <IncidentTypesChart />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ComplianceDashboard;
