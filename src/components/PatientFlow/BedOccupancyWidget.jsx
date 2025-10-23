import { Grid } from '@mui/material';
import { Hotel, CheckCircle, Cancel, TrendingUp } from '@mui/icons-material';
import Card from '../common/Card';
import { bedOccupancyData } from '../../data/patientFlowMockData';

const BedOccupancyWidget = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          title="Total Beds"
          value={bedOccupancyData.total}
          icon={Hotel}
          color="primary"
          subtitle="Hospital capacity"
        />
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Card
          title="Occupied Beds"
          value={bedOccupancyData.occupied}
          icon={Cancel}
          color="error"
          subtitle={`${bedOccupancyData.occupancyRate}% occupancy`}
        />
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Card
          title="Available Beds"
          value={bedOccupancyData.available}
          icon={CheckCircle}
          color="success"
          subtitle="Ready for patients"
        />
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Card
          title="Occupancy Rate"
          value={`${bedOccupancyData.occupancyRate}%`}
          icon={TrendingUp}
          color="warning"
          trend={bedOccupancyData.trend}
          trendDirection={bedOccupancyData.trendDirection}
          subtitle="From last week"
        />
      </Grid>
    </Grid>
  );
};

export default BedOccupancyWidget;
