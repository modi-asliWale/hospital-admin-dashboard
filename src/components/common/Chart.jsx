import { useMemo, useId } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useTheme } from '@mui/material/styles';

const Chart = ({
  title,
  type = 'line',
  data = [],
  dataKey,
  xKey = 'name',
  colors = ['#0056b3', '#28a745', '#ffc107', '#dc3545'],
  height = 300,
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const chartTitleId = useId();
  const chartDescriptionId = useId();

  const hasData = Array.isArray(data) && data.length > 0;

  const chartDescription = useMemo(() => {
    if (!hasData) {
      return 'No data available for the selected filters.';
    }

    const pointCount = data.length;
    const readableDataKey = dataKey
      ? dataKey.replace(/([A-Z])/g, ' $1').toLowerCase().trim()
      : 'data values';
    const readableXKey = xKey
      ? xKey.replace(/([A-Z])/g, ' $1').toLowerCase().trim()
      : 'categories';
    const pluralizedPoints = pointCount === 1 ? 'point' : 'points';

    return `This ${type} chart visualizes ${readableDataKey} across ${pointCount} data ${pluralizedPoints} grouped by ${readableXKey}.`;
  }, [data, dataKey, hasData, type, xKey]);

  const chartLabel = title ? `${title} chart` : 'Data visualization';

  const renderChart = () => {
    const commonProps = {
      data,
      margin: { top: 5, right: 30, left: 20, bottom: 5 },
    };

    switch (type) {
      case 'line':
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#444' : '#ccc'} />
            <XAxis dataKey={xKey} stroke={theme.palette.text.secondary} />
            <YAxis stroke={theme.palette.text.secondary} />
            <Tooltip
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 4,
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={colors[0]}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        );

      case 'bar':
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#444' : '#ccc'} />
            <XAxis dataKey={xKey} stroke={theme.palette.text.secondary} />
            <YAxis stroke={theme.palette.text.secondary} />
            <Tooltip
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 4,
              }}
            />
            <Legend />
            <Bar dataKey={dataKey} fill={colors[0]} radius={[8, 8, 0, 0]} />
          </BarChart>
        );

      case 'area':
        return (
          <AreaChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#444' : '#ccc'} />
            <XAxis dataKey={xKey} stroke={theme.palette.text.secondary} />
            <YAxis stroke={theme.palette.text.secondary} />
            <Tooltip
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 4,
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={colors[0]}
              fill={colors[0]}
              fillOpacity={0.6}
            />
          </AreaChart>
        );

      case 'pie':
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey={dataKey}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 4,
              }}
            />
          </PieChart>
        );

      default:
        return null;
    }
  };

  if (!hasData) {
    return (
      <Card component="section" role="region" aria-labelledby={title ? chartTitleId : undefined}>
        <CardContent>
          {title && (
            <Typography id={chartTitleId} variant="h6" gutterBottom>
              {title}
            </Typography>
          )}
          <Typography id={chartDescriptionId} sx={visuallyHidden}>
            {chartDescription}
          </Typography>
          <Typography variant="body2" color="text.secondary" role="status">
            {chartDescription}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card component="section" role="region" aria-labelledby={title ? chartTitleId : undefined}>
      <CardContent>
        {title && (
          <Typography id={chartTitleId} variant="h6" gutterBottom>
            {title}
          </Typography>
        )}
        <Typography id={chartDescriptionId} sx={visuallyHidden}>
          {chartDescription}
        </Typography>
        <Box
          sx={{
            width: '100%',
            height,
            outline: 'none',
            '&:focus-visible': {
              boxShadow: (themeArg) => `0 0 0 2px ${themeArg.palette.primary.main}`,
              borderRadius: 4,
            },
          }}
          role="img"
          aria-label={chartLabel}
          aria-describedby={chartDescriptionId}
          tabIndex={0}
        >
          <ResponsiveContainer width="100%" height="100%">
            {renderChart()}
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Chart;
