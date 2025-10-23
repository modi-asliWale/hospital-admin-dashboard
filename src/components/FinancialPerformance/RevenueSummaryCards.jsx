import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { TrendingUp, TrendingDown, AttachMoney, ShowChart } from '@mui/icons-material';
import { revenueSummary } from '../../data/financialMockData';

const RevenueSummaryCards = () => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercentage = (value) => {
    return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
  };

  const metrics = [
    {
      title: 'Total Monthly Revenue',
      value: formatCurrency(revenueSummary.totalRevenue),
      icon: AttachMoney,
      color: 'primary',
      trend: formatPercentage(revenueSummary.growthRate),
      trendUp: revenueSummary.growthRate > 0,
      subtitle: `vs ${formatCurrency(revenueSummary.previousMonthRevenue)} last month`,
    },
    {
      title: 'YTD Revenue',
      value: formatCurrency(revenueSummary.ytdRevenue),
      icon: ShowChart,
      color: 'success',
      trend: `${((revenueSummary.ytdRevenue / revenueSummary.targetRevenue) * 100).toFixed(1)}% of target`,
      trendUp: revenueSummary.ytdRevenue > revenueSummary.targetRevenue * 0.9,
      subtitle: `Target: ${formatCurrency(revenueSummary.targetRevenue)}`,
    },
    {
      title: 'Daily Average',
      value: formatCurrency(revenueSummary.dailyAverage),
      icon: AttachMoney,
      color: 'info',
      trend: 'per day',
      trendUp: true,
      subtitle: 'Current month average',
    },
    {
      title: 'Growth Rate',
      value: formatPercentage(revenueSummary.growthRate),
      icon: TrendingUp,
      color: 'success',
      trend: 'MoM Growth',
      trendUp: revenueSummary.growthRate > 0,
      subtitle: 'Month over month',
    },
  ];

  return (
    <Grid container spacing={3}>
      {metrics.map((metric, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            sx={{
              height: '100%',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4,
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 1,
                    bgcolor: `${metric.color}.main`,
                    color: 'white',
                    display: 'flex',
                    mr: 2,
                  }}
                >
                  <metric.icon />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {metric.title}
                </Typography>
              </Box>
              <Typography variant="h4" component="div" fontWeight="bold" gutterBottom>
                {metric.value}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {metric.trendUp ? (
                  <TrendingUp sx={{ color: 'success.main', fontSize: 20 }} />
                ) : (
                  <TrendingDown sx={{ color: 'error.main', fontSize: 20 }} />
                )}
                <Typography variant="body2" color="text.secondary">
                  {metric.trend}
                </Typography>
              </Box>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                {metric.subtitle}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RevenueSummaryCards;
