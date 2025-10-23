import { Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow, Box, Stack, Chip } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { shiftCoverageHeatMapData, shiftCoverageDepartments } from '../../data/staffManagementMockData';

const getCoverageStyle = (theme, value) => {
  if (value >= 95) {
    return {
      bgcolor: alpha(theme.palette.success.main, theme.palette.mode === 'dark' ? 0.35 : 0.18),
      color: theme.palette.success.contrastText,
    };
  }

  if (value >= 90) {
    return {
      bgcolor: alpha(theme.palette.success.main, theme.palette.mode === 'dark' ? 0.28 : 0.12),
      color: theme.palette.text.primary,
    };
  }

  if (value >= 85) {
    return {
      bgcolor: alpha(theme.palette.warning.main, theme.palette.mode === 'dark' ? 0.35 : 0.18),
      color: theme.palette.text.primary,
    };
  }

  return {
    bgcolor: alpha(theme.palette.error.main, theme.palette.mode === 'dark' ? 0.4 : 0.2),
    color: theme.palette.error.contrastText,
  };
};

const ShiftCoverageHeatMap = () => {
  const theme = useTheme();

  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 2, mb: 3 }}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Shift Coverage Heat Map
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Percentage of required hours filled for each shift across departments (target ≥ 95%)
          </Typography>
        </Box>
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
          <Chip size="small" label="≥ 95%" sx={{ bgcolor: alpha(theme.palette.success.main, 0.25) }} />
          <Chip size="small" label="90-94%" sx={{ bgcolor: alpha(theme.palette.success.main, 0.15) }} />
          <Chip size="small" label="85-89%" sx={{ bgcolor: alpha(theme.palette.warning.main, 0.25) }} />
          <Chip size="small" label="< 85%" sx={{ bgcolor: alpha(theme.palette.error.main, 0.25), color: theme.palette.getContrastText(theme.palette.error.main) }} />
        </Stack>
      </Box>

      <Box sx={{ overflowX: 'auto' }}>
        <Table size="small" sx={{ minWidth: 720 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Shift</TableCell>
              {shiftCoverageDepartments.map(({ key, label }) => (
                <TableCell key={key} align="center" sx={{ fontWeight: 600 }}>
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {shiftCoverageHeatMapData.map((row) => (
              <TableRow key={row.shift}>
                <TableCell sx={{ fontWeight: 500 }}>{row.shift}</TableCell>
                {shiftCoverageDepartments.map(({ key }) => {
                  const value = row[key];
                  const styles = getCoverageStyle(theme, value);

                  return (
                    <TableCell
                      key={key}
                      align="center"
                      sx={{
                        fontWeight: 600,
                        borderRadius: 1,
                        border: '1px solid',
                        borderColor: alpha(theme.palette.divider, 0.4),
                        ...styles,
                      }}
                    >
                      {value}%
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
};

export default ShiftCoverageHeatMap;
