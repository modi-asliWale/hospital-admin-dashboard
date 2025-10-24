import { useId, useMemo, useRef } from 'react';
import {
  Paper,
  Box,
  TextField,
  MenuItem,
  Stack,
  Typography,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import {
  FilterList,
  Search,
  Clear as ClearIcon,
  FilterAltOff as FilterAltOffIcon,
} from '@mui/icons-material';
import { departmentOptions } from '../../data/patientFlowMockData';
import { useFilters, shiftOptions } from '../../context/FilterContext';

const GlobalFilters = () => {
  const descriptionId = useId();
  const searchFieldId = useId();
  const searchInputRef = useRef(null);
  const {
    filters: { date, department, shift, search },
    setDate,
    setDepartment,
    setShift,
    setSearch,
    resetFilters,
  } = useFilters();

  const activeFiltersDescription = useMemo(() => {
    const departmentText = department === 'All Departments' ? 'all departments' : department;
    const shiftText = shift === 'All Shifts' ? 'every shift' : `${shift.toLowerCase()} shift`;
    const dateText = date ? `on ${new Date(date).toLocaleDateString()}` : 'for all dates';
    const searchText = search ? `matching "${search}"` : 'with no keyword filter';

    return `Displaying data for ${departmentText}, ${shiftText}, ${dateText}, ${searchText}.`;
  }, [date, department, shift, search]);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      resetFilters();
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }
  };

  const handleReset = () => {
    resetFilters();
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <Paper
      component="section"
      role="region"
      aria-label="Global dashboard filters"
      aria-describedby={descriptionId}
      onKeyDown={handleKeyDown}
      sx={{
        p: { xs: 2, md: 3 },
        mb: { xs: 3, md: 4 },
        borderRadius: 3,
        boxShadow: { xs: 1, md: 2 },
      }}
    >
      <Typography id={descriptionId} sx={visuallyHidden} aria-live="polite">
        {activeFiltersDescription}
      </Typography>

      <Stack
        spacing={2}
        direction={{ xs: 'column', xl: 'row' }}
        alignItems={{ xs: 'stretch', xl: 'center' }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FilterList color="primary" aria-hidden="true" />
          <Typography variant="subtitle1" fontWeight={600}>
            Filters
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            flexGrow: 1,
            width: '100%',
            '& .MuiTextField-root': {
              flex: { xs: '1 1 100%', md: '1 1 auto' },
              minWidth: { xs: '100%', sm: 200 },
            },
          }}
        >
          <TextField
            id={`${searchFieldId}-search`}
            label="Search dashboard"
            placeholder="Find patients, staff, or metrics"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            autoComplete="off"
            size="small"
            inputRef={searchInputRef}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search aria-hidden="true" />
                </InputAdornment>
              ),
              endAdornment: search ? (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setSearch('')}
                    aria-label="Clear search"
                    edge="end"
                  >
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ) : undefined,
            }}
          />

          <TextField
            id={`${searchFieldId}-date`}
            label="Date"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            InputLabelProps={{ shrink: true }}
            size="small"
          />

          <TextField
            id={`${searchFieldId}-department`}
            label="Department"
            select
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            size="small"
          >
            {departmentOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id={`${searchFieldId}-shift`}
            label="Shift"
            select
            value={shift}
            onChange={(event) => setShift(event.target.value)}
            size="small"
          >
            {shiftOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Button
          variant="outlined"
          size="small"
          startIcon={<FilterAltOffIcon />}
          onClick={handleReset}
          aria-label="Reset all dashboard filters"
          sx={{
            alignSelf: { xs: 'stretch', xl: 'flex-start' },
            whiteSpace: 'nowrap',
          }}
        >
          Reset filters
        </Button>
      </Stack>
    </Paper>
  );
};

export default GlobalFilters;
