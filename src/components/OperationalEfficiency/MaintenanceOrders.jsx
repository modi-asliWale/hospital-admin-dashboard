import { Grid, Card, CardContent, Typography, Box, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, LinearProgress } from '@mui/material';
import { Build, Error, Warning, CheckCircle } from '@mui/icons-material';
import Chart from '../common/Chart';
import { maintenanceOrdersData, priorityColors } from '../../data/operationalEfficiencyMockData';

const MaintenanceOrders = () => {
  const { summary, byPriority, byDepartment, recent } = maintenanceOrdersData;

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'Critical':
        return <Error sx={{ fontSize: 18, color: priorityColors.Critical }} />;
      case 'High':
        return <Warning sx={{ fontSize: 18, color: priorityColors.High }} />;
      default:
        return <CheckCircle sx={{ fontSize: 18, color: priorityColors[priority] }} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'In Progress':
        return 'info';
      case 'Pending':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Build sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6" fontWeight="600">
          Maintenance Orders
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Total Orders
              </Typography>
              <Typography variant="h3" fontWeight="bold" color="primary.main">
                {summary.total}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Pending
              </Typography>
              <Typography variant="h3" fontWeight="bold" color="warning.main">
                {summary.pending}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                In Progress
              </Typography>
              <Typography variant="h3" fontWeight="bold" color="info.main">
                {summary.inProgress}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Completed
              </Typography>
              <Typography variant="h3" fontWeight="bold" color="success.main">
                {summary.completed}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    Completion Rate
                  </Typography>
                  <Typography variant="caption" fontWeight="600">
                    {summary.completionRate}%
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={summary.completionRate} 
                  color="success"
                  sx={{ height: 6, borderRadius: 3 }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="600">
                Orders by Priority
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                {byPriority.map((item) => (
                  <Box 
                    key={item.priority}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      p: 2,
                      bgcolor: 'background.default',
                      borderRadius: 2,
                      borderLeft: `4px solid ${priorityColors[item.priority]}`,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {getPriorityIcon(item.priority)}
                      <Typography variant="body1" fontWeight="600">
                        {item.priority}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="h6" fontWeight="bold">
                        {item.count}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Avg: {item.avgTime}h
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Chart
            title="Orders by Department"
            type="bar"
            data={byDepartment}
            dataKey="count"
            xKey="department"
            colors={['#0056b3']}
            height={320}
          />
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="600">
                Recent Maintenance Orders
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Work Order ID</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Priority</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Created</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recent.map((order) => (
                      <TableRow key={order.id} hover>
                        <TableCell>
                          <Typography variant="body2" fontWeight="600">
                            {order.id}
                          </Typography>
                        </TableCell>
                        <TableCell>{order.description}</TableCell>
                        <TableCell>
                          <Chip 
                            label={order.priority}
                            size="small"
                            sx={{
                              bgcolor: `${priorityColors[order.priority]}20`,
                              color: priorityColors[order.priority],
                              fontWeight: 600,
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Chip 
                            label={order.status}
                            size="small"
                            color={getStatusColor(order.status)}
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" color="text.secondary">
                            {order.created}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MaintenanceOrders;
