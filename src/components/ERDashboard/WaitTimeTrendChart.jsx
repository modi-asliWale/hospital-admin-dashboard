import Chart from '../common/Chart';
import { waitTimeTrendData } from '../../data/erMockData';

const WaitTimeTrendChart = () => {
  return (
    <Chart
      title="Wait Time Trend (24 Hours)"
      type="area"
      data={waitTimeTrendData}
      dataKey="waitTime"
      xKey="time"
      colors={['#0056b3']}
      height={300}
    />
  );
};

export default WaitTimeTrendChart;
