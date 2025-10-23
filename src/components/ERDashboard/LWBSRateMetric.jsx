import { Box, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import Card from '../common/Card';
import { lwbsMetrics } from '../../data/erMockData';

const LWBSRateMetric = () => {
  return (
    <Card
      title="Left Without Being Seen (LWBS)"
      value={`${lwbsMetrics.rate}%`}
      icon={ExitToApp}
      color={lwbsMetrics.rate < 5 ? 'success' : lwbsMetrics.rate < 8 ? 'warning' : 'error'}
      trend={`${lwbsMetrics.trend} from previous period`}
      trendDirection={lwbsMetrics.trendDirection}
      subtitle={`${lwbsMetrics.count} of ${lwbsMetrics.totalPatients} patients`}
    >
      <Box sx={{ mt: 2, pt: 2, borderTop: 1, borderColor: 'divider' }}>
        <Typography variant="body2" color="text.secondary">
          Previous Rate: {lwbsMetrics.previousRate}%
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Target: &lt;5%
        </Typography>
      </Box>
    </Card>
  );
};

export default LWBSRateMetric;
