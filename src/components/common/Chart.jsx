import PropTypes from 'prop-types'
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Tooltip
} from 'chart.js'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Tooltip
)

const chartComponents = {
  line: Line,
  bar: Bar,
  doughnut: Doughnut
}

const baseOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        boxWidth: 10,
        font: {
          family: 'Inter, sans-serif'
        }
      }
    },
    tooltip: {
      backgroundColor: '#0f172a',
      borderColor: '#1e293b',
      borderWidth: 1
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      ticks: {
        precision: 0
      }
    }
  }
}

const Chart = ({ type = 'line', data, options, height = 280 }) => {
  const ChartComponent = chartComponents[type]

  if (!ChartComponent) {
    throw new Error(`Unsupported chart type: ${type}`)
  }

  return (
    <div className="chart-wrapper" style={{ height }}>
      <ChartComponent data={data} options={{ ...baseOptions, ...options }} />
    </div>
  )
}

Chart.propTypes = {
  type: PropTypes.oneOf(['line', 'bar', 'doughnut']),
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  height: PropTypes.number
}

export default Chart
