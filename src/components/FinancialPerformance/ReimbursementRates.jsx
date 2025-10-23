import { Card, CardContent, Typography, Box, Grid, LinearProgress } from '@mui/material';
import { reimbursementRates } from '../../data/financialMockData';

const ReimbursementRates = () => {
  const payers = [
    { name: 'Medicare', rate: reimbursementRates.medicare, color: 'primary' },
    { name: 'Medicaid', rate: reimbursementRates.medicaid, color: 'info' },
    { name: 'Private Insurance', rate: reimbursementRates.privateInsurance, color: 'success' },
    { name: 'Self-Pay', rate: reimbursementRates.selfPay, color: 'warning' },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Reimbursement Rates by Payer
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: 'action.hover',
              mb: 3,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Overall Reimbursement Rate
            </Typography>
            <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
              {reimbursementRates.overall}%
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: reimbursementRates.overall > reimbursementRates.previousOverall ? 'success.main' : 'error.main' }}
            >
              {reimbursementRates.overall > reimbursementRates.previousOverall ? '▲' : '▼'}{' '}
              {Math.abs(reimbursementRates.overall - reimbursementRates.previousOverall).toFixed(1)}% vs last month
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {payers.map((payer, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      {payer.name}
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {payer.rate}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={payer.rate}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      bgcolor: 'action.hover',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: `${payer.color}.main`,
                        borderRadius: 4,
                      },
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReimbursementRates;
