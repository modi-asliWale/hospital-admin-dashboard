import { Grid } from '@mui/material';
import {
  LocalHospital,
  HourglassEmpty,
  LocalPharmacy,
  Hotel,
  ExitToApp,
} from '@mui/icons-material';
import Card from '../common/Card';
import { censusCounts } from '../../data/erMockData';

const CensusCounters = () => {
  const counters = [
    {
      title: 'Total Patients',
      value: censusCounts.total,
      icon: LocalHospital,
      color: 'primary',
      subtitle: 'Currently in ER',
    },
    {
      title: 'Waiting',
      value: censusCounts.waiting,
      icon: HourglassEmpty,
      color: 'warning',
      subtitle: 'Awaiting treatment',
    },
    {
      title: 'In Treatment',
      value: censusCounts.inTreatment,
      icon: LocalPharmacy,
      color: 'info',
      subtitle: 'Currently being treated',
    },
    {
      title: 'Admitted',
      value: censusCounts.admitted,
      icon: Hotel,
      color: 'success',
      subtitle: 'Awaiting bed assignment',
    },
    {
      title: 'Discharged Today',
      value: censusCounts.discharged,
      icon: ExitToApp,
      color: 'success',
      subtitle: 'Completed in last hour',
    },
  ];

  return (
    <Grid container spacing={3}>
      {counters.map((counter, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
          <Card
            title={counter.title}
            value={counter.value}
            icon={counter.icon}
            color={counter.color}
            subtitle={counter.subtitle}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CensusCounters;
