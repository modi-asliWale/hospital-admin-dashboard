import { createContext, useContext, useMemo, useState } from 'react';

export const defaultFilters = {
  date: '',
  department: 'All Departments',
  shift: 'All Shifts',
  search: '',
};

export const shiftOptions = ['All Shifts', 'Morning', 'Afternoon', 'Evening', 'Night'];

const FilterContext = createContext({
  filters: defaultFilters,
  setDate: () => {},
  setDepartment: () => {},
  setShift: () => {},
  setSearch: () => {},
  resetFilters: () => {},
});

export const FilterProvider = ({ children, initialFilters = defaultFilters }) => {
  const mergedInitialFilters = useMemo(
    () => ({ ...defaultFilters, ...initialFilters }),
    [initialFilters],
  );

  const [filters, setFilters] = useState(mergedInitialFilters);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({ ...defaultFilters });
  };

  const value = useMemo(
    () => ({
      filters,
      setDate: (date) => updateFilter('date', date),
      setDepartment: (department) => updateFilter('department', department),
      setShift: (shift) => updateFilter('shift', shift),
      setSearch: (search) => updateFilter('search', search),
      resetFilters,
    }),
    [filters],
  );

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }

  return context;
};
