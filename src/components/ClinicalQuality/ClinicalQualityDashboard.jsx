import { Box, Typography, Container, Grid, Divider } from '@mui/material';
import SafetyScorecards from './SafetyScorecards';
import InfectionRatesWidget from './InfectionRatesWidget';
import InfectionTrendsChart from './InfectionTrendsChart';
import ReadmissionBenchmarks from './ReadmissionBenchmarks';
import MortalityBenchmarks from './MortalityBenchmarks';
import MortalityTrendsChart from './MortalityTrendsChart';
import SatisfactionScores from './SatisfactionScores';
import SatisfactionTrendsChart from './SatisfactionTrendsChart';
import ComplianceMetrics from './ComplianceMetrics';
import QualityComparisonChart from './QualityComparisonChart';
import CriticalIncidentsAlerts from './CriticalIncidentsAlerts';
import IncidentTrendsChart from './IncidentTrendsChart';

const ClinicalQualityDashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          Clinical Quality & Safety
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Monitor safety metrics, infection rates, patient outcomes, and compliance standards
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <SafetyScorecards />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <InfectionRatesWidget />
      </Box>

      <Box sx={{ mb: 4 }}>
        <InfectionTrendsChart />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <ReadmissionBenchmarks />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <MortalityBenchmarks />
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <MortalityTrendsChart />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <SatisfactionScores />
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <SatisfactionTrendsChart />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <ComplianceMetrics />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <QualityComparisonChart />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <CriticalIncidentsAlerts />
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <IncidentTrendsChart />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ClinicalQualityDashboard;
