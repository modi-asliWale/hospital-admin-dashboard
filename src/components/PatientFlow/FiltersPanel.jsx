import { Box, Paper, TextField, MenuItem, Button } from '@mui/material';
import { FilterList, Refresh } from '@mui/icons-material';
import { departmentOptions } from '../../data/patientFlowMockData';

const FiltersPanel = ({ selectedDepartment, onDepartmentChange, selectedDate, onDateChange, onRefresh }) => {
  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FilterList color="primary" />
        </Box>
        
        <TextField
          select
          label="Department"
          value={selectedDepartment}
          onChange={(e) => onDepartmentChange(e.target.value)}
          size="small"
          sx={{ minWidth: 200 }}
        >
          {departmentOptions.map((dept) => (
            <MenuItem key={dept} value={dept}>
              {dept}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          type="date"
          label="Date"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          size="small"
          InputLabelProps={{ shrink: true }}
          sx={{ minWidth: 180 }}
        />

        <Button
          variant="outlined"
          startIcon={<Refresh />}
          onClick={onRefresh}
          size="small"
        >
          Refresh
        </Button>
      </Box>
    </Paper>
  );
};

export default FiltersPanel;
