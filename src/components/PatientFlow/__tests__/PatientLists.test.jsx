import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PatientLists from '../PatientLists';
import { FilterProvider, defaultFilters } from '../../../context/FilterContext';

const renderLists = (initialFilters = defaultFilters) =>
  render(
    <FilterProvider initialFilters={initialFilters}>
      <PatientLists />
    </FilterProvider>,
  );

describe('PatientLists', () => {
  it('displays default patient counts when no filters are applied', () => {
    renderLists();

    expect(screen.getByRole('tab', { name: /Admitted \(5\)/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Discharged \(3\)/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Pending \(3\)/i })).toBeInTheDocument();
  });

  it('shows an informative empty state when a filter removes all admitted patients', () => {
    renderLists({
      ...defaultFilters,
      department: 'Finance',
    });

    expect(
      screen.getByText(/No admitted patients match the current filters/i),
    ).toBeInTheDocument();
  });

  it('filters pending patients based on global criteria', async () => {
    const user = userEvent.setup();

    renderLists({
      ...defaultFilters,
      department: 'Emergency',
      shift: 'Night',
      date: '2024-01-23',
      search: 'Henry',
    });

    await user.click(screen.getByRole('tab', { name: /Pending/i }));

    expect(screen.getByText('Henry Clark')).toBeInTheDocument();
    expect(screen.queryByText('Grace Martinez')).not.toBeInTheDocument();
  });
});
