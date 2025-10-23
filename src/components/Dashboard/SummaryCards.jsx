import { Grid } from '@mui/material';
import {
  LocalHospital,
  Person,
  AttachMoney,
  Hotel,
  TrendingUp,
  TrendingDown,
} from '@mui/icons-material';
import Card from '../common/Card';

const SummaryCards = () => {
  const kpis = [
    {
      title: 'Total Patients',
      value: '1,247',
      icon: LocalHospital,
      color: 'primary',
      trend: '+12.5% from last month',
      trendDirection: 'up',
      subtitle: 'Active patients in hospital',
    },
    {
      title: 'Bed Occupancy',
      value: '87%',
      icon: Hotel,
      color: 'success',
      trend: '+3% from last week',
      trendDirection: 'up',
      subtitle: 'Target: 85%',
    },
    {
      title: 'Staff on Duty',
      value: '324',
      icon: Person,
      color: 'warning',
      trend: '95% attendance',
      trendDirection: 'neutral',
      subtitle: 'Total staff: 340',
    },
    {
      title: 'Revenue Today',
      value: '$45,680',
      icon: AttachMoney,
      color: 'success',
      trend: '+8.2% from yesterday',
      trendDirection: 'up',
      subtitle: 'Daily revenue',
    },
    {
      title: 'Avg Wait Time',
      value: '23 min',
      icon: TrendingDown,
      color: 'success',
      trend: '-15% improvement',
      trendDirection: 'up',
      subtitle: 'Emergency department',
    },
    {
      title: 'Patient Satisfaction',
      value: '4.7/5',
      icon: TrendingUp,
      color: 'primary',
      trend: '+0.3 from last month',
      trendDirection: 'up',
      subtitle: 'Based on 456 reviews',
    },
  ];

  return (
    <Grid container spacing={3}>
      {kpis.map((kpi, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            title={kpi.title}
            value={kpi.value}
            icon={kpi.icon}
            color={kpi.color}
            trend={kpi.trend}
            trendDirection={kpi.trendDirection}
            subtitle={kpi.subtitle}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards;
