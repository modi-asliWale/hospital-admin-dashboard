import { Grid } from '@mui/material';
import { PersonAdd, ExitToApp, SwapHoriz } from '@mui/icons-material';
import Card from '../common/Card';
import { adtSummaryData } from '../../data/patientFlowMockData';

const ADTSummary = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card
          title="Admissions"
          icon={PersonAdd}
          color="primary"
        >
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={4}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {adtSummaryData.admissions.today}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#666' }}>
                  Today
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {adtSummaryData.admissions.week}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#666' }}>
                  This Week
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {adtSummaryData.admissions.month}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#666' }}>
                  This Month
                </div>
              </div>
            </Grid>
          </Grid>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card
          title="Discharges"
          icon={ExitToApp}
          color="success"
        >
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={4}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {adtSummaryData.discharges.today}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#666' }}>
                  Today
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {adtSummaryData.discharges.week}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#666' }}>
                  This Week
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {adtSummaryData.discharges.month}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#666' }}>
                  This Month
                </div>
              </div>
            </Grid>
          </Grid>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card
          title="Transfers"
          icon={SwapHoriz}
          color="warning"
        >
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={4}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {adtSummaryData.transfers.today}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#666' }}>
                  Today
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {adtSummaryData.transfers.week}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#666' }}>
                  This Week
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {adtSummaryData.transfers.month}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#666' }}>
                  This Month
                </div>
              </div>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ADTSummary;
